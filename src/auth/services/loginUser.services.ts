import { TokenResponse } from "auth/entity/types/token.types";
import { SignInUser } from "user/entity/types/user.types";
import { createTokenService } from "./createToken.services";
import { validateUserService } from "./validateUser.services";

export const loginUserService =async (userRequest:SignInUser): Promise<TokenResponse> => {
  try {
    const user = await validateUserService(userRequest);
    return await createTokenService(user._id,user);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}