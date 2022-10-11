let slideIndex=1;
showSlides(slideIndex)


function plusSlides(n){
    showSlides(slideIndex+=n)
}

function currentSlide(n){
    showSlides(slideIndex=n)
}

function showSlides(n){
    let i;
    let slides=document.getElementsByClassName("slide")
    let dots=document.getElementsByClassName("dot")
    if(n>slides.length){slideIndex=1}
    if(n<1){
        slideIndex=slides.length
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none"
        slides[i].classList.add("fade")
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display="block"
    dots[slideIndex-1].className+=" active"
}
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.add("fade")
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    let dots=document.getElementsByClassName("dot")
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","")
    }
    dots[slideIndex-1].className+=" active"
    slides[slideIndex-1].style.display = "block";
    
  } 
  setInterval(showSlides,4000)