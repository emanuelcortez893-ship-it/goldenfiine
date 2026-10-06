GOLDENFIINE
============

Tienda online de joyería.

ESTRUCTURA
-----------

index.html
style.css
script.js
readme.txt

IMÁGENES
--------

Las imágenes de los productos deben conservar exactamente
el nombre indicado en script.js.

IMPORTANTE:

Los nombres de archivo distinguen mayúsculas, minúsculas,
espacios y caracteres.

No cambiar el nombre de una imagen sin cambiar también
su ruta en script.js.


CATEGORÍAS
----------

- Cadenas
- Pulseras
- Anillos
- Dijes
- Aritos


FUNCIONES
---------

- Barra superior
- Navegación por categorías
- Filtros
- Orden por precio
- Catálogo de productos
- Ficha individual
- Selección de medidas
- Carrito lateral
- Contador del carrito
- Guardado del carrito en el navegador
- Pedido por WhatsApp
- Pedido por Instagram
- Diseño adaptable para celular


INSTAGRAM
---------

Instagram:

https://www.instagram.com/joyas_goldenfiine/

Mensajes directos:

https://ig.me/m/joyas_goldenfiine/


WHATSAPP
--------

https://wa.me/5491153894764


PRODUCTOS
---------

Los productos se editan desde:

script.js

Buscar:

const products = [...]


CADA PRODUCTO
-------------

Cada producto utiliza:

id
name
cat
price
img
sizes


EJEMPLO:

{
  id: 1,
  name: "Nombre del producto",
  cat: "Cadenas",
  price: 45000,
  img: "nombre-de-la-imagen.jpeg",
  sizes: ["45 cm", "50 cm", "60 cm"]
}


PRECIOS
--------

Los precios actuales son valores de referencia.

Cadenas: $45.000
Pulseras: $38.000
Anillos: $35.000
Dijes: $28.000
Aritos: $30.000


PRIMERAS CADENAS
----------------

Rosario enchapado brasileño 18k.jpeg

cadena espiga con cierre mosqueton.jpeg

cadena paris con cierre marinero.jpeg

cadena singapur fina enchapada 18k.jpeg

cadena triple gourmet con cierre mosqueton.jpeg

combo cadena paris plana enchapada 18k.jpeg

juliana con cierre marinero.jpeg

tourbillon con puntera versace.jpeg

Conjunto Collar Triple Cadena Singapur Torzada + Dije Cruz 3D - Oro 18k - 45cm + 50cm + 60cm.jpeg

Cadena Rolo Gruesa 60cm - Oro 18k.jpeg


IMPORTANTE SOBRE LAS IMÁGENES
----------------------------

No cambiar el nombre de los archivos si no se modifica
también la propiedad img correspondiente en script.js.

Las imágenes de las primeras 10 cadenas utilizan sus
nombres originales.

Las demás categorías utilizan actualmente rutas
como:

images/pulsera-1.jpg
images/anillo-1.jpg
images/dije-1.jpg
images/arito-1.jpg

Si esas imágenes están en otra carpeta, hay que modificar
la ruta correspondiente en script.js.


LOGO
----

Si se utiliza un logo, mantener la ruta configurada
en el HTML/CSS.


GOLDENFIINE
============

Fin del archivo.
