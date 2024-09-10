# Proyecto de Gestión de Productos y Pedidos

Este proyecto es una API para gestionar productos y pedidos utilizando Node.js, Express y PostgreSQL.

## Requisitos

- Node.js (versión 14 o superior)
- PostgreSQL
- npm (gestor de paquetes de Node.js)

## Instalación

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:

   ```env
   DB_USER=tu_usuario
   DB_PASS=tu_contraseña
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=tu_base_de_datos
   PORT=3000
   ```

4. Ejecuta las migraciones para crear las tablas en la base de datos:

   ```bash
   npm run migrate
   ```

5. Inicia el servidor:

   ```bash
   npm start
   ```

## Endpoints

### Productos

- `POST /catalogo/productos`: Crear un nuevo producto.
- `GET /catalogo/productos`: Obtener todos los productos.
- `GET /catalogo/productos/:id`: Obtener un producto por ID.

### Pedidos

- `POST /pedidos`: Crear un nuevo pedido.
- `GET /pedidos`: Obtener todos los pedidos.
- `GET /pedidos/:id`: Obtener un pedido por ID.
