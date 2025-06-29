let menu = document.querySelector("#menu-toggle");
let label = document.querySelector(".menu-icon-label");
let navbar = document.querySelector("nav");

menu.addEventListener("change", () => {
if (menu.checked) {
    label.classList.add("bx-x");
    navbar.classList.add("active");
} else {
    label.classList.remove("bx-x");
    navbar.classList.remove("active");
}
});

window.addEventListener("scroll", () => {
    menu.checked = false;
    label.classList.remove("bx-x");
    navbar.classList.remove("active");
});
var typed = new Typed('.hh3', {
    strings: ['Web Developer', 'UI/UX Designer', 'Front-End Developer' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1400,
    loop: true,


    });

let darkToggle = document.querySelector("#dark-toggle");
darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("dark-mode", "disabled");
    }
}); 