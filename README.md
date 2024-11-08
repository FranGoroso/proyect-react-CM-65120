
# Ecommerce App

¡Bienvenido a **Ecommerce App**! Este proyecto es una aplicación de comercio electrónico creada con React, que incluye funcionalidades de carrito de compras, vista de detalle de productos, manejo de categorías y un backend con Firebase para gestionar datos y pedidos.

---

## Índice

1. [Características](#características)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Requisitos previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Capturas de pantalla](#capturas-de-pantalla)
7. [Contribuciones](#contribuciones)
8. [Contacto](#contacto)

---

## Características

- **Listado de productos**: Muestra todos los productos disponibles.
- **Filtrado por categorías**: Permite filtrar productos según su categoría.
- **Carrito de compras**: Añade productos al carrito y administra cantidades.
- **Detalle de productos**: Muestra información detallada sobre cada producto.
- **Gestión de pedidos**: Firebase se utiliza para guardar las órdenes de compra.
- **Notificaciones interactivas**: Uso de SweetAlert2 para notificaciones agradables al usuario.

---

### Tecnologías Usadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Bootstrap**: Framework de CSS para estilizar la aplicación.
- **Firebase**: Plataforma para backend como servicio, utilizada para manejar la base de datos y las órdenes.
- **Vite**: Herramienta de construcción rápida para desarrollo web moderno, utilizada para inicializar y ejecutar el proyecto.
- **SweetAlert2**: Biblioteca para mostrar alertas personalizadas al usuario.
- **JavaScript**: Lenguaje de programación utilizado para la lógica del proyecto.
- **HTML5 y CSS3**: Tecnologías base para la estructura y el diseño.

---

## Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- Node.js (v16 o superior)
- npm (v7 o superior)
- Una cuenta de Firebase y un proyecto configurado

---

## Instalación

Sigue estos pasos para clonar el repositorio e iniciar el proyecto en tu entorno local:

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. **Accede al directorio del proyecto**:

   ```bash
   cd tu-repo
   ```

3. **Instala las dependencias**:

   ```bash
   npm install
   ```

4. **Configura Firebase**:

   - Ve al archivo `src/firebase/config.js`.
   - Asegúrate de reemplazar las credenciales con las de tu proyecto Firebase:
     ```javascript
     import { initializeApp } from "firebase/app";

     const firebaseConfig = {
         apiKey: "TU_API_KEY",
         authDomain: "TU_AUTH_DOMAIN",
         projectId: "TU_PROJECT_ID",
         storageBucket: "TU_STORAGE_BUCKET",
         messagingSenderId: "TU_MESSAGING_SENDER_ID",
         appId: "TU_APP_ID",
     };

     export const app = initializeApp(firebaseConfig);
     ```
   - Si no tienes un proyecto en Firebase:
     - Ve a [Firebase Console](https://console.firebase.google.com/).
     - Crea un proyecto.
     - Genera las credenciales y configúralas en el archivo `config.js`.

5. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev


6. **Abre tu navegador y visita** `http://localhost:5173` (o el puerto que se indique en la terminal) para ver la aplicación en acción.


---

## Uso

1. Navega por los productos y filtra por categorías.
2. Añade productos al carrito y ajusta las cantidades.
3. Finaliza la compra completando el formulario con tus datos.
4. Recibirás un ID único de orden al completar la compra con éxito.

---

## Capturas de pantalla

### Vista principal
![Vista principal](/src/assets/screenshots/captura-inicio-react-ecommerce.png) 

### Vista del carrito
![Vista del carrito](/src/assets/screenshots/captura-carrito-react-ecommerce.png) 

### Finalización de la compra
![Finalización de la compra](/src/assets/screenshots/captura-finalizar-compra-react-ecommerce.png) 

---

## Contribuciones

Las contribuciones no estan habilitadas al ser un proyecto academico actualmente.
---

## Contacto

Si tienes preguntas o comentarios sobre este proyecto, no dudes en contactarme:

- **Nombre**: Francisco Goroso
- **Email**: contacto@frangoroso.com
- **GitHub**: [https://github.com/FranGoroso](https://github.com/FranGoroso)
- **Linkedin**: [https://www.linkedin.com/in/francisco-goroso-609796266/](https://www.linkedin.com/in/francisco-goroso-609796266/)
