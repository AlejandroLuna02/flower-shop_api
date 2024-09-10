import { Request, Response } from "express";
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
} from "./catalogServices";

export const crearProductoController = async (req: Request, res: Response) => {
  try {
    const producto = await crearProducto(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const obtenerProductosController = async (
  _req: Request,
  res: Response
) => {
  try {
    const productos = await obtenerProductos();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const obtenerProductoPorIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const producto = await obtenerProductoPorId(parseInt(req.params.id));
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
