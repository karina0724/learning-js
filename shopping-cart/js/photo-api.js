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
                                <button class="btn shop" >Comprar<i class="fas fa-shopping-cart"></i></i></button>        
                             </div>                            
                         </div>`;
        });
        containerProducts.innerHTML = imageTag;
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