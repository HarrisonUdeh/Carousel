let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_items');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', function(){
    moveToNextSlide();
})

document.getElementById('prev').addEventListener('click', function(){
    moveToPrevSlide();
});
function updateSlidePoition(){
    for(let slide of slides){
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }
    slides[slidePosition].classList.add('visible')
}
function moveToNextSlide(){
    if (slidePosition == totalSlides-1){
        slidePosition = 0;
        } else{
            slidePosition +=1;

    }
    updateSlidePoition();
    console.log('hello')
};

function moveToPrevSlide(){
    if (slidePosition == 0){
        slidePosition = totalSlides-1;
    } else{
        slidePosition -=1;
    }
    console.log('hi')
    updateSlidePoition();
}
