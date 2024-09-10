import { Router } from "express";
import {
  crearPedidoController,
  obtenerPedidosController,
  obtenerPedidoPorIdController,
} from "./orderController";

const router = Router();

router.post("/pedidos", crearPedidoController);
router.get("/pedidos", obtenerPedidosController);
router.get("/pedidos/:id", obtenerPedidoPorIdController);

export default router;
