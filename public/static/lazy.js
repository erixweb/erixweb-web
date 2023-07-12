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