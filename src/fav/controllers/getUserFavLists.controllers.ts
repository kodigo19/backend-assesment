import { NextFunction, Request, Response } from "express";
import { IFav } from "../entity/types/fav.types";
import { getUserFavListsService } from "../services/getUserFavLists.services";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const getUserFavLists = async(
  req: Request<{},{},{},{user_id: string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userFavLists: IFav[] | undefined= await getUserFavListsService(req.query.user_id);
    res.status(200).json({success: true, data: userFavLists});
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}