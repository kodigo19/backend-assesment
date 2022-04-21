import { createUser } from "../controllers/userSignUp.controllers";
import { reqLoginUserValidator, reqUserValidator, signInUserSchema, signUpClientSchema } from "../middlewares/reqUserValidator.middleware";
import { Router } from "express";
import { loginUser } from "../controllers/userSignIn.controllers";

const router: Router = Router();

router.post('/auth/local/signup',reqUserValidator(signUpClientSchema), createUser);
router.post('/auth/local/login', reqLoginUserValidator(signInUserSchema), loginUser);

export default router;