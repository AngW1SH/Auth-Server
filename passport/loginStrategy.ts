import { Strategy as localStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import prisma from "../client";

const loginStrategy = new localStrategy(async function verify(
  username,
  password,
  cb
) {
  const doesUserExist = await prisma.user.findFirst({
    where: {
      email: username,
      active: true
    },
  });

  if (doesUserExist === null) {
    return cb(null, false, { message: "Incorrect email or password" });
  }

  bcrypt.compare(password, doesUserExist!.password, function (err, result) {
    if (result) {
      return cb(null, doesUserExist);
    } else {
      return cb(null, false, { message: "Incorrect email or password" });
    }
  });
});

export default loginStrategy;
