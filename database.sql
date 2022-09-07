
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "garden" (
	"user_id" int NOT NULL,
	"is_active" BOOLEAN NOT NULL DEFAULT 'true',
	"garden_name" varchar(100) NOT NULL,
	"garden_id" serial NOT NULL,
	CONSTRAINT "garden_pk" PRIMARY KEY ("garden_id")
) WITH (
  OIDS=FALSE
);
-- CREATE TABLE



CREATE TABLE "crop" (
	"crop_id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	"sow_instructions" varchar(255),
	"spacing" varchar(255),
	"harvest_instructions" varchar(255),
	"companion_crops" varchar(255),
	"culinary_hints" varchar(255),
	"image" varchar(255),
	"url" varchar(255),
	CONSTRAINT "crop_pk" PRIMARY KEY ("crop_id")
) WITH (
  OIDS=FALSE
);
--CREATE TABLE


CREATE TABLE "garden_crop" (
	"garden_id" int NOT NULL,
	"crop_id" int NOT NULL,
	"id" serial NOT NULL,
	"quantity" int NOT NULL,
	CONSTRAINT "garden_crop_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
--CREATE TABLE
DROP TABLE "crop";



CREATE TABLE "garden_note" (
	"gnote_id" serial NOT NULL,
	"gnote_stamp" TIMESTAMP NOT NULL,
	"gnote_text" varchar(1500) NOT NULL,
	"garden_id" int NOT NULL,
	CONSTRAINT "garden_note_pk" PRIMARY KEY ("gnote_id")
) WITH (
  OIDS=FALSE
);
--CREATE TABLE



CREATE TABLE "crop_note" (
	"cnote_id" serial NOT NULL,
	"cnote_stamp" TIMESTAMP NOT NULL,
	"cnote_text" varchar(1500) NOT NULL,
	"garden_crop_id" int NOT NULL,
	CONSTRAINT "crop_note_pk" PRIMARY KEY ("cnote_id")
) WITH (
  OIDS=FALSE
);
--CREATE TABLE



ALTER TABLE "garden" ADD CONSTRAINT "garden_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
--ALTER TABLE

ALTER TABLE "garden_crop" ADD CONSTRAINT "garden_crop_fk0" FOREIGN KEY ("garden_id") REFERENCES "garden"("garden_id");
--ALTER TABLE

ALTER TABLE "garden_crop" ADD CONSTRAINT "garden_crop_fk1" FOREIGN KEY ("crop_id") REFERENCES "crop"("crop_id");
--ALTER TABLE


ALTER TABLE "garden_note" ADD CONSTRAINT "garden_note_fk0" FOREIGN KEY ("garden_id") REFERENCES "garden"("garden_id");
--ALTER TABLE

ALTER TABLE "crop_note" ADD CONSTRAINT "crop_note_fk0" FOREIGN KEY ("garden_crop_id") REFERENCES "garden_crop"("id");
--ALTER TABLE

select * from "crop";