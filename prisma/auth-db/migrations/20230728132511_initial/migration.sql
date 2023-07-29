-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "refresh" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEmailConfirm" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userid" TEXT NOT NULL DEFAULT '',
    "creationtime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserEmailConfirm_pkey" PRIMARY KEY ("id")
);
