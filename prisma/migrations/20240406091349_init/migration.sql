/*
  Warnings:

  - The primary key for the `admin` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "admin" DROP CONSTRAINT "admin_pkey",
ADD CONSTRAINT "admin_pkey" PRIMARY KEY ("username");

-- CreateTable
CREATE TABLE "tutors_data" (
    "id" SERIAL NOT NULL,
    "tutorname" TEXT NOT NULL,
    "tutorphone" TEXT NOT NULL,
    "tutoremail" TEXT NOT NULL,
    "tutorpassword" TEXT NOT NULL,

    CONSTRAINT "tutors_data_pkey" PRIMARY KEY ("id")
);
