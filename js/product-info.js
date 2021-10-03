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

    
    fotitos +='<img src="img/prod'+(prod_n.id)+'_1.jpg" alt="" height="90" widht="90">'
    fotitos +='<img src="img/prod'+(prod_n.id)+'_2.jpg" alt="" height="90" widht="90">'
    fotitos +='<img src="img/prod'+(prod_n.id)+'_3.jpg" alt="" height="90" widht="90"><br><hr><br>'

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
//agrego un nuevo get json data que lea la lista de todos los productos, 
//luego desde ese get json data llama a esta nueva funcion que es "relacionado" la cual tiene un for con el largo del arreglo
//luego compara el nombre de esa casilla del arreglo con los id de cada producto 

function relacionado(lista){
    let cartas = "";
    for (let i = 0; i<lista.relatedProducts.length; i++){
        cartas += lista.relatedProducts[i].name
        cartas += lista.relatedProducts[i].description
        cartas += lista.relatedProducts[i].cost
    }
    document.getElementById("cartas").innerHTML = cartas;
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

