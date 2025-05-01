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

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            } else {
                entry.target.classList.remove('section-visible');
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the animation starts
    });

    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });
});

