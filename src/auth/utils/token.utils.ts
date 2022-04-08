import jwt from "jsonwebtoken";
import tokenConfig from "../../config/token.config";

export const tokenService = {
  createToken: (payload:{}): string => {
    return jwt.sign(payload, tokenConfig.secret, {
      algorithm: 'HS256',
      expiresIn: tokenConfig.expires
    });
  },
  validateToken: (token: string) => {
    try {
      return <jwt.UserIdJwtPayload>(jwt.verify(token, tokenConfig.secret));
    } catch (error: any) {
      throw new Error("Invalid token");
    }
  },
  createRefreshToken: (payload: {}): string => {
    return jwt.sign(payload, tokenConfig.refresh_secret,{
      algorithm: 'HS256',
      expiresIn: tokenConfig.refresh_expires
    })
  },
  validateRefreshToken: (token: string) => {
    return <jwt.UserIdJwtPayload>(jwt.verify(token, tokenConfig.refresh_secret));
  }
}