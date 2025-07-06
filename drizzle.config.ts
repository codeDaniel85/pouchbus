// drizzle kit 참조 파일
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./app/features/**/schema.ts",  // 스키마 파일 위치
    out: "./app/sql/migrations",   // 생성될 파일 위치
    dialect: "postgresql",   // 데이터베이스 연결 방식
    dbCredentials: {
        url: process.env.DATABASE_URL!,   // 데이터베이스 연결 정보
    },
});
