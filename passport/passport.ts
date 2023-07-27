import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import { Strategy as JWTStrategy } from "passport-jwt";
import bcrypt from "bcryptjs";
import prisma from "../client";
import loginStrategy from "./loginStrategy";
import authenticateStrategy from "./authenticateStrategy";

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user["id"]);
  });
});

passport.deserializeUser(function (id, cb) {
  const user = prisma.user
    .findFirst({
      where: {
        id: id as string,
      },
    })
    .then((user) => {
      return cb(null, user);
    })
    .catch((err) => {
      return cb(err);
    });
});

passport.use("jwt-authenticate", authenticateStrategy);
passport.use("local-login", loginStrategy);

export default passport;
