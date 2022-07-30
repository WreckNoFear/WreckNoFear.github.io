const menu = document.querySelector(".menu-items");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navBtn = document.querySelector(".navbar-btn");
const foldMenuCover = document.querySelector(".fold-menu-cover");

menuBtn.addEventListener("click", function() {
    foldMenuCover.classList.add("active");
    menu.classList.add("active");
    menuBtn.classList.add("hide");
});
cancelBtn.addEventListener("click", function() {
    foldMenuCover.classList.remove("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
});
navBtn.addEventListener("click", function() {
    foldMenuCover.classList.remove("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
})

window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav')
    let windowPos = window.scrollY > 0;
    nav.classList.toggle('nav-scroll', windowPos);
});