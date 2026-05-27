import jwt from "jsonwebtoken"
import "dotenv/config"

import type { JWTinterface } from "../../domain/services/jwt-interface.js"

const secretKeyJwt = process.env.SECRECT_JWT!

export class JWTservice implements JWTinterface {

  async sign(userId: string): Promise<string> {

    const token = jwt.sign(
      {
        userId
      },
      secretKeyJwt,
      {
        expiresIn: "1d"
      }
    )

    return token
  }

  async verify(token: string): Promise<{ userId: string }> {

    const decoded = jwt.verify(
      token,
      secretKeyJwt
    ) as jwt.JwtPayload

    return {
      userId: decoded.userId
    }
  }

}