-- CreateTable
CREATE TABLE "UserEmailConfirm" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userid" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "UserEmailConfirm_pkey" PRIMARY KEY ("id")
);
