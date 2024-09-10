"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catalogController_1 = require("./catalogController");
const router = (0, express_1.Router)();
router.post("/productos", catalogController_1.crearProductoController);
router.get("/productos", catalogController_1.obtenerProductosController);
router.get("/productos/:id", catalogController_1.obtenerProductoPorIdController);
exports.default = router;
