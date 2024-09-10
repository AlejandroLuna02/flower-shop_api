import { Request, Response } from "express";
import {
  crearPedido,
  obtenerPedidos,
  obtenerPedidoPorId,
} from "./orderServices";

export const crearPedidoController = async (req: Request, res: Response) => {
  try {
    const pedido = await crearPedido(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const obtenerPedidosController = async (
  _req: Request,
  res: Response
) => {
  try {
    const pedidos = await obtenerPedidos();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const obtenerPedidoPorIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const pedido = await obtenerPedidoPorId(parseInt(req.params.id));
    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).json({ error: "Pedido no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
