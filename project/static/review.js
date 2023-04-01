document.getElementsByClassName("header__group")[2].children[0].remove()

if (window.innerWidth <= 460) {
    var columns = document.getElementsByClassName("R-PaginationControls__item")
    var start = parseInt((columns.length+1)/2)
    for (var i = start; i < columns.length; i++) {
        var column = columns[i]
        column.style.display = "none";
    }
}