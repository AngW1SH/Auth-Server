import { Strategy as JWTStrategy } from "passport-jwt";
import { prismaAuth as prisma } from "../prisma-client";
import { Request } from "express";

const opts: any = {};
opts.jwtFromRequest = function (req: Request) {
  let token = "";
  if (req && req.signedCookies) {
    token = req.signedCookies["passportauth-access"];
  }
  return token;
};
opts.secretOrKey = process.env.TOKEN_SECRET;

const authenticateStrategy = new JWTStrategy(opts, function (
  jwt_payload,
  done
) {
  prisma.user
    .findFirst({
      where: {
        id: jwt_payload.id,
      },
    })
    .then((user) => {
      if (user) {
        return done(null, user);
      }

      return done(null, false);
    });
});

export default authenticateStrategy;
