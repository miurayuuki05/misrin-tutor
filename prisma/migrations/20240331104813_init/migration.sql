-- AlterTable
ALTER TABLE "admin_jwt" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "admin_jwt_id_seq";
