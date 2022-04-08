import mongoose from "mongoose";
import { IUser } from "../types/user.types";

const Schema = mongoose.Schema;

export const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

UserSchema.methods.toJSON = function() {
  const { email } = this.toObject();
  return { email };
}