import { Pool } from "pg";
import { config } from "dotenv";

config();

const pool = new Pool({
  user: process.env.DB_USER ?? "defaultUser",
  password: process.env.DB_PASS ?? "defaultPassword",
  host: process.env.DB_HOST ?? "localhost",
  port: parseInt(process.env.DB_PORT ?? "5432"),
  database: process.env.DB_NAME ?? "defaultDatabase",
});

export default pool;
