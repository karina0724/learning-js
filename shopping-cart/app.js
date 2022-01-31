const container = document.querySelector(".fruit");
let imageTag;

function getPhotos(images, category = "fruit"){
    images.map(image => {
        imageTag += `<div class="image">
                        <img src="${image.src.tiny}" alt="${image.alt}">
                    </div>`;
    });
    container.innerHTML = imageTag;
}


//getPhotos()
