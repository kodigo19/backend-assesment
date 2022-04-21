import { Schema } from 'mongoose';
import { IFav, IFavItem } from '../types/fav.types';

export const FavItemSchema = new Schema<IFavItem>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

export const FavSchema = new Schema<IFav>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  fav_items: {
    type: [FavItemSchema],
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});