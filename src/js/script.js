// JavaScript (script.js)

// Function to toggle the menu
function toggleMenu() {
    document.querySelector('.menu-btn').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('open');

    // Toggle animation for menu items
    document.querySelectorAll('.menu__item').forEach(item => {
        item.classList.toggle('animated');
    });
}

// Event listener for toggling the menu when the hamburger button is clicked
document.querySelector('.menu-btn').addEventListener('click', () => {
    toggleMenu();
});

// Event listener for toggling the menu when a menu item is clicked
document.querySelectorAll('.menu__item').forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu();
    });
});
