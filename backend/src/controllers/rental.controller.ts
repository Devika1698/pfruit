import { Request, Response } from 'express';
import RentalEquipment from '../models/rental.model';
import { saveBase64Image, deleteImage } from '../utils/imageUpload';

// Get all rental equipment
export const getAllRentalEquipment = async (req: Request, res: Response) => {
  try {
    const { category, search, availability } = req.query;

    // Build filter object
    const filter: any = {};
    
    if (category) {
      filter.category = category;
    }
    
    if (availability !== undefined) {
      filter.availability = availability === 'true';
    }
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { keyFeatures: { $regex: search, $options: 'i' } }
      ];
    }

    const equipment = await RentalEquipment.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: equipment.length,
      data: equipment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching rental equipment',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get a single rental equipment by ID
export const getRentalEquipmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const equipment = await RentalEquipment.findById(id);

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: 'Rental equipment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: equipment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching rental equipment',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create new rental equipment
export const createRentalEquipment = async (req: Request, res: Response) => {
  try {
    let { name, category, imageUrl, description, dailyRate, keyFeatures, availability, imageBase64 } = req.body;

    // Validate required fields
    if (!name || !category || (!imageUrl && !imageBase64) || dailyRate === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, category, (imageUrl or imageBase64), and dailyRate'
      });
    }

    // Handle base64 image upload
    if (imageBase64) {
      const fileName = `${name.replace(/\s+/g, '-')}-${Date.now()}`;
      imageUrl = saveBase64Image(imageBase64, fileName);
    }

    const newEquipment = await RentalEquipment.create({
      name,
      category,
      imageUrl,
      description,
      dailyRate,
      keyFeatures,
      availability: availability !== undefined ? availability : true
    });

    res.status(201).json({
      success: true,
      message: 'Rental equipment created successfully',
      data: newEquipment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating rental equipment',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Update rental equipment
export const updateRentalEquipment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, category, imageUrl, description, dailyRate, keyFeatures, availability } = req.body;

    const equipment = await RentalEquipment.findByIdAndUpdate(
      id,
      { name, category, imageUrl, description, dailyRate, keyFeatures, availability },
      { new: true, runValidators: true }
    );

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: 'Rental equipment not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Rental equipment updated successfully',
      data: equipment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating rental equipment',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete rental equipment
export const deleteRentalEquipment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const equipment = await RentalEquipment.findByIdAndDelete(id);

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: 'Rental equipment not found'
      });
    }

    // Delete the image file if it's stored locally
    if (equipment.imageUrl.startsWith('/uploads/')) {
      deleteImage(equipment.imageUrl);
    }

    res.status(200).json({
      success: true,
      message: 'Rental equipment deleted successfully',
      data: equipment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting rental equipment',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
