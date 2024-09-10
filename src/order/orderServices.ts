import pool from "../config/db.config";

interface Pedido {
  nombre_cliente: string;
  direccion: string;
  cantidad: number;
  producto_id: number;
}

export const crearPedido = async (pedido: Pedido) => {
  const { nombre_cliente, direccion, cantidad, producto_id } = pedido;
  const result = await pool.query(
    "INSERT INTO pedidos (nombre_cliente, direccion, cantidad, producto_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [nombre_cliente, direccion, cantidad, producto_id]
  );
  return result.rows[0];
};

export const obtenerPedidos = async () => {
  const result = await pool.query("SELECT * FROM pedidos");
  return result.rows;
};

export const obtenerPedidoPorId = async (id: number) => {
  const result = await pool.query("SELECT * FROM pedidos WHERE id = $1", [id]);
  return result.rows[0];
};
