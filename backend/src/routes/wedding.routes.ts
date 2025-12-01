import express from 'express';
import {
  getAllWeddingImages,
  createWeddingImage,
  updateWeddingImage,
  deleteWeddingImage
} from '../controllers/wedding.controller';

const router = express.Router();

// Routes for wedding images
router.get('/', getAllWeddingImages);
router.post('/', createWeddingImage);
router.put('/:id', updateWeddingImage);
router.delete('/:id', deleteWeddingImage);

export default router;
