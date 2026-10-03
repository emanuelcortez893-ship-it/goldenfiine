GOLDENFIINE V2
===============
Esta versión tiene un formato de tienda más parecido a un e-commerce:
- barra superior
- navegación por categorías
- filtros
- orden por precio
- catálogo
- ficha individual de producto
- selección de medidas
- carrito lateral
- contador de carrito
- guardado del carrito
- Instagram
- versión celular

EDITAR INSTAGRAM:
Abrí script.js y modificá:
instagram:"https://instagram.com/TU_USUARIO"

EDITAR PRODUCTOS:
En script.js buscá const products=[...].
Cada producto tiene:
id, name, cat, price, img, badge y sizes.

FOTOS DE PRODUCTOS (carpeta images/):
Cada producto carga su foto desde la carpeta images/. Para cambiar una foto,
reemplazá el archivo por tu foto usando EXACTAMENTE el mismo nombre (en minúsculas, .jpg).
- Cadena Venezia  -> images/cadena-1.jpg
- Cadena Cuban    -> images/cadena-2.jpg
- Cadena Figaro   -> images/cadena-3.jpg
- Pulsera Classic -> images/pulsera-1.jpg
- Pulsera Gold    -> images/pulsera-2.jpg
- Pulsera Cuban   -> images/pulsera-3.jpg
- Anillo Milano   -> images/anillo-1.jpg
- Anillo Royal    -> images/anillo-2.jpg
- Anillo Signet   -> images/anillo-3.jpg
- Dije Corazón    -> images/dije-1.jpg
- Dije Inicial    -> images/dije-2.jpg
- Dije Cruz       -> images/dije-3.jpg
Recomendado: fotos verticales o cuadradas, de unos 1000 px de ancho.
Las fotos actuales son de demostración.

LOGO:
images/logo-goldenfiine.png (se muestra en el encabezado negro).
Para cambiarlo, reemplazá ese archivo manteniendo el mismo nombre.
