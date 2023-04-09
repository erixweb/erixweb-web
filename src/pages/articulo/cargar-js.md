---
layout: "../../layouts/ArticleLayout.astro"
title: "Formas de cargar JavaScript"
img: "/images/tech/js.svg"
desc: "Aquí te explico cuales son las formas mas correctas de cargar JavaScript en el cliente usando HTML."
---
# Script tag
Si usamos la etiqueta script sin ninguna propiedad, lo que hara el navegador es pausar la carga del HTML hasta que el JavaScript se transpile y se ejecute. 

Hacer que pare la ejecución del DOM es lo último que queremos, por lo tanto, en este artículo te dejo de peor a mejor las técnicas de debes utilizar.
# Async
Si utilizamos la propiedad async, el JavaScript se ejecutara al paso del HTML. Esto quiere decir que, mientras se ejecuta el HTML, también se transpila y ejecuta el JavaScript, esto lo que hace es que no se pare la ejecución del DOM. 

Ten en cuenta la frase `se ejecuta` para que entiendas la siguiente propiedad.

Aquí tienes como aplicar async:
```
<script async src="/myscript.js"></script>
```
# Defer
La propiedad defer es `casi` igual que async. La diferencia que tiene es que con la propiedad defer, el JavaScript solo se transpila (o carga) y cuando el DOM carga, se ejecuta. 

Lo podríamos entender como que un cocinero ha preparado ya un plato pero, tiene que esperar a que lo recojan.

Aquí tienes como aplicar defer:
```
<script defer src="/myscript.js"></script>
```
# onload event
La segunda técnica que podemos hacer es crear una script tag en el `head` que contenga el siguiente código:
```
<head>
    <title>Mi página</title>
    <script async>
        // Escuchamos al evento load
        window.addEventListener("load", () => {
            // Creamos un elemento HTML 
            const script = document.createElement("script")
            script.src = "/myscript.js"
            document.body.append(script)
        })
    </script>
</head>
<body>
    ...
</body>
```
En el siguiente ejemplo, hemos escuchado al evento `load` (cuando carga la página) y cuando eso pase, hemos creado un elemento html script cuya propiedad src es el archivo javascript que queremos ejecutar. Después de eso, la etiqueta script se añade en el body.

En este caso no es necesario espicificar ningún `async` o `defer` ya que el DOM ya está cargado cuando se ejecuta el archivo JS. 
# Inconveniente de onload
El único incoveniente de usar la última técnica explicada es que, tendremos un mayor TTI. 

El TTI o Time To Interactive por sus siglas en inglés, es el tiempo en el que tarda ser interactiva la página, cuanto más grande sea tu archivo JavaScript, más TTI tendrás (cuanto más peor).

El TTI sería el tiempo que tarda en hacer por ejemplo un botón clickable.

Esto pasa porque como hemos dicho, el DOM ya se ha cargado cuando se añade este script o, en simples palabras, el botón (o otros elementos) ya están en pantalla cuando se acaba de empezar a cargar el script. 