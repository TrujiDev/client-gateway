# Client Gateway

## Descripción
El Client Gateway actúa como un punto de entrada unificado para todos los microservicios de la aplicación. Su función principal es enrutar las solicitudes de los clientes a los microservicios correspondientes, proporcionando una interfaz coherente y simplificada. Este diseño permite una mejor gestión de las solicitudes, autenticación y balanceo de carga, así como una mayor seguridad al ocultar la complejidad de la arquitectura de microservicios subyacente.

## Funcionalidades
- **Ruteo de Solicitudes**: Redirige las solicitudes del cliente a los microservicios apropiados (productos, órdenes, pagos, etc.).
- **Gestión de Autenticación**: Implementa mecanismos de autenticación para asegurar que solo los usuarios autorizados puedan acceder a ciertos recursos.
- **Centralización de Respuestas**: Compila y presenta respuestas de múltiples microservicios de manera coherente para el cliente.
- **Manejo de Errores**: Proporciona un manejo de errores consistente y claro para las solicitudes realizadas a través del gateway.

## Tecnologías Utilizadas
- **NestJS**: Framework para construir aplicaciones del lado del servidor eficientes y escalables.
- **TypeScript**: Lenguaje de programación que proporciona tipado estático, mejorando la calidad del código.
- **Docker**: Facilita la creación y gestión de contenedores para ejecutar el gateway de manera aislada.
- **NATS**: Sistema de mensajería utilizado para la comunicación entre microservicios.

## Instalación
Para instalar y ejecutar el Client Gateway, sigue estos pasos:

### 1. Clonar el Repositorio
Clona el repositorio del Client Gateway:
```bash
git clone https://github.com/TrujiDev/client-gateway.git
cd client-gateway
```

### 2. Instalar Dependencias
Instala las dependencias necesarias utilizando npm:
```bash
npm install
```

### 3. Configuración del Entorno
Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias:
```env
NATS_URL=nats://localhost:4222
```

### 4. Ejecutar el Client Gateway
Finalmente, ejecuta el gateway:
```bash
npm run start
```

## Uso
El Client Gateway expone varias rutas que permiten interactuar con los microservicios. Algunas de las rutas clave incluyen:

- **POST /api/products**: Crear un nuevo producto (redirigido al microservicio de productos).
- **GET /api/products**: Listar todos los productos (redirigido al microservicio de productos).
- **POST /api/orders**: Crear una nueva orden (redirigido al microservicio de órdenes).
- **POST /api/payments**: Procesar un nuevo pago (redirigido al microservicio de pagos).

## Mantenimiento
Para mantener el Client Gateway actualizado, asegúrate de:
- Revisar y aplicar actualizaciones de seguridad a las dependencias.
- Realizar pruebas regulares para asegurar el correcto funcionamiento del servicio.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este microservicio, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`).
3. Haz un commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Haz push a la branch (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.
