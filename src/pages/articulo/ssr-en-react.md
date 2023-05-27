---
layout: "../../layouts/ArticleLayout.astro"
title: "SSR en React"
img: "/images/tech/js.svg"
desc: "Te explico qué es Server-Side Rendering (SSR) y por qué te puede beneficiar."
---
# ¿Qué es Server-Side Rendering?

Es una técnica para renderizar una página web como puede ser CSR (Client-Side Rendering), que sería lo contrario a SSR (Server-Side Rendering). 

# ¿En qué consiste? 

SSR o Server-Side Rendering consiste en renderizar la página en el servidor en vez de en el cliente (el navegador). 

Explicado de otra manera, usando React, sería que usando Client-Side Rendering, los componentes son renderizados (o pasar de JavaScript a HTML) en el cliente. Si tu aplicación es demasiado grande, esto puede causar una mala experiencia debido al mal rendimiento o performance de la página. 

El mal rendimiento se debe a que se tiene que ejecutar el JavaScript línea por línea, lo que parara la carga de la página (o simplemente no se verá nada).

Para arreglar este problema, llega el SSR. Con este, los componentes serán renderizados en el servidor antes de llegar al cliente. Es decir, se ejecutara un código JavaScript en el servidor que convertirá los componentes de React en HTML puro.

Después, para añadirle interactividad, cargaríamos ahora si o sí React en el cliente. A pesar de que tengamos que usar React (o JavaScript) para la interactividad, no necesitamos usar React para todo, ya que los componentes ya estarán renderizados correctamente sin usar JavaScript usando esta técnica.

# ¿Cuáles son los beneficios?

1. La página cargará más rápido
2. Mejor SEO
3. No depende del dipositivo del usuario

# ¿Cuáles son las consequencias?

1. Consume más recursos del servidor
2. Poca interactividad (en caso de que solo uses el servidor)
3. La página se tiene que recargar entera