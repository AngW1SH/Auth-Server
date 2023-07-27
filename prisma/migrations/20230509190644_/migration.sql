/*
  Warnings:

  - The primary key for the `Pomodoro` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Pomodoro" DROP CONSTRAINT "Pomodoro_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pomodoro_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pomodoro_id_seq";
