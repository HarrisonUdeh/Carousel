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

// document.getElementById('cont').addEventListener('mouseover', function(){ alert("Hello World!")
// ; 
// })
document.getElementById('cont').addEventListener('mouseover', function(){ hover(keyP)
; 
})
let keyP = document.getElementsByClassName('keys')
console.log(keyP)

function hover(keyP){
    document.getElementById("prev").classList.remove('keys')
    document.getElementById("next").classList.remove('keys')
    document.getElementById("prev").classList.add('hover')
    document.getElementById("next").classList.add('hover')
    
    // alert(keyP.className);

    // if (keyP.className == "keys"){
        
        
    //     // keyP.classList.add("hover");
    //     // keyP.classList.remove("keys");
    //     // //keyP.className="hover";
    //     // //keyP.className.toggle("hover");
    //     // alert(keyP.className);
    // }

    
    // if (keyP.className == 'keys'){
    //     keyP.className = 'hover';
    //     console.log(keyP.className)
    // }
    
}


 