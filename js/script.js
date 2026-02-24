

//MENU MOBILE
const menuMobile = document.querySelector('.menu-options');

serviceMobile.addEventListener('click', togglemenuMobile);

menuMobile.addEventListener('click', (event) => {
    event.stopPropagation();
});

window.addEventListener('scroll', () => {
    menuMobile.classList.add('inactive');
});

function togglemenuMobile(event) {
    event.preventDefault();   // 👈 evita el doble disparo mobile
    event.stopPropagation();
    menuMobile.classList.toggle('inactive');
}

// STEPS IMAGE SWITCHER
const stepItems = document.querySelectorAll('.steps-items-content');
const stepImages = document.querySelectorAll('.steps-images .steps-img');

stepItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const step = item.dataset.step;

        // Sacar active de todos
        stepItems.forEach(el => el.classList.remove('active'));
        stepImages.forEach(el => el.classList.remove('active'));

        // Activar el correspondiente
        item.classList.add('active');
        const targetImg = document.querySelector(`.steps-img[data-step="${step}"]`);
        if (targetImg) targetImg.classList.add('active');
    });
});