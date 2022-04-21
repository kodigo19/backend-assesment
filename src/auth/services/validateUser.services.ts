import { validatePassword } from "../utils/decrypt.utils";
import { IUser, SignInUser } from "../../user/entity/types/user.types";
import { getUserByEmail } from "../../user/services/getUserByEmail.services";

export const validateUserService = async (userRequest:SignInUser): Promise<IUser> => {
  try {
    const user = await getUserByEmail(userRequest.email);
    if (!user) throw new Error('Email not found');
    const auth = validatePassword(userRequest.password, user.password);
    if (!user) throw new Error('Password incorrect');
    return user;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}