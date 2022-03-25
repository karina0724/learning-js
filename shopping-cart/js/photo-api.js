//VARIABLES
const containerProducts = document.querySelector(".products");
const categoryName = document.getElementById('category-name');
const categories = Array.from(document.getElementsByClassName("category"));
const productInCart = Array.from(document.getElementsByClassName("product-in-cart"));
const viweMoreInCart = document.getElementById("view-more-in-cart"); 
let addCarButton = [],
    productsCar = [],
    addFavoriteEventButton = [],
    favoritesProducts = [],
    selectInputs = [];
let carQuantity = document.getElementById('quantity-products-shop'),
    favoritesQuantity = document.getElementById('quantity-favorite-products');
    
//UPLOAD AND SHOW PHOTOS FROM PEXELS API
const getPhotos = (images) => {
        let imageTag = "";
        images.map(image => {
            imageTag += `<div class="product" id="${image.id}">
                             <div class="image">
                                 <img src="${image.src.tiny}" alt="${image.alt}">
                             </div>
                             <div class="description">
                                <p class="product-title">${image.alt}</p>
                                <p class="price">RD$ 100.00</p>
                                <span class="wish"><i class="fas fa-heart"></i></span>
                             </div>                                                           
                             <div class="actions">
                                <select id="quantity" class="quantity-product">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>     
                                <button class="btn add-car">Añadir<i class="fas fa-cart-plus"></i></button>
                                <button class="btn shop">Comprar<i class="fas fa-shopping-cart"></i></i></button>        
                             </div>                            
                         </div>`;
        });

        containerProducts.innerHTML = imageTag;
        addCarButton = Array.from(document.getElementsByClassName("add-car"));
        addFavoriteEventButton = Array.from(document.getElementsByClassName("wish"));
        selectInputs = Array.from(document.getElementsByClassName("quantity-product"));

        addCarButton.forEach(element => {
            element.addEventListener('click', function(){
                addCart(this);  
            });
        });

        addFavoriteEventButton.forEach(element => {
            element.addEventListener('click', function(){
                addFavoriteProduct(this); 
                element.classList.toggle('color-red');
            });
        });

        //ponerle la condicion de que haga eso si ya el producto existe
        selectInputs.forEach(element => {
            element.addEventListener('change', function(event){
                updateQuantityProduct(this, event.target.value);
            });
        }) 
}

export async function pexelsApi(search, quantity=20){
    await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=${quantity}`,{
        headers: {
          Authorization: "563492ad6f91700001000001c9529b304f5d4f93b814f807ebaf9860"
        }
    })
        .then(resp => {return resp.json()})
        .then(data => {
            getPhotos(data.photos);
        })
}

categories.forEach(category => {
    category.addEventListener('click', function(){
        categoryName.innerText = this.innerText;
        let category = this.id;
        pexelsApi(category);
    })
})

//Add Product
function addCart(product){
    let product_id = product.parentNode.parentNode.id;
    let productDom = document.getElementById(product_id);
    let quantity = productDom.children[2].firstElementChild.value;
    let price = productDom.children[1].children[1].innerText;
    let verifyIfProductExist = productsCar.filter(product => product.includes(product_id));

    if(!verifyIfProductExist.length >= 1){
        productsCar.push([product_id, quantity, price]);
    }else{
        alert('Este elemento ya existe');//Eliminar eso despues que haga la animacion en js
    }
    carQuantity.innerText = productsCar.length;
    console.log(productsCar);
}

//Update Product
function updateQuantityProduct(product, quantity){
    let product_id = product.parentNode.parentNode.id;
    productsCar.forEach((element, index) => {
        if(productsCar[index].includes(product_id)) productsCar[index][1] = quantity;
    });
    console.log('producto modificado', productsCar);
}

//FAVORITE PRODUCTS METHODS
//Add Favorite Product
function addFavoriteProduct(product){
    let product_id = product.parentNode.parentNode.id;
    let productDom = document.getElementById(product_id);
    let quantity = productDom.children[2].firstElementChild.value;
    let price = productDom.children[1].children[1].innerText;
    let verifyIfProductSelected = favoritesProducts.filter(product => product.includes(product_id));
 
    if(verifyIfProductSelected.length >= 1){
        //DELETE PRODUCT OF FAVORTITE-PRODUCTS LIST
        favoritesProducts = favoritesProducts.filter(product => !product.includes(product_id));
    }else{
        favoritesProducts.push([product_id, quantity, price]);
    }
    favoritesQuantity.innerText = favoritesProducts.length;
    console.log(favoritesProducts);
}


//STYLES CSS

if(productInCart.length > 2){
    viweMoreInCart.style.visibility = "visibility";
}

document.getElementById("modal-shopping-cart")

/** Requisitos a tomar en cuenta */
/**
  * Buscar una manera de tomar el product id y ponerlo general en cada input
  * 
  * Debo modificar la informacion de los productos en la vista principal y en la vista de detalle del carrito.
  * 
  * Para modificar un producto si cambio el select debo verificar si existe en el carrito sino existe ahi no se hace nada
  * pero si existe se debe modificar el carrito de compras.
  * 
  * En el apartado de ver los productos favoritos debe tener tambien un toggle para eliminar el favorito, para añadir al carrito o pagar comprar.
  * Si es comprar se manda a la ventana del proceso para comprar articulo.
  * 
  * Al final ver si se puede crear alguna funcion para agregar los eventos
  * 
  * Si doy click dos veces en añadir carrito se si ya esta seleccionado que se incremente ese producto
*/

/** Ideas de diseño para el proyecto */
/**
 * Poner los botones que solo esten los iconos no como botones.
 * 
 * Los alimentos que esten sin fondo como si fuera .png
 * 
 * Modificar fondo del header, que el color se uno suave y que el color principal lo tenga la marca
   y el enlace activo.
 * 
 * Cuando de click a agregar producto y ya exista, hacer que haga un pequeño movimiento el boton y 
 * que se quede seleccionado
 * 
 * 
*/
