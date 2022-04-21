import { NextFunction, Request, Response } from "express";
import { IFavItem } from "../entity/types/fav.types";
import { addFavItemService } from "../services/addFavItem.services";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const addFavItem = async(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {fav_id, requestFavItem} = req.body
    const fav = await addFavItemService(fav_id, requestFavItem);
    res.status(201).json({success: true, data:fav});
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}