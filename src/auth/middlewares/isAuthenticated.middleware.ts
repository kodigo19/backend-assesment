import { tokenService } from "../utils/token.utils";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";

const {validateToken} = tokenService;
export const isAuthenticated = async(
  req:Request,
  res:Response,
  next: NextFunction
) => {
    const {authorization} = req.headers;
    if (!authorization) next(new ApplicationError(401,'No token provided'));
    try {
      await validateToken(authorization!); 
    } catch (error: any) {
      next(new ApplicationError(400, error, 'validation'));
    }
    next();
}