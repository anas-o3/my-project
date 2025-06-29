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
