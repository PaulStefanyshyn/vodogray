const track = document.querySelector(".slider-track");
const images = [...track.children];

const visible = 3;
const step = 2;

let current = 0;

// Клонуємо картинки спереду і ззаду
const before = images.slice(-visible);
const after = images.slice(0, visible);

before.forEach(img=>{
    track.insertBefore(img.cloneNode(true), track.firstChild);
});

after.forEach(img=>{
    track.appendChild(img.cloneNode(true));
});

const allImages = track.children;
const imgWidth = allImages[0].offsetWidth;

current = visible;
track.style.transform = `translateX(-${current*imgWidth}px)`;

function move(){
    track.style.transition=".5s";
    track.style.transform=`translateX(-${current*imgWidth}px)`;
}

document.querySelector(".next").onclick=()=>{

    current += step;
    move();

    track.addEventListener("transitionend",function handler(){

        if(current >= images.length + visible){

            track.style.transition="none";
            current -= images.length;
            track.style.transform=`translateX(-${current*imgWidth}px)`;

        }

        track.removeEventListener("transitionend",handler);

    });

};

document.querySelector(".prev").onclick=()=>{

    current -= step;
    move();

    track.addEventListener("transitionend",function handler(){

        if(current < visible){

            track.style.transition="none";
            current += images.length;
            track.style.transform=`translateX(-${current*imgWidth}px)`;

        }

        track.removeEventListener("transitionend",handler);

    });

};