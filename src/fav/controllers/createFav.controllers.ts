import { tokenService } from "../../auth/utils/token.utils";
import { NextFunction, Request, Response } from "express";
import { ICreateFav } from "../entity/types/fav.types";
import { createFavService } from "../services/createFav.services";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";


const {validateToken} = tokenService

export const createFav = async(
  req: Request<{},{},ICreateFav>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const fav = await createFavService(req.body);
    res.status(201).json({success: true, data:fav});
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}