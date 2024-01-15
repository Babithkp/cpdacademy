const loading = document.createElement("div")
loading.id = "loading"
loading.innerHTML = `<img src="/static/admin/loading.svg"/>`
document.body.appendChild(loading)

function show_loading() {
    loading.style.display = "block"
}

function hide_loading() {
    loading.style.display = "none"
}

show_loading()