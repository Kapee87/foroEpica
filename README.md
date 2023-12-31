# Índice

1. [Proyecto para EPICA - Foro](#proyecto-para-epica-foro)
2. [Deploy - Demo](#deploy---demo)
3. [Problemática](#problemática)
4. [Criterios de evaluación](#criterios-de-evaluación)
5. [Corrección y notas de unidades teóricas](#corrección-y-notas-de-unidades-teóricas)
6. [Requisitos Previos](#requisitos-previos)
7. [Configuración del Proyecto](#configuración-del-proyecto)
8. [Ejecución del Proyecto](#ejecución-del-proyecto)
9. [Licencia](#licencia)

# Proyecto para EPICA - Foro 

Este repositorio contiene el código fuente de un proyecto desarrollado como parte del curso de EPICA a través del programa en Argentina. El proyecto utiliza Node.js, Express.js y Sequelize para conectar con una base de datos MySQL. Además, necesita ser ejecutado en un servidor local como el que ofrece XAMPP.

## Deploy - Demo
En esta dirección podés encontrar una beta del funcionamiento de la api con vistas SSR(a menos que se caiga el servidor):

- [Foro Epica](https://foro-epica.onrender.com/posts)

y en esta otra se pueden probar los endpoints:

- [Foro Epica](https://foro-epica.onrender.com/api/posts)

## Problemática
<details>
  <summary>Ver planteo de la problemática</summary>
  
  ### Creación de un Foro Personalizado para Publicar Contenido Multitemático
     * En un entorno individual y aislado, una persona busca tener la capacidad de crear y compartir publicaciones de temas variados en una página web personal. Cada publicación debe incluir un título descriptivo, contenido informativo, una fecha de creación y la opción de adjuntar el link de una imagen de internet para relacionarla con el contenido. En esta etapa del trabajo, no se requiere manejo de comentarios para las publicaciones.

    * Los estudiantes deben desarrollar un foro en el que esta persona pueda escribir y presentar sus publicaciones de manera atractiva. Esto implica el desarrollo de un formulario de creación de posts que permita ingresar el título y contenido del post, ingresar el enlance (URL) de una imagen de internet relevante y asignar la fecha de creación. Además, se espera que las imágenes se muestren de manera óptima y que el diseño general del foro sea responsivo, proporcionando una experiencia agradable en diferentes dispositivos.

    * La solución a esta problemática requerirá la utilización de tecnologías de programación web, como Node.js, EJS, MySQL y Sequelize. Para el Desarrollo de una interfaz intuitiva y funcional, es recomendable la implementación de Bootstrap lo cual asegurará un diseño responsivo y atractivo. Los estudiantes también tendrán la libertad de aplicar CSS personalizado si lo desean, lo que les permitirá ajustar el estilo y la apariencia del foro de acuerdo con los requisitos y preferencias de diseño. Así también tendrán que abordar cómo manejar la carga y visualización de imágenes, cómo guardar la información en una base de datos individual y cómo presentar las publicaciones en la página para lograr una experiencia efectiva y atractiva para el usuario.

    * Al resolver esta problemática, los estudiantes adquirirán habilidades esenciales en diseño de interfaces, manejo de bases de datos y programación web, permitiéndoles crear una solución personalizada para satisfacer las necesidades de esta persona en la publicación de contenido multitemático en su foro individual.

</details>

## Criterios de evaluación
<details>
  <summary>Ver Criterios de evaluación</summary>
  
  1. Funcionalidad
El foro debe permitir agregar, leer, actualizar y eliminar posts, y mostrarlos correctamente en la página.

  2. Modelo de Datos
Se debe utilizar el modelo de datos especificado con la tabla de posts.

  3. Visualización de Datos
La vista de los post deben contar con los siguientes datos: Título del post, Contenido del post, la imagen relacionada con el link que se coloca en el formulario y la Fecha de creación del post.

  4. Uso de Tecnologías
Correcta utilización de Node.js, Express, EJS, MySQL y Sequelize. Como así también correcta implementación y configuración de los Middlewares.

  5. Diseño Responsivo
El trabajo debe tener implementado Bootstrap para asegurar que el diseño sea responsivo y se adapte a diferentes dispositivos.

  6. Estilo Personalizado
Agregar CSS manual para personalizar y mejorar el diseño de acuerdo con la creatividad de los alumnos si así lo desea.

  7. JavaScript
Utilizar JavaScript para obtener los datos del servidor, así como para editarlos y eliminarlos de forma síncrona.

  8. Documentación
Correcta implementación de comentarios y calidad del código desarrollado.

  9. Repositorio en GitHub
El link del repositorio creado en GitHub, debe tener visibilidad “público” y con el nombre establecido para su presentación. Además debe incluir un archivo “.gitignore” correctamente configurado.

  10. Entrega
El trabajo debe ser entregado en tiempo y forma.
  
  </details>

  ## Corrección y notas de unidades teóricas
<details>
  <summary>Ver Notas</summary>
  
![notas epica](https://github.com/Kapee87/foroEpica/assets/89433307/005b4a15-04cd-4e28-989d-4f6bf1ac2d2b)

  
  </details>

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
