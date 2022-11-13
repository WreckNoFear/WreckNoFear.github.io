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
    menu.style.right = '-258px';
    html.style.overflow = 'visible'
});

menuCurtain.addEventListener('click', () => {
    if (menuCurtain.style.display = 'block') {
        menuBtn.style.display = 'block';
        menuCBtn.style.display = 'none';
        menuCurtain.style.display = 'none';
        menu.style.right = '-258px';
        html.style.overflow = 'visible'
    };
});
