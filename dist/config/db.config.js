"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const pool = new pg_1.Pool({
    user: (_a = process.env.DB_USER) !== null && _a !== void 0 ? _a : "defaultUser",
    password: (_b = process.env.DB_PASS) !== null && _b !== void 0 ? _b : "defaultPassword",
    host: (_c = process.env.DB_HOST) !== null && _c !== void 0 ? _c : "localhost",
    port: parseInt((_d = process.env.DB_PORT) !== null && _d !== void 0 ? _d : "5432"),
    database: (_e = process.env.DB_NAME) !== null && _e !== void 0 ? _e : "defaultDatabase",
});
exports.default = pool;
