import { Types } from 'mongoose';

export type FavIdType = {
  _id: Types.ObjectId,
}

export type FavItemIdType = {
  _id: Types.ObjectId,
}

export interface IFavItem {
  id: FavIdType,
  title: string,
  description: string,
  link: string,
}

export interface IFav {
  id: FavIdType,
  name: string,
  fav_items: IFavItem[] | [],
  created_at: Date,
  updated_at: Date,
  user_id: string | Types.ObjectId,
}

export type ICreateFav = Omit<IFav, 'id' | 'created_at' | 'updated_at'>