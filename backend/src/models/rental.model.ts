import mongoose, { Schema, Document } from 'mongoose';

export interface IRentalEquipment extends Document {
  name: string;
  category: 'cameras' | 'lighting' | 'audio' | 'video' | 'accessories';
  imageUrl: string;
  description: string;
  dailyRate: number;
  keyFeatures: string;
  availability: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const rentalEquipmentSchema: Schema<IRentalEquipment> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide equipment name'],
      trim: true,
      maxlength: [100, 'Equipment name cannot be more than 100 characters']
    },
    category: {
      type: String,
      enum: ['cameras', 'lighting', 'audio', 'video', 'accessories'],
      required: [true, 'Please select a category']
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide an image URL']
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot be more than 500 characters']
    },
    dailyRate: {
      type: Number,
      required: [true, 'Please provide a daily rate'],
      min: [0, 'Daily rate cannot be negative']
    },
    keyFeatures: {
      type: String,
      trim: true,
      maxlength: [1000, 'Key features cannot be more than 1000 characters']
    },
    availability: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IRentalEquipment>('RentalEquipment', rentalEquipmentSchema);
