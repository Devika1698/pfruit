import express from 'express';
import {
  getAllRentalEquipment,
  getRentalEquipmentById,
  createRentalEquipment,
  updateRentalEquipment,
  deleteRentalEquipment
} from '../controllers/rental.controller';

const router = express.Router();

// Routes for rental equipment
router.get('/', getAllRentalEquipment);
router.get('/:id', getRentalEquipmentById);
router.post('/', createRentalEquipment);
router.put('/:id', updateRentalEquipment);
router.delete('/:id', deleteRentalEquipment);

export default router;
