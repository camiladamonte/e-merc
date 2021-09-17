//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productos = [];
var minprecio = undefined;
var maxprecio = undefined;
var buscar = undefined;

function redir(id){
    localStorage.setItem('info', JSON.stringify({idprod : id}));
    window.location='product-info.html';
}

function Listado_Productos (array){

    let row="";
    for (let i = 0; i<array.length; i++) {
        let producto = array[i];
        if ((minprecio == undefined || (parseInt(producto.cost)>=minprecio)) && (maxprecio == undefined || (parseInt(producto.cost)<=maxprecio))){
            if (producto.name.toLowerCase().includes(buscar) || (producto.description.toLowerCase().includes(buscar))){
                row += 'Nombre: ' + producto.name + '<br>';
                row += 'Descripción: ' + producto.description + '<br>';
                row += 'Precio: ' + producto.cost + '<br>';
                row += '<img src="img/prod'+i+'.jpg" alt="" height="90" widht="90">';
                row += '<button onclick="redir('+i+')">Más Información</button><br><br>';
                row += '<br><hr><br>' 
            };
        };
    };
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

document.getElementById("btnfiltro").addEventListener("click",function(){
    minprecio=document.getElementById("minp").value;
    maxprecio=document.getElementById("maxp").value;
    if ((minprecio != undefined) && (minprecio != "") && (parseInt(minprecio))>=0){
        minprecio = parseInt(minprecio);
    } else {
        minprecio = undefined
    }
    if ((maxprecio != undefined) && (maxprecio != "") && (parseInt(maxprecio))>=0){
        minprecio = parseInt(minprecio);
    } else {
        maxprecio = undefined
    }
    Listado_Productos(productos)

});

function OrdenarABCA(productos){
    return productos.sort(
        function (a, b) {
            if(a.cost<b.cost) {return 1}
            if(a.cost>b.cost) {return -1}
            {return 0}
        }
    )
}

function OrdenarABCD(productos){
    return productos.sort(
        function (a, b) {
            if(a.cost>b.cost) {return 1}
            if(a.cost<b.cost) {return -1}
            {return 0}
        }
    )
}

function OrdenarR(productos){
    return productos.sort(
        function (a, b) {
            if(a.soldCount<b.soldCount) {return -1}
            if(a.soldCount>b.soldCount) {return 1}
            {return 0}
        }
    )
}

document.getElementById("btnad").addEventListener("click",function(){
    productos=OrdenarABCA(productos)
    Listado_Productos(productos)
});

document.getElementById("btnaa").addEventListener("click",function(){
    productos=OrdenarABCD(productos)
    Listado_Productos(productos)
});

document.getElementById("btnr").addEventListener("click",function(){
    productos=OrdenarR(productos)
    Listado_Productos(productos)
});

document.getElementById("buscar").addEventListener('input', function () {
    buscar=document.getElementById("buscar").value.toLowerCase();
    Listado_Productos(productos);
});


















