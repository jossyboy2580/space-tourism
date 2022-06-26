const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navBar = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
    navBar.classList = "slide-in";
});

closeBtn.addEventListener("click", () => {
    navBar.classList.remove("slide-in");
    navBar.classList.add("slide-out");
});