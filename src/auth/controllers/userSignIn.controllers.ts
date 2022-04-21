import { loginUserService } from "../services/loginUser.services";
import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { SignInUser } from "../../user/entity/types/user.types";

export const loginUser =async (
  req: Request<{},{},SignInUser>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = await loginUserService(req.body);
    res.status(200).json({success:true, token});
  } catch (error: any) {
    next(new ApplicationError(401,`${error.message}`));
  }
}