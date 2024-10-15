# Proyecto: Web App de E-commerce con Mercado Libre API

Esta aplicación permite buscar productos, ver sus detalles y, opcionalmente, gestionar un carrito de compras. Utiliza la API de Mercado Libre para realizar búsquedas y obtener detalles de los productos seleccionados.

## Enlace a la aplicación

Prueba la aplicación [aquí](https://marefernando03.github.io/).

## Características

- **Búsqueda de productos** utilizando el endpoint de Mercado Libre.
- **Listado de productos** que muestra el nombre, precio y foto de cada uno.
- **Vista de detalle del producto** que incluye nombre, precio, foto y descripción.
- **Navegación fluida** entre la búsqueda de productos y los detalles usando React Router.
- **Botón para regresar** a la vista de búsqueda desde el detalle de producto.

### Power Ups Implementados

- Si un producto tiene más de una foto, se muestra un **carousel** para visualizar las imágenes.
- Se puede **filtrar la búsqueda** de productos por categorías.
- La vista de detalle del producto incluye una **tabla con los atributos adicionales** del producto.

## Tecnologías utilizadas

- **React.js** para la creación de componentes y lógica de la aplicación.
- **React Router** para la gestión de rutas entre las vistas de búsqueda y detalle.
- **API de Mercado Libre** para la búsqueda y detalles de productos.

## Cómo usar la aplicación

1. **Buscar productos**: En la página principal, utiliza el campo de búsqueda para ingresar el nombre del producto que deseas buscar.
2. **Ver el listado de productos**: Los resultados de la búsqueda mostrarán el nombre, precio y foto de cada producto.
3. **Ver detalles de un producto**: Haz clic en cualquier producto de la lista para ver más detalles, incluyendo una descripción y más fotos.
4. **Navegación**: Puedes regresar a la vista de búsqueda usando el botón "Volver".
5. **Power Ups**: Explora las fotos de los productos con el carousel y revisa la tabla de atributos en la vista de detalle.

## Endpoints utilizados

- **Búsqueda de productos**: `https://api.mercadolibre.com/sites/MLA/search?q={producto}`
- **Detalles de un producto**: `https://api.mercadolibre.com/items/{id_producto}`

## Instalación y uso local

1. Clona el repositorio:
    ```bash
    git clone https://github.com/mareFernando03/meli.git
    ```
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Inicia la aplicación:
    ```bash
    npm start
    ```
4. Accede a la aplicación en el navegador:
    ```arduino
    http://localhost:3000
    ```

## Requisitos técnicos

- Al menos **5 componentes de React**.
- Al menos **2 vistas gestionadas con React Router**.
- Llamadas a **2 endpoints distintos** de la API de Mercado Libre.
- Mínimo **un commit por integrante** en el repositorio.

## Autores

- [Fernando Mare](https://github.com/mareFernando03)
- [Fabricio Quinteros](https://github.com/FabriQuinteros)
