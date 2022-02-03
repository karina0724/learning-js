const addCarButton = document.getElementById('add-car');
const shopButton = document.getElementById('shop');
const addFavorite = document.getElementById('favorite');
const product = Array.from(document.getElementsByClassName('product'));

let shoppingCart = [];
let favoritesProducts = [];

export function addCar(){
  console.log('hola');
}

product.forEach(element => {
    // element.addEventListener('click', function(){
        console.log(element);
    // });
});