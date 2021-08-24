//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productos = [];

function Listado_Productos (array){

    let row="";
    for (let i = 0; i<array.lenght; i++) {
        let producto = array[i];

        row += 'Nombre: ' + producto.name + '<br>';
        row += 'Descripción: ' + producto.description + '<br>';
        row += 'Precio: ' + producto.cost + '<br>';
        row += '<br><hr><br>' 
    }
    document.getElementById("prod").innerHTML = row;
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            productos = resultObj.data;

            Listado_Productos(productos)
        }else{
            alert(resultObj.data);
        }
    });
});