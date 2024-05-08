document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = toggleMenu.querySelector('.fa-bars');
    const closeIcon = toggleMenu.querySelector('.fa-xmark');

    toggleMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburgerIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
    });
});