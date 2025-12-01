import { useState, useRef, useEffect } from 'react';
import { Upload, Loader, Search, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  initializeFaceDetection,
  findMatchingFaces,
} from '@/lib/faceRecognition';

interface MatchedPhoto {
  id: string;
  src: string;
  alt: string;
  similarity: number;
}

interface FaceRecognitionGalleryProps {
  galleryImages: Array<{ src: string; id: string; alt: string }>;
}

const FaceRecognitionGallery = ({ galleryImages }: FaceRecognitionGalleryProps) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [modelsLoading, setModelsLoading] = useState(true);
  const [matchedPhotos, setMatchedPhotos] = useState<MatchedPhoto[]>([]);
  const [searched, setSearched] = useState(false);
  const [similarityThreshold, setSimilarityThreshold] = useState(0.6);
  const [selectedPhoto, setSelectedPhoto] = useState<MatchedPhoto | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadedImageRef = useRef<HTMLImageElement>(null);

  // Initialize face detection models on component mount
  useEffect(() => {
    const loadModels = async () => {
      try {
        setModelsLoading(true);
        await initializeFaceDetection();
        setModelsLoading(false);
      } catch (error) {
        setModelsLoading(false);
        console.error('Failed to load face detection models:', error);
      }
    };

    loadModels();
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('Please upload an image smaller than 10MB');
      return;
    }

    setUploadedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
      setSearched(false);
      setMatchedPhotos([]);
    };
    reader.readAsDataURL(file);
  };

  const handleSearchFaces = async () => {
    if (!uploadedImageRef.current || !uploadedImage) {
      alert('Please upload a selfie first');
      return;
    }

    if (galleryImages.length === 0) {
      alert('No gallery images available to search');
      return;
    }

    try {
      setLoading(true);
      const matches = await findMatchingFaces(
        uploadedImageRef.current,
        galleryImages,
        similarityThreshold
      );

      setMatchedPhotos(matches);
      setSearched(true);

      if (matches.length === 0) {
        alert(`No photos found with similarity above ${(similarityThreshold * 100).toFixed(0)}%`);
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to search for matching faces');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUploadedImage(null);
    setPreviewUrl(null);
    setMatchedPhotos([]);
    setSearched(false);
    setSelectedPhoto(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (modelsLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Loading face detection models...</p>
            <p className="text-gray-500 text-sm mt-2">This may take a moment on first load</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Yourself in Our Gallery
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Upload a selfie and we'll find all matching photos from our gallery
            </p>
            <p className="text-gray-500">Powered by advanced face recognition technology</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="border-2 border-dashed border-blue-200 bg-white/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Your Selfie
                </CardTitle>
                <CardDescription>
                  Take or upload a clear photo of your face
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>

                {/* Preview */}
                {previewUrl && (
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden bg-gray-100">
                      <img
                        ref={uploadedImageRef}
                        src={previewUrl}
                        alt="Uploaded selfie"
                        className="w-full h-64 object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <Badge className="w-full justify-center py-2">
                      ✓ Image loaded successfully
                    </Badge>
                  </div>
                )}

                {/* Similarity Threshold Control */}
                {previewUrl && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-gray-700">
                        Sensitivity Level
                      </label>
                      <span className="text-sm font-semibold text-blue-600">
                        {(similarityThreshold * 100).toFixed(0)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.3"
                      max="0.95"
                      step="0.05"
                      value={similarityThreshold}
                      onChange={(e) => setSimilarityThreshold(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <p className="text-xs text-gray-500">
                      Higher = stricter matching, Lower = more results
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {previewUrl && (
                    <Button
                      onClick={handleSearchFaces}
                      disabled={loading}
                      className="flex-1"
                    >
                      {loading ? (
                        <>
                          <Loader className="w-4 h-4 mr-2 animate-spin" />
                          Searching...
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          Search Matches
                        </>
                      )}
                    </Button>
                  )}
                  {previewUrl && (
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="flex-1"
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              {searched && (
                <>
                  {matchedPhotos.length > 0 ? (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>Matching Photos ({matchedPhotos.length})</span>
                          <Badge variant="secondary">
                            {(matchedPhotos[0]?.similarity * 100).toFixed(1)}% match
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                          {matchedPhotos.map((photo) => (
                            <div
                              key={photo.id}
                              className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition"
                              onClick={() => setSelectedPhoto(photo)}
                            >
                              <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                <img
                                  src={photo.src}
                                  alt={photo.alt}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate">
                                  {photo.alt}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                                      style={{
                                        width: `${photo.similarity * 100}%`,
                                      }}
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-gray-700 min-w-fit">
                                    {(photo.similarity * 100).toFixed(1)}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center space-y-3">
                          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto" />
                          <p className="text-gray-600 font-medium">No matching photos found</p>
                          <p className="text-gray-500 text-sm">
                            Try adjusting the sensitivity level or upload a clearer photo
                          </p>
                          <Button
                            onClick={handleReset}
                            variant="outline"
                            size="sm"
                          >
                            Try Again
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Full Image Preview Modal */}
          {selectedPhoto && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <Card className="max-w-2xl w-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>{selectedPhoto.alt}</CardTitle>
                    <CardDescription>
                      {(selectedPhoto.similarity * 100).toFixed(1)}% match
                    </CardDescription>
                  </div>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </CardHeader>
                <CardContent>
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaceRecognitionGallery;