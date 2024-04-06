---
layout: "~/layouts/ArticleLayout.astro"
title: "Svelte es increible"
img: "/images/languages/tsicon.svg"
desc: "Artículo sobre Svelte, cosas positivas y negativas."
---

Svelte es **el framework de la web más querido/admirado** por los desarolladores según la encuesta de StackOverflow. Sin embargo, no es tan popular como lo es React.

## ¿Por qué es tan admirado?

Svelte es admirado por su sintaxis simple y por su excelente rendimiento. El JavaScript que introduce al cliente es mínimo, o incluso puede llegar a ser nada.

## Routing

Puedes crear tus propias rutas creando un directorio con el nombre de la ruta que contenga el archivo +page.svelte. De está manera si creamos el directorio `about` con el archivo `+page.svelte` (`src/about/+page.svelte`), al acceder en mi página a `/about`, veré el contenido del archivo +page.svelte.

## ¿Puedo crear mi propia API?

Con Svelte **puedes crear APIs fácilmente** creando una ruta llamada +server.js o +server.ts en el caso de que uses TypeScript. Aquí te dejo un ejemplo:

```ts
import { json } from "@sveltejs/kit"

export function GET() {
	const number = Math.floor(Math.random() * 6) + 1

	return json(number)
}
```

Simplemente su función es devolver un número entre el 1 y el 6.

## ¿Es recomendable?

Yo lo recomiendo. Crear aplicaciones con un buen rendimiento usando Svelte es muy fácil. Además, cuando empieces a usarlo, probablemente no tengas que aprender nada, la sintaxis es tan simple que sabiendo HTML y JavaScript ya podrás hacer tu primera aplicación (con primera aplicación me refiero a un contador o algo muy simple para probarlo).

Aquí dejo como sería un contador con Svelte. El JavaScript usado es lo justo y necesario.

```svelte
<script>
    // En Svelte, no hay un useState o algo por el estilo, simplemente una variable.
    let count = 0
</script>

<button on:click={() => count++}>
    Clic aquí!
</button>
<p>
    Has clicado {count} veces
</p>
```
