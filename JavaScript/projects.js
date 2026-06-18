const images = [
    "../assests/const 1.jpg",
    "../assests/const 2.jpg",
    "../assests/Logist 1.jpg",
    "../assests/Team Planning.jpg"
];

let currentIndex = 0;

function openLightbox(index){

    currentIndex = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightboxImage").src =
    images[currentIndex];
}

function closeLightbox(){

    document.getElementById("lightbox").style.display =
    "none";
}

function changeImage(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightboxImage").src =
    images[currentIndex];
}

document
.getElementById("viewAllBtn")
.addEventListener("click", function(){

    document
    .querySelectorAll(".hidden-project")
    .forEach(project => {

        project.style.display = "block";
    });

    this.innerHTML =
    'All Projects Displayed <i class="fa-solid fa-check"></i>';

    this.disabled = true;
});

images.push("../assets/new-project.jpg");

