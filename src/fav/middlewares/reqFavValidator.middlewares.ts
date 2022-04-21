import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import * as yup from 'yup';
import { UserModel } from '../../user/entity/models/user.models';

export const createFavSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required('user_id is required'),
    name: yup.string().required('name is required'),
    fav_items: yup.array()
      .of(
        yup.object().shape({
          title: yup.string().required('title is required'),
          description: yup.string().required('description is required'),
          link: yup.string().required('link is required')
        })
      )
  })
});

export const userIdExistsValidator = async(user_id: string) => {
  const exists = await UserModel.findById(user_id);
  if (!exists) {
    throw new ApplicationError(400, 'Invalid user Id', 'validation');
  }
}

export const reqFavValidator = (schema: any)=>async (
  req: Request,
  _res: Response,
  next: NextFunction
  ) => {
  try {
    await userIdExistsValidator(req.body.user_id);
    await schema.validate({
      body: req.body
    });
    next()
  } catch (error:any) {
    next(new ApplicationError(403,error,'validation'));
  }
}