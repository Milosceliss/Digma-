/* index-principal */
/* boton subir */
document.getElementById("subir").addEventListener("click", scrollUp);
function scrollUp() {
    var scrollUP = document.documentElement.scrollTop;
    if (scrollUP > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, scrollUP - (scrollUP / 4));
    }
}
buttonUp = document.getElementById("subir");
window.onscroll = function (){
    var scroll = document.documentElement.scrollTop
    if (scroll > 120) {
        buttonUp.style.transform = "scale(1)"
    } else if (scroll < 120) {
        buttonUp.style.transform = "scale(0)"
    }
}