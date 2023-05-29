const menuItems = document.querySelectorAll('.smooth_links');
menuItems.forEach(item => {
    item.addEventListener('click', scrollToId)
})

function scrollToId(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 80,
        behavior: "smooth"
    })
}

const menu = document.querySelector('header nav div.menu');
const navMenu = document.querySelector('header nav ul');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const projectsNotAllowed = document.querySelectorAll('.not_allowed');
projectsNotAllowed.forEach(item => {
    item.addEventListener('click', notAllowed)
})

function notAllowed(event) {
    event.preventDefault();
}