// import { PrismaClient as PrismaClientApp } from "./prisma/app-db/client";
import { PrismaClient as PrismaClientAuth } from "./prisma/auth-db/client";

// export const prismaApp = new PrismaClient();
export const prismaAuth = new PrismaClientAuth();
