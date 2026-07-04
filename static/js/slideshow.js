if(window.innerWidth <= 768){

const slider = document.querySelector(".history .slideshow");

const originalSlides = [...slider.children];

const firstClone = originalSlides[0].cloneNode(true);
const lastClone = originalSlides[originalSlides.length-1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone,slider.firstChild);

const slides = slider.children;

let current = 1;

slider.style.transform="translateX(-100%)";

let auto;

function update(animation=true){

    slider.style.transition = animation
        ? "transform .45s ease"
        : "none";

    slider.style.transform=
        `translateX(-${current*100}%)`;

}

function next(){

    current++;

    update();

}

function prev(){

    current--;

    update();

}

slider.addEventListener("transitionend",()=>{

    if(current===slides.length-1){

        current=1;

        update(false);

    }

    if(current===0){

        current=slides.length-2;

        update(false);

    }

});

function start(){

    auto=setInterval(next,4000);

}

function stop(){

    clearInterval(auto);

}

start();


// --------------------
// Swipe
// --------------------

let startX=0;
let endX=0;

slider.addEventListener("touchstart",(e)=>{

    stop();

    startX=e.touches[0].clientX;

});

slider.addEventListener("touchmove",(e)=>{

    endX=e.touches[0].clientX;

});

slider.addEventListener("touchend",()=>{

    const diff=startX-endX;

    if(diff>60){

        next();

    }
    else if(diff<-60){

        prev();

    }

    start();

});

}

document.querySelector(".history-next")
.addEventListener("click",()=>{

    stop();
    next();
    start();

});

document.querySelector(".history-prev")
.addEventListener("click",()=>{

    stop();
    prev();
    start();

});