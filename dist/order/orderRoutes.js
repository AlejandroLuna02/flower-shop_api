"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("./orderController");
const router = (0, express_1.Router)();
router.post("/pedidos", orderController_1.crearPedidoController);
router.get("/pedidos", orderController_1.obtenerPedidosController);
router.get("/pedidos/:id", orderController_1.obtenerPedidoPorIdController);
exports.default = router;
