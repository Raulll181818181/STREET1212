const params = new URLSearchParams(window.location.search);

const producto = params.get("producto");

if(producto){

const campo = document.getElementById("producto");

if(campo){

campo.value = producto;

}

}