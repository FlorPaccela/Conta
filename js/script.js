

//MENU MOBILE
const menuMobile = document.querySelector('.menu-options');

const serviceMobile = document.getElementById('serviceMobile');
if (serviceMobile) serviceMobile.addEventListener('click', togglemenuMobile);

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

// ===================== MODAL DEMO =====================
const demoModal = document.getElementById('demoModal');

function openDemoModal(event) {
    if (event) event.preventDefault();
    demoModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const input = document.getElementById('demoEmail');
        if (input) input.focus();
    }, 100);
}

function closeDemoModal() {
    demoModal.classList.remove('is-open');
    document.body.style.overflow = '';
}

// Cerrar al hacer click fuera del card
demoModal.addEventListener('click', function (e) {
    if (e.target === demoModal) closeDemoModal();
});

// Cerrar con tecla Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && demoModal.classList.contains('is-open')) {
        closeDemoModal();
    }
});

// Habilitar botón submit cuando hay email
document.getElementById('demoEmail').addEventListener('input', function () {
    document.getElementById('demoSubmit').disabled = this.value.trim() === '';
});
// ======================================================