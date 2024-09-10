import pool from "../config/db.config";

interface Producto {
  nombre: string;
  stock: number;
  descripcion?: string;
}

export const crearProducto = async (producto: Producto) => {
  const { nombre, stock, descripcion } = producto;
  const result = await pool.query(
    "INSERT INTO productos (nombre, stock, descripcion) VALUES ($1, $2, $3) RETURNING *",
    [nombre, stock, descripcion]
  );
  return result.rows[0];
};

export const obtenerProductos = async () => {
  const result = await pool.query("SELECT * FROM productos");
  return result.rows;
};

export const obtenerProductoPorId = async (id: number) => {
  const result = await pool.query("SELECT * FROM productos WHERE id = $1", [
    id,
  ]);
  return result.rows[0];
};
