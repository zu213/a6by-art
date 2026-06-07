addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content")
    const sidebar = document.getElementById("sidebar")
    const overlay = document.getElementById("nav-overlay")

    function openSidebar() {
        sidebar.classList.add("open")
        overlay.classList.add("open")
    }

    function closeSidebar() {
        sidebar.classList.remove("open")
        overlay.classList.remove("open")
    }

    document.getElementById("hamburger").addEventListener("click", openSidebar)
    document.getElementById("sidebar-close").addEventListener("click", closeSidebar)
    overlay.addEventListener("click", closeSidebar)

    function loadTemplate(id) {
        const template = document.getElementById(id)
        if (!template) return
        content.innerHTML = ""
        content.appendChild(template.content.cloneNode(true))
        closeSidebar()
    }

    document.getElementById("home-link").addEventListener("click", () => loadTemplate("home"))
    document.getElementById("gallery-link").addEventListener("click", () => loadTemplate("gallery"))
    document.getElementById("apple-interface-link").addEventListener("click", () => loadTemplate("apple-interface"))

    document.getElementById("home-link-mob").addEventListener("click", () => loadTemplate("home"))
    document.getElementById("gallery-link-mob").addEventListener("click", () => loadTemplate("gallery"))
    document.getElementById("apple-interface-link-mob").addEventListener("click", () => loadTemplate("apple-interface"))

    loadTemplate("home")
})
