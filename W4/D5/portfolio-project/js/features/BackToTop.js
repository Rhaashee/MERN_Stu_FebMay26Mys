const swiperButton = document.getElementById("om-swiper");

// hide button in the first page
swiperButton.style.display = "none";

// when button is clicked -> go to home (top of page)
swiperButton.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// to show button only when scroll down 
window.addEventListener("click",function(){
    if(this.window.scrollY>300){
        swiperButton.style.display = "block";
    }else{
        swiperButton.style.display = "none";
    }
});