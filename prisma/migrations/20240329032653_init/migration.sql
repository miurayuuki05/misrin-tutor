-- CreateTable
CREATE TABLE "studentdata" (
    "id" SERIAL NOT NULL,
    "parentname" TEXT NOT NULL,
    "studentname" TEXT NOT NULL,
    "studentgrade" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "parentphone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "studentdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otp_table" (
    "email" TEXT NOT NULL,
    "otp" TEXT NOT NULL,

    CONSTRAINT "otp_table_pkey" PRIMARY KEY ("email")
);
