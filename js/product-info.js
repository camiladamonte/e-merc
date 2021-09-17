//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function MostrarPs (Prs){

    let contenido="";
        contenido += 'Nombre: ' + Prs.name + '<br>';
        contenido += 'Descripción: ' + Prs.description + '<br>';
        contenido += 'Precio: ' + Prs.cost + '<br>';
        contenido += '<img src="img/prod'+i+'.jpg" alt="" height="90" widht="90"';
        contenido += '<button onclick="redir('+i+')">Mas Info</button><br><br>';
        contenido += 'Moneda: ' + Prs.currency + '<br>';
        contenido += 'Vendidos: ' + Prs.SoldCount + '<br>';
        contenido += 'Categoría: ' + Prs.category + '<br>';
        for (let i = 0; i<5; i++){
        contenido += '<img src="img/prod1_'+i+'.jpg" alt="" height="90" widht="90">';}
    
    document.getElementById("infor").innerHTML = contenido;
}

function noexisto() {
    let contenido="";
    contenido += 'Lo sentimos pero no tenemos más informacion de este producto por el momento.'
}

document.addEventListener("DOMContentLoaded", function (e){
    GetJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if(resultObj.status === "ok") {
            if (JSON.parse(localStorage.getItem('info')).idprod == 0) {
                MostrarPs(resultObj.data)
            }else{
                noexisto();
            }
        }
    })
});    