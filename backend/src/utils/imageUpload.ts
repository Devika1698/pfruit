import fs from 'fs';
import path from 'path';

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

/**
 * Save base64 image to file system
 * @param base64Data - Base64 encoded image data
 * @param fileName - Name of the file to save
 * @returns File path for the saved image
 */
export const saveBase64Image = (base64Data: string, fileName: string): string => {
  try {
    // Remove data URI prefix if present
    const base64String = base64Data.replace(/^data:image\/\w+;base64,/, '');
    
    // Generate unique filename
    const uniqueFileName = `${Date.now()}-${fileName}`;
    const filePath = path.join(uploadsDir, uniqueFileName);
    
    // Write file to disk
    fs.writeFileSync(filePath, Buffer.from(base64String, 'base64'));
    
    return `/uploads/${uniqueFileName}`;
  } catch (error) {
    throw new Error(`Failed to save image: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Delete image file
 * @param filePath - Path to the file to delete
 */
export const deleteImage = (filePath: string): void => {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  } catch (error) {
    console.error(`Failed to delete image: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
