CREATE TYPE "public"."signup_type" AS ENUM('email', 'google', 'apple', 'kakao', 'naver');--> statement-breakpoint
CREATE TABLE "profiles" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"login_id" varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	"user_name" varchar(50) NOT NULL,
	"phone_number" varchar(20),
	"avatar" text,
	"signup_type" "signup_type" DEFAULT 'email' NOT NULL,
	"devide_token" text,
	"etc_1" text,
	"etc_2" text,
	"etc_3" text,
	"etc_4" text,
	"etc_5" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "profiles_login_id_unique" UNIQUE("login_id")
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;