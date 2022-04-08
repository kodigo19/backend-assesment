import { createUser } from "../controllers/userSignUp.controllers";
import { reqUserValidator, signUpClientSchema } from "../middlewares/reqUserValidator.middleware";
import { Router } from "express";

const router: Router = Router();

router.post('/user/signup',reqUserValidator(signUpClientSchema), createUser);

export default router;