function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}

function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Light Mode is OFF";
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollUpButton = document.getElementById("scrollUp");

    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    };

    scrollUpButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});