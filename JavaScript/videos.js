const videoSlider = document.getElementById("videoSlider");


function slideVideo(direction){

    videoSlider.scrollBy({

        left: direction * 350,

        behavior:"smooth"

    });

}