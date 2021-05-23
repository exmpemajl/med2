document.addEventListener('DOMContentLoaded', function (e) {
    document.querySelector(".header__burger").onclick = function (e) {
        document.querySelector(".header__menu").classList.toggle("active");
        document.querySelector(".header__burger").classList.toggle("active");
    };
    document.querySelector(".modal").onclick = function (e) {
        document.querySelector(".modal__active").classList.toggle("active");
    };
    document.querySelector(".form__close").onclick = function (e) {
        document.querySelector(".modal__active").classList.toggle("active");
    };
});