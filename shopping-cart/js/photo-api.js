//UPLOAD AND SHOW PHOTOS FROM PEXELS API
const containerProducts = document.querySelector(".products");
const categoryName = document.getElementById('category-name');
const categories = Array.from(document.getElementsByClassName("category"));
let addCarButton = [],
    productsCar = [],
    favoritesProducts = [];

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

        addCarButton.forEach(element => {
            element.addEventListener('click', function(){
                addCart(this);  
            });
        });
        //return images;
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

//Add Product
function addCart(product){
  if(productsCar.length > 0){
    productsCar.forEach((element) => {
        if(element === product.id){
            alert('Este elemento ya existe');
            console.log(productsCar);
            return false;
        }
     });
  }
  productsCar.push(product.parentNode.parentNode.id);
  console.log(productsCar);//Añadir el producto
}

//Remove Product
function removeCart(productID){
    productsCar.forEach((element, index) => {
        if(element === productID){
            console.log('Producto eliminado');
            productsCar.splice(index, 1);
        }
    });
 }

// function getProduct(product){
//     return [this.parentNode.parentNode.id, product.src.tiny, product.alt]
// }

//Si ya tengo los datos del producto que se muestran buscar la manera de no crear mas variables que almacenen la misma informacion
//sino crear una copia

//con las imagenes que esta retornando del getPhotos, creare un array con los ids de las fotos que mando el api, 
//de manera que cuando pase de una categoria a otra si cambia de imagenes aun tengo el id del producto que añadi