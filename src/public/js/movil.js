
const navbar_movil = document.querySelector(".navbar-movil");
const nav_lista = document.querySelector(".navlista")
navbar_movil.addEventListener("click",()=>{
    nav_lista.classList.toggle("navlista-visible");
    if(navbar_movil.classList.contains("navlista-visible")){
        navbar_movil.setAttribute("aria-label", "Cerrar menu");
    }else{
        navbar_movil.setAttribute("aria-label", "Abrir menu");
    }
});
