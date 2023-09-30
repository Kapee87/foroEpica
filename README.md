
# Proyecto para EPICA - Foro 

Este repositorio contiene el código fuente de un proyecto desarrollado como parte del curso de EPICA a través del programa en Argentina. El proyecto utiliza Node.js, Express.js y Sequelize para conectar con una base de datos MySQL. Además, necesita ser ejecutado en un servidor local como el que ofrece XAMPP.

## Deploy - Demo
En esta dirección podés encontrar una beta del funcionamiento de la api con vistas SSR(a menos que se caiga el servidor):

- [Foro Epica](https://foro-epica.onrender.com/posts)

y en esta otra se pueden probar los endpoints:

- [Foro Epica](https://foro-epica.onrender.com/api/posts)


## Requisitos Previos

Antes de comenzar con este proyecto, asegúrate de tener instalados los siguientes elementos en tu entorno de desarrollo(Para ejecutarlo de forma local):

- [Node.js](https://nodejs.org/)
- [XAMPP](https://www.apachefriends.org/index.html) u otro servidor local de tu elección
- [MySQL](https://www.mysql.com/) (incluido con XAMPP)

## Configuración del Proyecto

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nombre-del-repo
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Configura la base de datos MySQL en XAMPP creando una base de datos con el nombre que figura en las credenciales de conexión en el archivo `config/database.js`.

## Ejecución del Proyecto

Para ejecutar el proyecto, sigue estos pasos:

1. Inicia tu servidor XAMPP y asegúrate de que MySQL esté en funcionamiento.

2. Abre una terminal y navega al directorio del proyecto.

3. Ejecuta la aplicación:

   ```bash
   npm start
   ```

La aplicación estará disponible en [http://localhost:puerto](http://localhost:puerto), donde `puerto` es el puerto configurado en el archivo `app.js`.


## Licencia

Este proyecto está bajo la licencia [Nombre de la Licencia] - Consulta el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

¡Gracias por utilizar este proyecto! Si tienes alguna pregunta o encuentras algún problema, no dudes en [crear un problema](https://github.com/Kapee87/foroEpica/issues).
