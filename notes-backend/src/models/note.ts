import mongoose, { Schema, Document } from 'mongoose';

interface INote extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema: Schema = new Schema(
{
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
  }
);

export default mongoose.model<INote>('Note', noteSchema);
