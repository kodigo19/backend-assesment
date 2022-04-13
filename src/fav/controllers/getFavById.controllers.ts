import { NextFunction, Request, Response } from "express"
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { getFavByIdService } from "../services/getFavById.services";

export const getFavById = async(
  req:Request<{ fav_id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const fav = await getFavByIdService(req.params.fav_id);
    res.status(200).json({success: true, data: fav});
  } catch (error:any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}