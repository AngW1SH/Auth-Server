-- CreateTable
CREATE TABLE "Pomodoro" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repeats" INTEGER NOT NULL,

    CONSTRAINT "Pomodoro_pkey" PRIMARY KEY ("id")
);
