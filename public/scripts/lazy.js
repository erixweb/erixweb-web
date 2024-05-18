const images = document.querySelectorAll("img")
const cards = document.querySelectorAll(".card")


export const Lazy = (target) => {
	const io = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			let elementName = entry.target.nodeName.toLocaleLowerCase()
			if (entry.isIntersecting && elementName === "img") {
				const img = entry.target
				img.setAttribute("src", img.getAttribute("data-src"))
				img.classList.add("fade")
				observer.disconnect()
			}
		})
	})
	io.observe(target)
}

export const Animate = (target) => {
	const io = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			const className = entry.target.className
			if (entry.isIntersecting && className === "card") {
				const img = entry.target
				img.setAttribute("data-show")
				observer.disconnect()
			}
		})
	})
	io.observe(target)
}