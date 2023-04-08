---
layout: "../../layouts/ArticleLayout.astro"
title: "Bun es increíble"
img: "/images/tech/js.svg"
desc: "Bun es un runtime de JavaScript increíble, mucho más rápido que Node o Deno. En este artículo te diré mi experiencia con el runtime y dónde puedes encontrar toda su información."
---
# Mi experiencia
Empecé a probar Bun alrededor de la versión 0.1.2 o 0.2. Cuando probé bun, la primera característica que me encantó fue la manera de crear un servidor web.
```
import { serve, file } from "bun"

serve({
    fetch (req) {
        console.log(
            `Solicitado ${req.url}`
        )
        return new Response(
            file("index.html"), 
            {
                headers: {
                    'Content-Type': "text/html"
                }
            }
        )
    }
})
```
Además de eso, una de las cosas increíbles que tiene Bun es el soporte para TypeScript y JavaScript de forma nativa. También me encanta la forma de leer archivos que es muy fácil de usar y simplemenente con file("index.html") (sería Bun.file si no importas file) puedo devolver el contenido de un archivo (HTML en esté caso).

No hace falta poner benchmarks para darse cuenta que Bun, es increíblemente rápido. Esto lo consigue utilizando JavaScriptCore en vez de V8 como hace Node o Deno.

Bun actuálmente está en beta (v0.5^). No deberías usarlo hasta que llegue la versión 1.0.0^ por tu seguridad, a pesar de que, no se ha desmostrado que hayan fallos de seguridad o memory leaks.
# ¿Qué es Bun?
Si no he dejado claro que es Bun alrededor del blog, Bun es un runtime de JavaScript, esto quiere decir que es un entorno en donde se ejecuta el código JavaScript que se ha escrito.

Bun es muchísimo más rápido que Node o Deno. Su velocidad la consigue utilizando JavaScriptCore en vez de V8 que es usado por Node y Deno.

Puedes aprender más de Bun en su página oficial, bun.sh, ahí te explican cómo utilizar el runtime y cómo está hecho.