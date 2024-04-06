---
layout: "~/layouts/ArticleLayout.astro"
title: "TypeScript para desarolladores JavaScript"
img: "/images/languages/tsicon.svg"
desc: "Curso de TypeScript para desarolladores JavaScript."
---

TypeScript es un lenguaje de programación cuyo propósito es añadir un tipado fuerte a JavaScript. Es completamente compatible con JavaScript. Eso quiere decir que **todas las funciones que existan en JavaScript, lo harán en TypeScript**.

## Tipos primitivos

En TypeScript, por defecto, existen algunos tipos básicos que debes conocer. Si ya tienes experiencia en JavaScript, los conoceras. Después de eso, te explicaré como tipar tus variables/constantes.

## String

El tipo de dato string representa una **cadena de texto** entre comillas. Un ejemplo sería `"texto"`.

## Number

Este tipo de dato, como su nombre dice, representa un **número** como lo podría ser `6`

## Boolean

Puede representar `true` o `false`, en Español **verdadero** o **falso**

## Object

Un objecto es un contenedor con una **clave** y un **valor**. Un ejemplo sería

```js
{
	name: "Erik"
	languages: ["Español", "Català", "English", "Français"]
}
```

> Debido a un error en JavaScript, el valor **null**, es de tipo `object`

## Crear variables y contantes

Una vez conoces los tipos básicos, te enseño a **crear tus primeras variables y contantes** en TypeScript. La **sintaxis es la misma** que en JavaScript pero añadiendo el tipo seguido del nombre de la variable y dos puntos.

```ts
let name: string = "Erik"
```

En este ejemplo, indicamos que la variable name es del tipo string y su valor es Erik.

Lo mismo para contantes

```ts
const languages: string[] = ["Español", "Català", "English", "Français"]
```

Si te das cuenta, hemos puesto `[]` al lado de string. Esto es para indicar que es un **array cuyos valores son strings**. Este podría ser también remplazado por `Array<string>`, ambos son sinónimos.

Este mismo ejemplo puede ser replicado con tipos como number (`number[]`) o boolean (`boolean[]`)

## Tipo any

En TypeScript, existe el tipo `any`. Este tipo, indica que una variable puede tener **CUALQUIER** valor. Aquí te dejo un ejemplo

```ts
const name: any = 3 // ✅
const surname: string = 3 // ❌
```

## Custom Types

En TypeScript, puedes crear **tipos personalizados**. Esto lo conseguimos usando la palabra reservada `type` seguido del nombre del tipo. De la siguiente manera.

```ts
type User = {
	name: string
	mail: string
}

const erik: User = {
	name: "Erik",
	mail: "erikmorenodev@gmail.com",
} // ✅
const randomuser: User = {
	name: 3,
	mail: "example@gmail.com",
} // ❌ La propiedad nombre debe ser de tipo string.
```
