-- CreateTable
CREATE TABLE "cars" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "plate" VARCHAR(15),
    "manufacture_id" VARCHAR,
    "model" VARCHAR(50),
    "image" VARCHAR(255),
    "rentPerDay" INTEGER,
    "capacity" INTEGER,
    "description" TEXT,
    "availableAt" TIMESTAMP(6),
    "transmission" VARCHAR(20),
    "available" BOOLEAN,
    "type_id" VARCHAR,
    "year" INTEGER,
    "options" JSON,
    "specs" JSON,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manufactures" (
    "id" BIGSERIAL NOT NULL,
    "description" TEXT,
    "establishment" INTEGER,
    "office" VARCHAR(100),
    "country" VARCHAR(50),
    "logo" VARCHAR(255),
    CONSTRAINT "manufactures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" BIGSERIAL NOT NULL,
    "type" VARCHAR(50),
    "description" TEXT,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "profile_picture" VARCHAR,
    "role_id" INTEGER NOT NULL DEFAULT 2,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_idx" ON "users"("email");
