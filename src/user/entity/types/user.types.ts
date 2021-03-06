import {Types} from "mongoose";

export interface IUser {
  _id: Types.ObjectId | string,
  email: string,
  password: string,
  created_at: Date,
  updated_at: Date,
}

export type UserIdType = {
  _id: Types.ObjectId | string,
}

export type ISignUpUser = Omit<IUser, '_id' | 'created_at' | 'updated_at'>;

export type SignInUser = {
  email: string,
  password: string,
}
