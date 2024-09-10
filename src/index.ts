import express from "express";
import dotenv from "dotenv";
import pool from "./config/db.config";
import catalogoRoutes from "./catalog/catalogRoutes";
import pedidoRoutes from "./order/orderRoutes"; // Importa las rutas de pedidos

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/catalogo", catalogoRoutes);
app.use("/pedidos", pedidoRoutes);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

async function start() {
  try {
    await pool.connect();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

start();
