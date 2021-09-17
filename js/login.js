//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
});
function datos(){
    var usuarios = document.getElementById("usu").value; //guarda en la variable lo que se conteste en la casilla en el localstorage
    let dato_usuario =JSON.stringify(usuarios); //lo convierto en un string
    localStorage.setItem('Usuario', dato_usuario);
    location.href="login.html"
}



