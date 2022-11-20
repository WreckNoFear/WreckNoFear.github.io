var html = document.getElementsByTagName('html')[0];
var menuBtn = document.getElementById('menu-btn');
var menuCBtn = document.getElementById('menu-c-btn');
var menuCurtain = document.getElementById('menu-curtain');
var menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
    menuBtn.style.display = 'none';
    menuCBtn.style.display = 'block';
    menuCurtain.style.display = 'block';
    menu.style.right = '0px';
    html.style.overflow = 'hidden';
});

menuCBtn.addEventListener('click', () => {
    menuBtn.style.display = 'block';
    menuCBtn.style.display = 'none';
    menuCurtain.style.display = 'none';
    html.style.overflow = 'visible'
    if (window.innerWidth < 650) {
        menu.style.right = 'calc(-99vw - 8px)';
    } else {
        menu.style.right = '-288px';
    };
});

menuCurtain.addEventListener('click', () => {
    if (menuCurtain.style.display = 'block') {
        menuBtn.style.display = 'block';
        menuCBtn.style.display = 'none';
        menuCurtain.style.display = 'none';
        html.style.overflow = 'visible'
        html.style.overflow = 'visible'
        if (window.innerWidth < 650) {
            menu.style.right = 'calc(-99vw - 8px)';
        } else {
            menu.style.right = '-280px';
        };
    };
});

window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav')
    let windowPos = window.scrollY > 0;
    nav.classList.toggle('nav-scroll', windowPos);
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 650) {
        menu.style.width = '99vw';
        menu.style.right = '-101vw';
    } else {
        menu.style.width = '280px';
        menu.style.right = '-288px';
    };
});
window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 650) {
        menu.style.width = '99vw';
        menu.style.right = 'calc(-99vw - 8px)';
    } else {
        menu.style.width = '280px';
    };
});