import { TokenResponse } from "../entity/types/token.types";
import { createTokenService } from "../services/createToken.services";
import { createUserService } from "../services/createUser.services";
import { NextFunction, Request, Response } from "express";
import { ISignUpUser } from "user/entity/types/user.types";

export const createUser =async (req:Request<{},{},ISignUpUser>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await createUserService(req.body);
    console.log('user---');
    console.log(user)
    const token = await createTokenService(user._id, user);
    console.log('token---');
    console.log(token)
    res.status(201).json({ success: true, token });
  } catch (error: any) {
    throw new Error(`Error getting client: ${error.message}`);
  }
}