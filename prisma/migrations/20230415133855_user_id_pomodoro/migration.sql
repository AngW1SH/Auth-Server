/*
  Warnings:

  - You are about to drop the column `username` on the `Pomodoro` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pomodoro" DROP COLUMN "username",
ADD COLUMN     "userid" TEXT NOT NULL DEFAULT '';
