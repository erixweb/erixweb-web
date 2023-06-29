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

// Routing
/*
async function getPageContent(url) {
    const req = await fetch(url)
    const html = await req.text()

    return /<body[^>]*>([\w\W]*)<\/body>/.exec(html)
}
async function displayContent(content) {
    document.startViewTransition(() => {
        document.body.innerHTML = content
        const images = document.querySelectorAll("img")
        images.forEach(Lazy)
    })
}

function isBackNavigation(navigateEvent) {
    if (navigateEvent.navigationType === 'push' || navigateEvent.navigationType === 'replace') {
        return false
    }
    if (
        navigateEvent.destination.index !== -1 &&
        navigateEvent.destination.index < window.navigation.currentEntry.index
    ) {
        return true
    }
    return false
}
async function onLinkNavigate(callback) {
    window.navigation.addEventListener('navigate', (event) => {
        const toUrl = new URL(event.destination.url)

        if (window.location.origin !== toUrl.origin) return

        const fromPath = window.location.pathname
        const isBack = isBackNavigation(event)

        event.intercept({
            async handler() {
                if (event.info === 'ignore') return

                await callback({
                    toPath: toUrl.pathname,
                    fromPath,
                    isBack
                })
            }
        })
    })
}
async function loadScript(scriptPath) {
    const req = await fetch(scriptPath)
    const content = req.text()
    return await content
}

onLinkNavigate(async ({ toPath }) => {
    const content = await getPageContent(toPath)

    document.startViewTransition(async () => {
        await displayContent(
            content
        )
        if (toPath.startsWith("/articulo/")) {
            eval(loadScript("/static/highlight.js"))
        }
    })
})
*/