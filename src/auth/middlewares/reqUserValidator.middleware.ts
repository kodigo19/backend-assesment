import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import * as yup from "yup";
import { UserModel } from "../../user/entity/models/user.models";

export const signUpClientSchema = yup.object({
  body: yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Min length is 8')
      .required('Password is required.')
      .test("isValidPass",  'Passowrd must be 8 char (One UpperCase & One Symbol)', (value:any, context:any) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbole = /[!@#%&]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 4;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      })
  })
})

export const emailExistsValidator = async(email: string) => {
  console.log('Email exists validator');
  const exists = await UserModel.findOne({email});
  console.log(exists);
  if (exists) {
    throw new ApplicationError(400, 'Email is already taken', 'validation');
  }
}

export const reqUserValidator = (schema: any) => async(req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body
    });
    await emailExistsValidator(req.body.email);
    next();
  } catch (error:any) {
    next(new ApplicationError(400, error, 'validation'));
  }
}