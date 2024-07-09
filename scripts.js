document.getElementById("contactButton").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "flex";
});

document.getElementById("closeMenu").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
});

const toggleNavButton = document.getElementById('toggleNavButton');
const nav = document.querySelector('nav');

toggleNavButton.addEventListener('click', function() {
    nav.classList.toggle('nav-hidden');
});