// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
// function myFunction() {
//     var x = document.getElementById("Lines");
//     if (x.className === "navbar") {
//         x.className += " responsive";
//     } else {
//         x.className = "navbar";
//     }
// }

// Effects
var typed = new Typed(".typeEffect", {
    strings: ["Graphic Designer", "Web Developer", "Logo Maker", "Programmer"],
    typeSpeed: 100,
    backSpeed: 80,
    looped: true,
    backDelay: 2000,
});



function myFunction(menu) {
    menu.classList.toggle("open");
}

// scroll active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// sticky nav
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
// remove toggle when click

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active')
