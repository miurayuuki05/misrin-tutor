-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_jwt" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "jwt" TEXT NOT NULL,

    CONSTRAINT "admin_jwt_pkey" PRIMARY KEY ("id")
);
