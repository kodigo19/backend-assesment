import { NextFunction, Request, Response } from "express";
import { IFav } from "../entity/types/fav.types";
import { getAllFavsService } from "../services/getAllFavs.services";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const getAllFavs = async (
  req:Request,
  res:Response,
  next: NextFunction
) => {
  try {
    const favs: IFav[] | undefined = await getAllFavsService();
    res.status(200).json({success: true, data: favs});
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}