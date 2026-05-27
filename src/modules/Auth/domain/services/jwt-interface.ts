

export interface JWTinterface {
  sign(userId: string): Promise<string>
  verify(token: string): Promise<{ userId: string }>
}