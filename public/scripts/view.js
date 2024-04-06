import { Lazy } from "./lazy.js"

const getPageBody = async (url) => {
	const req = await fetch(url)
	const res = await req.text()

	const body = res.match(/<body>([\s\S]*)<\/body>/i)[1]

	return body
}
const viewTransitionSupported = () => {
	return Boolean(document.startViewTransition)
}
const updateDOM = (html) => {
	document.body.innerHTML = html
}

window.navigation.addEventListener("navigate", (event) => {
	if (!viewTransitionSupported()) return

	const url = new URL(event.destination.url)

	if (location.origin !== url.origin) return

	event.intercept({
		async handler() {
			const data = await getPageBody(url.pathname)

			document.startViewTransition(async () => {
				await updateDOM(data)
				document.documentElement.scrollTop = 0
				const images = document.querySelectorAll("img")
				images.forEach((img) => Lazy(img))

				if (url.pathname.startsWith("/articulo/")) {
					eval(script)
				}
			})
		},
	})
})
