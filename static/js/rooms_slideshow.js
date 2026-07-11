document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".gallery").forEach(gallery => {

    const slides = gallery.querySelectorAll(".main-slide");
    const previews = gallery.querySelectorAll(".preview");

    previews.forEach((preview, index) => {

        preview.addEventListener("click", () => {

            slides.forEach(slide => slide.classList.remove("active"));
            previews.forEach(item => item.classList.remove("active"));

            slides[index].classList.add("active");
            preview.classList.add("active");

        });

    });

});

});