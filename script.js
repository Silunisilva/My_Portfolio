// About Me Section Animation
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-content");
    function revealAbout() {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            aboutSection.classList.add("show");
        }
    }
    window.addEventListener("scroll", revealAbout);
});

document.addEventListener("DOMContentLoaded", function () {
const aboutSection = document.querySelector(".about-content");
function revealAbout() {
const sectionPos = aboutSection.getBoundingClientRect().top;
const screenPos = window.innerHeight / 1.3;
if (sectionPos < screenPos) {
    aboutSection.classList.add("show");
}
}
window.addEventListener("scroll", revealAbout);
});