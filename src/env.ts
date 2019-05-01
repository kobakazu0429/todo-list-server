import { config } from "dotenv";

config();

export const DB_CONFIG = {
  USER: process.env.DB_USER || "",
  HOST: process.env.DB_HOST || "",
  DATABASE: process.env.DB_DATABASE || "",
  PASSWORD: process.env.DB_PASSWORD || "",
  DB_PORT: Number(process.env.DB_PORT) || 0,
  DIALECT: process.env.DIALECT || ""
};

export const NODE_ENV = (process.env.NODE_ENV || "prod") as ("prod" | "dev");
