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
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPedidoPorIdController = exports.obtenerPedidosController = exports.crearPedidoController = void 0;
const orderServices_1 = require("./orderServices");
const crearPedidoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedido = yield (0, orderServices_1.crearPedido)(req.body);
        res.status(201).json(pedido);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.crearPedidoController = crearPedidoController;
const obtenerPedidosController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedidos = yield (0, orderServices_1.obtenerPedidos)();
        res.status(200).json(pedidos);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.obtenerPedidosController = obtenerPedidosController;
const obtenerPedidoPorIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedido = yield (0, orderServices_1.obtenerPedidoPorId)(parseInt(req.params.id));
        if (pedido) {
            res.status(200).json(pedido);
        }
        else {
            res.status(404).json({ error: "Pedido no encontrado" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.obtenerPedidoPorIdController = obtenerPedidoPorIdController;
