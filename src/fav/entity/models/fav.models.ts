import { model } from 'mongoose';
import { FavSchema } from '../schemas/fav.schemas';
import { IFav } from '../types/fav.types';

export const FavModel = model<IFav>('Fav', FavSchema)