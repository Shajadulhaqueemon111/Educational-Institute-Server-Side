import jwt from 'jsonwebtoken';

export const createToken = (
  jwtoPyload: Record<string, unknown>,
  secrite: string,
  expiresIn: number,
  //   nicar ta best practise
  //expiresIn: SignOptions["expiresIn"]
): string => {
  return jwt.sign(jwtoPyload, secrite, { expiresIn });
};
