//UPLOAD AND SHOW PHOTOS FROM PEXELS API
const containerProducts = document.querySelector(".products");
const categoryName = document.getElementById('category-name');
const categories = Array.from(document.getElementsByClassName("category"));

function getPhotos(images){
        let imageTag = "";
        images.map(image => {
            imageTag += `<div class="product" id="${image.id}">
                             <div class="image">
                                 <img src="${image.src.tiny}" alt="${image.alt}">
                             </div>
                             <div class="description">
                                 <p>${image.alt}</p>
                                 <p>RD$ 100.00</p>
                                 <button>Añadir al carrito</button>
                                 <button>Comprar <i class="fas fa-shopping-cart"></i></button>
                                 <span><i class="fas fa-cart-plus"></i><span/>
                                 <span><i class="fas fa-heart"></i></span>
                             </div>
                         </div>`;
        });
        containerProducts.innerHTML = imageTag;
}

async function pexelsApi(search, quantity=10){
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