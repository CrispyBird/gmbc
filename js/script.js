document.addEventListener("DOMContentLoaded", function () {
    const primaryNav = document.querySelector(".primary-nav");

    window.addEventListener("scroll", function () {
        primaryNav.classList.toggle("scrolled", window.scrollY > 0);
    });

    let lastScrollY = window.scrollY;
    const nav = document.querySelector('.primary-nav');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('hide', window.scrollY > lastScrollY);
        lastScrollY = window.scrollY;
    });

    let slideIndex = 1;
    const slides = document.getElementsByClassName("mySlides");
    showDivs(slideIndex);

    document.querySelector(".button-left").addEventListener("click", () => plusDivs(-1));
    document.querySelector(".button-right").addEventListener("click", () => plusDivs(1));

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        Array.from(slides).forEach(slide => slide.style.display = "none");
        slides[slideIndex - 1].style.display = "block";
    }
});
