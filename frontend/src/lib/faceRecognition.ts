import * as faceapi from '@vladmandic/face-api';

// Initialize face detection models
let modelsLoaded = false;

export const initializeFaceDetection = async () => {
  if (modelsLoaded) return;

  try {
    const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/';
    
    // Load all required models
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ]);
    
    modelsLoaded = true;
    console.log('Face detection models loaded successfully');
  } catch (error) {
    console.error('Error loading face detection models:', error);
    throw new Error('Failed to load face detection models');
  }
};

// Extract face descriptor from an image
export const getFaceDescriptor = async (imageElement: HTMLImageElement) => {
  try {
    const detections = await faceapi
      .detectSingleFace(imageElement, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (!detections) {
      throw new Error('No face detected in image');
    }

    return detections.descriptor;
  } catch (error) {
    console.error('Error detecting face:', error);
    throw error;
  }
};

// Calculate similarity between two face descriptors (0 to 1, higher = more similar)
export const calculateSimilarity = (
  descriptor1: Float32Array,
  descriptor2: Float32Array
): number => {
  // Euclidean distance between two descriptors
  let sum = 0;
  for (let i = 0; i < descriptor1.length; i++) {
    const diff = descriptor1[i] - descriptor2[i];
    sum += diff * diff;
  }
  const distance = Math.sqrt(sum);
  
  // Convert distance to similarity score (0-1)
  // Lower distance = higher similarity
  return Math.max(0, 1 - distance / 2);
};

// Find matching faces in gallery images
export const findMatchingFaces = async (
  uploadedImage: HTMLImageElement,
  galleryImages: Array<{ src: string; id: string; alt: string }>,
  similarityThreshold: number = 0.6
) => {
  try {
    // Get descriptor of uploaded selfie
    const uploadedDescriptor = await getFaceDescriptor(uploadedImage);

    // Process each gallery image
    const matchingPhotos: Array<{
      id: string;
      src: string;
      alt: string;
      similarity: number;
    }> = [];

    for (const galleryImage of galleryImages) {
      try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = galleryImage.src;

        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });

        const galleryDescriptor = await getFaceDescriptor(img);
        const similarity = calculateSimilarity(uploadedDescriptor, galleryDescriptor);

        if (similarity >= similarityThreshold) {
          matchingPhotos.push({
            id: galleryImage.id,
            src: galleryImage.src,
            alt: galleryImage.alt,
            similarity,
          });
        }
      } catch (error) {
        // Skip images where face detection fails
        console.log(`Skipping image ${galleryImage.id}: No face or detection error`);
      }
    }

    // Sort by similarity (highest first)
    return matchingPhotos.sort((a, b) => b.similarity - a.similarity);
  } catch (error) {
    console.error('Error finding matching faces:', error);
    throw error;
  }
};