import { Request, Response } from 'express';
import WeddingImage from '../models/wedding.model';
import { saveBase64Image, deleteImage } from '../utils/imageUpload';

// Get all wedding images
export const getAllWeddingImages = async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;

    // Build filter object
    const filter: any = {};
    
    if (category) {
      filter.category = category;
    }
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const images = await WeddingImage.find(filter).sort({ uploadDate: -1 });

    res.status(200).json({
      success: true,
      count: images.length,
      data: images
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching wedding images',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create a new wedding image
export const createWeddingImage = async (req: Request, res: Response) => {
  try {
    let { title, category, imageUrl, description, imageBase64 } = req.body;

    // Validate required fields
    if (!title || !category || (!imageUrl && !imageBase64)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, category, and either imageUrl or imageBase64'
      });
    }

    // Handle base64 image upload
    if (imageBase64) {
      const fileName = `${title.replace(/\s+/g, '-')}-${Date.now()}`;
      imageUrl = saveBase64Image(imageBase64, fileName);
    }

    const newImage = await WeddingImage.create({
      title,
      category,
      imageUrl,
      description,
      uploadDate: new Date()
    });

    res.status(201).json({
      success: true,
      message: 'Wedding image created successfully',
      data: newImage
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating wedding image',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Update a wedding image
export const updateWeddingImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, category, imageUrl, description } = req.body;

    const image = await WeddingImage.findByIdAndUpdate(
      id,
      { title, category, imageUrl, description },
      { new: true, runValidators: true }
    );

    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Wedding image not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Wedding image updated successfully',
      data: image
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating wedding image',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete a wedding image
export const deleteWeddingImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const image = await WeddingImage.findByIdAndDelete(id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Wedding image not found'
      });
    }

    // Delete the image file if it's stored locally
    if (image.imageUrl.startsWith('/uploads/')) {
      deleteImage(image.imageUrl);
    }

    res.status(200).json({
      success: true,
      message: 'Wedding image deleted successfully',
      data: image
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting wedding image',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
