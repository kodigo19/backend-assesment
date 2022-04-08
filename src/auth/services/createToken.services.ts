import { tokenService } from "../utils/token.utils";
import { IUser, UserIdType, ISignUpUser } from "../../user/entity/types/user.types";
import { createRefreshTokenService } from "./createRefreshToken.services";

const {createToken} = tokenService;

export const createTokenService = async (userId: string | UserIdType, user: IUser | ISignUpUser | null): Promise<{authToken: string, refreshToken: string}> => {
  try {
    return {
      authToken: createToken({id:userId, user: user}),
      refreshToken: await createRefreshTokenService(userId)
    }
  } catch (error: any) {
    throw new Error(`Error creating tokens auth token ${error.message}`);   
  }
}