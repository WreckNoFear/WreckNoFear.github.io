const menu = document.querySelector(".menu-items");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navBtn = document.querySelector(".navbar-btn");

const notes = document.querySelector(".notes-btn");
const notesClose = document.getElementById("close-notes");
let notesPopup = document.getElementById('notes-popup')
let cover = document.getElementById('cover')

menuBtn.addEventListener("click", function() {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
});
cancelBtn.addEventListener("click", function() {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
});
navBtn.addEventListener("click", function() {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
})

notes.addEventListener("click", function() {
    notesPopup.style.visibility = "visible";
    cover.style.visibility = "visible";
    window.scrollTo(0, 0);
})
notesClose.addEventListener("click", function() {
    notesPopup.style.visibility = "hidden";
    cover.style.visibility = "hidden";
})

window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav')
    let windowPos = window.scrollY > 0;
    nav.classList.toggle('nav-scroll', windowPos);
});