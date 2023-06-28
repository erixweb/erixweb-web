const images = document.querySelectorAll("img")


const Lazy = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
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

images.forEach(Lazy)
/*
async function getPageContent (url) {
    const req = await fetch(url)
    const html = await req.text()

    return /<body[^>]*>([\w\W]*)<\/body>/.exec(html)
}
async function displayContent (content) {
    document.startViewTransition(() => {
        document.body.innerHTML = content
        const images = document.querySelectorAll("img")
        images.forEach(Lazy)
    })
}

window.navigation.addEventListener("navigate", async (e) => {
    e.preventDefault()
    const url = new URL(e.destination.url)

    if (url.origin !== window.location.origin) return

    displayContent(
        await getPageContent(url)
    )
})
*/