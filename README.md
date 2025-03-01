# Oxigen_Shop
Proyecto_trainig

# Extras
* Estoy usando Windows, que utiliza finales de línea CRLF.
* El archivo `css/styles.css` tiene finales de línea LF, que son típicos de sistemas Unix.
* Git te avisa te avisara para reemplazar los LF por CRLF para mantener la consistencia en tu sistema y viceversa.

**Importancia:**

* La consistencia en los finales de línea es importante para evitar problemas de ejecución y facilitar la comparación y fusión de código.

**Solución:**

* Se recomienda configurar Git para manejar los finales de línea correctamente. Puedes usar un archivo `.gitattributes` en la raíz de tu repositorio con el siguiente contenido (o al reves):

    ```
    * text=auto
    *.css text eol=lf
    ```
    Esto  hace Git que trate todos los archivos `.css` como texto y que use finales de línea LF para ellos.
git add .gitattributes
Este archivo te permite especificar cómo Git debe manejar los finales de línea para archivos o tipos de archivos específicos. Esto te da más control y evita cambios inesperados.

# Recursos
<a href="https://www.freepik.es/search">Icono de Enamo Studios</a>
<a href="https://www.freepik.es/icono/twitter-alt-square_12107611#fromView=image_search_similar&page=1&position=21&uuid=8e10ee38-6b63-42e3-860c-8739e490e824">Icono de UIcons</a>
