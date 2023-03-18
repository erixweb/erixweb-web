const elements = document.querySelectorAll("img")
const projects = document.querySelectorAll(".project")

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
projects.forEach(Lazy)