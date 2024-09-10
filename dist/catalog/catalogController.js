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
exports.obtenerProductoPorIdController = exports.obtenerProductosController = exports.crearProductoController = void 0;
const catalogServices_1 = require("./catalogServices");
const crearProductoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield (0, catalogServices_1.crearProducto)(req.body);
        res.status(201).json(producto);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.crearProductoController = crearProductoController;
const obtenerProductosController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield (0, catalogServices_1.obtenerProductos)();
        res.status(200).json(productos);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.obtenerProductosController = obtenerProductosController;
const obtenerProductoPorIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield (0, catalogServices_1.obtenerProductoPorId)(parseInt(req.params.id));
        if (producto) {
            res.status(200).json(producto);
        }
        else {
            res.status(404).json({ error: "Producto no encontrado" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.obtenerProductoPorIdController = obtenerProductoPorIdController;
