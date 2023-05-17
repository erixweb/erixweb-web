const elements = document.querySelectorAll("img")

const Lazy = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.nodeName.toLocaleLowerCase() === "img") {
                const img = entry.target
                img.setAttribute("src", img.getAttribute("data-src"))
                img.classList.add("fade")
                observer.disconnect()
            }
        })
    })
    io.observe(target)
}

elements.forEach(Lazy)

document.querySelector(".slider").addEventListener("wheel", (e) => {
    e.preventDefault()
    let scrollX = document.querySelector(".slider").scrollLeft
    if (e.wheelDelta > 0) {
        document.querySelector(".slider").scroll(scrollX + 500, 0)
    } else {
        document.querySelector(".slider").scroll(scrollX + -500, 0)
    }
})