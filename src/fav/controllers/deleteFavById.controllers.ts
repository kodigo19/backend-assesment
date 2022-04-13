import { NextFunction, Request, Response } from "express";
import { deleteFavByIdService } from "../services/deleteFavById.services";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { tokenService } from "../../auth/utils/token.utils";

export const deleteFavById =async(
  req: Request<{fav_id: string}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedFav = await deleteFavByIdService(req.params.fav_id);
    res.status(200).json({success: true, data: deletedFav});
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}