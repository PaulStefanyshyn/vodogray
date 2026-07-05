const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

let scrollY = 0;

// Відкрити меню
function openMenu() {

    scrollY = window.scrollY;

    burger.classList.add("active");
    nav.classList.add("active");

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.width = "100%";
}

// Закрити меню
function closeMenu() {

    burger.classList.remove("active");
    nav.classList.remove("active");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollY);
}

// Натискання на бургер
burger.addEventListener("click", () => {

    if (nav.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }

});

// Закриття після натискання на пункт меню
document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", closeMenu);

});

// Закриття після натискання на будь-який елемент з класом .dot
document.querySelectorAll(".dot").forEach(dot => {

    dot.addEventListener("click", closeMenu);

});