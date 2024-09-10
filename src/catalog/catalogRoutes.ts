import { Router } from "express";
import {
  crearProductoController,
  obtenerProductosController,
  obtenerProductoPorIdController,
} from "./catalogController";

const router = Router();

router.post("/productos", crearProductoController);
router.get("/productos", obtenerProductosController);
router.get("/productos/:id", obtenerProductoPorIdController);

export default router;
