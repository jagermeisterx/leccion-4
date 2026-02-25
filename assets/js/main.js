//aquí implementaré lo pedido en la lección 5
const btnSubir = document.getElementById("btn-subir");
btnSubir.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
