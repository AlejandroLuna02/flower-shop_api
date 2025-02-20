"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_config_1 = __importDefault(require("./config/db.config"));
const catalogRoutes_1 = __importDefault(require("./catalog/catalogRoutes"));
const orderRoutes_1 = __importDefault(require("./order/orderRoutes")); // Importa las rutas de pedidos
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/catalogo", catalogRoutes_1.default);
app.use("/pedidos", orderRoutes_1.default);
app.get("/", (_req, res) => {
    res.send("Hello World!");
});
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_config_1.default.connect();
            app.listen(port, () => {
                console.log(`Server is running on http://localhost:${port}`);
            });
        }
        catch (error) {
            console.error("Error connecting to the database: ", error);
        }
    });
}
start();
