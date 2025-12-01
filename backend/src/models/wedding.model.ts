import mongoose, { Schema, Document } from 'mongoose';

export interface IWeddingImage extends Document {
  title: string;
  category: 'ceremony' | 'reception' | 'engagement' | 'pre-wedding' | 'highlights';
  imageUrl: string;
  description: string;
  uploadDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const weddingImageSchema: Schema<IWeddingImage> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters']
    },
    category: {
      type: String,
      enum: ['ceremony', 'reception', 'engagement', 'pre-wedding', 'highlights'],
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
    uploadDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IWeddingImage>('WeddingImage', weddingImageSchema);
