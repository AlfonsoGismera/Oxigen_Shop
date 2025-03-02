 # Oxigen_Shop
 
 Proyecto_training
 
 ## Extras
 
  Estoy usando Windows, que utiliza finales de línea CRLF.
  El archivo `css/styles.css` tiene finales de línea LF, típicos de sistemas Unix.
  Git te avisará para reemplazar los LF por CRLF para mantener la consistencia en tu sistema y viceversa.
 
 **Importancia:**  
 La consistencia en los finales de línea es importante para evitar problemas de ejecución y facilitar la comparación y fusión de código.
 
 **Solución:**  
 Se recomienda configurar Git para manejar los finales de línea correctamente. Puedes usar un archivo `.gitattributes` en la raíz de tu repositorio con el siguiente contenido (o al revés):
 
 ```
 * text=auto
 *.css text eol=lf
 ```
 
 Esto hace que Git trate todos los archivos `.css` como texto y que use finales de línea LF para ellos.
 
 Para aplicar esta configuración, ejecuta:
 
 
 Este archivo te permite especificar cómo Git debe manejar los finales de línea para archivos o tipos de archivos específicos, dándote más control y evitando cambios inesperados.
 

 ## Instalación
 
 Clona el repositorio:
 
 ```bash
 git clone https://github.com/AlfonsoGismera/Oxigen_Shop.git
 ```
 
 Navega al directorio del proyecto:
 
 ```bash
 cd Oxigen_Shop
 ```
 
 Abre el archivo `index.html` en tu navegador.
 
 ## Uso
 
 El sitio web está diseñado para ser responsivo y funcionar en diferentes dispositivos.
 
 ## Autor
 
 Alfonso Gismera
 
 ## Licencia
 
 Este proyecto no tiene licencia.


# Recursos
 **Iconos:**  
  Iconos de Enamo Studios  
  Iconos de UIcons
<a href="https://www.freepik.es/search">Icono de Enamo Studios</a>
<a href="https://www.freepik.es/icono/twitteraltsquare_12107611#fromView=image_search_similar&page=1&position=21&uuid=8e10ee386b6342e3860c8739e490e824">Icono de UIcons</a>
