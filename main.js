function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function showSection(sectionId) {
const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');

    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');

        document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const clickedLink = Array.from(document.querySelectorAll('.nav-link')).find(
        link => link.getAttribute('onclick').includes(sectionId)
    );
    if (clickedLink) clickedLink.classList.add('active');

    window.scrollTo(0, 0);
}

function handleSubmit(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;

    alert(`Obrigado pela tua mensagem, ${nome}! Entraremos em contacto em breve.`);

    e.target.reset();
}

document.addEventListener('click', (e) => {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});