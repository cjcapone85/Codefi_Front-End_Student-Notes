// * ========== HTML Element Selectors ========== * \\
const progressBar = document.querySelector("#progress-bar");

// * ========== Function Declarations ========== * \\
function fillProgressBar() {
    const windowHeight=window.innerHeight;
    const fullHeight;document.body.clientHeight;
    const scrolled=window.scrollY;
}
// * ========== Event Listeners ========== * \\
window.addEventListener("scroll", fillProgressBar);