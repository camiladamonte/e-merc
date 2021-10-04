const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://raw.githubusercontent.com/camiladamonte/e-merc/main/JSON/productos.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

const PROD1 = "https://raw.githubusercontent.com/camiladamonte/e-merc/main/JSON/Chevrolet_Onix_Joy.json";
const PROD2 = "https://raw.githubusercontent.com/camiladamonte/e-merc/main/JSON/Fiat_Way.json";
const PROD3 = "https://raw.githubusercontent.com/camiladamonte/e-merc/main/JSON/Peugeot_208.json";
const PROD4 = "https://raw.githubusercontent.com/camiladamonte/e-merc/main/JSON/Suzuki_Celerio.json";


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};

    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  let usuario = localStorage.getItem('Usuario'); //variable que contiene lo que esta en el localstorage
  let puser = document.getElementById("nomusu"); //variable que contiene lo que esta en p

  if (usuario) { //si se logeo
    usuario = JSON.parse(usuario); //conviero lo que esta en el localstorage en objeto
    puser.innerText += " " + usuario; //lo agrego a p
  }
});






