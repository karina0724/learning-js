//VARIABLES
const containerProducts = document.querySelector(".products");
const categoryName = document.getElementById('category-name');
const categories = Array.from(document.getElementsByClassName("category"));
let addCarButton = [],
    productsCar = [],
    addFavoriteEventButton = [],
    favoritesProducts = [];
 
////UPLOAD AND SHOW PHOTOS FROM PEXELS API
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
                                <select id="quantity">
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
        
}

export async function pexelsApi(search, quantity=10){
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

//CART METHODS
// function Product(product_id, quantity, price){
//     return [product_id, quantity, price];
// }

//Add Product
function addCart(product){
    let product_id = product.parentNode.parentNode.id;
    let productDom = document.getElementById(product_id);
    let quantity = productDom.children[2].firstElementChild.value;
    let price = productDom.children[1].children[1].innerText;
    let verifyIsProductSelected = productsCar.filter(product => product.includes(product_id));

    if(verifyIsProductSelected.length >= 1){
        alert('Este elemento ya existe');
    }else{
        productsCar.push([product_id, quantity, price]);
    }
    console.log(productsCar);
}

//Update Product
function updateProduct(){

}

//Remove Product
function removeCart(product_id){
    if(productsCar.includes(product_id)){
        console.log('Producto eliminado');
        productsCar.splice(index, 1);
    }
 }

 //FAVORITE PRODUCTS METHODS
//Add Favorite Product
function addFavoriteProduct(product){
    let product_id = product.parentNode.parentNode.id;
    let productDom = document.getElementById(product_id);
    let quantity = productDom.children[2].firstElementChild.value;
    let price = productDom.children[1].children[1].innerText;
    let verifyIsProductSelected = favoritesProducts.filter(product => product.includes(product_id));

    if(verifyIsProductSelected.length >= 1){
        removeFavoriteProduct(verifyIsProductSelected);
    }else{
        favoritesProducts.push([product_id, quantity, price]);
    }
    console.log(favoritesProducts);
}

//Remove Favorite Product
function removeFavoriteProduct(product){
    console.log(product)
}

/** Requisitos a tomar en cuenta */
/**
  * Debo modificar la informacion de los productos en la vista principal y en la vista de detalle del carrito.
  * 
  * Para modificar un producto si cambio el select debo verificar si existe en el carrito sino existe ahi no se hace nada
  * pero si existe se debe modificar el carrito de compras.
  * 
  * En el apartado de ver los productos favoritos debe tener tambien un toggle para eliminar el favorito, para añadir al carrito o pagar comprar.
  * Si es comprar se manda a la ventana del proceso para comprar articulo.
  * 
  * Al final ver si se puede crear alguna funcion para agregar los eventos
*/
