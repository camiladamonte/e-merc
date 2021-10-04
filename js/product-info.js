//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){

});

function mostrar_info(prod_n){
    let contenido = " ";
    let fotitos = " ";

    contenido += 'Nombre: ' + prod_n.name + '<br>';
    contenido += 'Descripción: ' + prod_n.description + '<br>';
    contenido += 'Precio: ' + prod_n.cost + '<br>';
    contenido += 'Moneda: ' + prod_n.currency + '<br>';
    contenido += 'Vendido: ' + prod_n.soldCount + '<br>';
    contenido += 'Categoría: ' + prod_n.category + '<br>';

    
fotitos += `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="img/prod`+(prod_n.id)+`_1.jpg" alt="" height="600" widht="600">
    </div>
    <div class="carousel-item">
    <img src="img/prod`+(prod_n.id)+`_2.jpg" alt="" height="600" widht="600">
    </div>
    <div class="carousel-item">
    <img src="img/prod`+(prod_n.id)+`_3.jpg" alt="" height="600" widht="600">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`


    document.getElementById("infor").innerHTML = contenido;
    document.getElementById("infor").innerHTML += fotitos;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           resultObj.data.forEach(prodd => {
               if(prodd.id == JSON.parse(localStorage.getItem('info')).idprod){
                   pr = prodd
                   mostrar_info(pr)
               }
           });
        }else{
            alert(resultObj.data);
        }
    });
});


function Comentarios (array){

    let row="";
    for (let i = 0; i<array.length; i++) {
        let coment = array[i];
                
                row += coment.user+' dice: <br>';
                row += coment.description + '<br>';
                for (let i=0; i<coment.score; i++){
                    row += '<span class="fa fa-star checked"></span>'
                }
                
                    for (let i=1; i<=(5-coment.score)  ; i++){
                        row += '<span class="fa fa-star"></span>'
                    }
                
                row += '<br><hr><br>' 
    };
    row += '<textarea name="texto" id="nuevoCom" rows="4" cols="100" placeholder="Comente"></textarea><br>'
    row += '<input type="button" value="Enviar">'
    row += `<div class="star-rating">
            
            <input id="star-5" type="radio" name="rating" value="5"  />
            <label for="star-5" title="5 stars">
            <i class="active fa fa-star"></i>
            </label>

            <input id="star-4" type="radio" name="rating" value="4"/>
            <label for="star-4" title="4 stars">
            <i class="active fa fa-star"></i>
            </label>

            <input id="star-3" type="radio" name="rating" value="3"/>
            <label for="star-3" title="3 stars">
            <i class="active fa fa-star"></i>
            </label>

            <input id="star-2" type="radio" name="rating" value="2" />
            <label for="star-2" title="2 stars">
            <i class="active fa fa-star"></i>
            </label>

            <input id="star-1" type="radio" name="rating" value="1" checked/>
            <label for="star-1" title="1 star">
            <i class="active fa fa-star"></i>
            </label>
            
        </div>`
        

    document.getElementById("infor").innerHTML += row;
    
}


//let texto_c = undefined

//function agregar_comentarios (arreglo){
//    texto_c=document.getElementById("nuevoCom").value
//    if ((texto_c != undefined) && (texto_c =! "")){
//        let puntaje = puntuacion()
//        let NC = { "score": puntaje,
//                    "description" : document.getElementById("nuevoCom").value,
//                    "user": usuario, } 
//    arreglo.push(NC)
//    Comentarios(Lcomentarios)
//    }
//}


//function puntuacion(){
//    var elements = document.getElementsByName("rating");
//    for (var i=0; i< elements.length; i++){
//        if (elements[i].checked){
//            return parseInt(elements[i].value);
//        }
//    }
//}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            Lcomentarios = resultObj.data;
            Comentarios(Lcomentarios)
        }else{
            alert(resultObj.data);
        }
    });
});


//entrega 4 

function relacionado(lista){
    let carta = "";
    let relacionados = lista[parseint(JSON.parse(localStorage.getItem('info')).idprod) - 1].relatedProducts;
    for (let i=0; i<relacionados.length; i++){
        carta += lista[relacionados[i]].name
        carta += lista[relacionados[i]].description
        carta += lista[relacionados[i]].cost
    }
    document.getElementById("cartas").innerHTML += carta;
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            listado = resultObj.data;
            relacionado(listado)
        }else{
            alert(resultObj.data);
        }
    });
});

