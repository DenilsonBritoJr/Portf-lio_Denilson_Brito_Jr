/* Navegação mobile*/
const menuButton = document.getElementById('menu-icon');
const navigation = document.querySelector('.navbar');

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('active');
        menuButton.classList.toggle('is-active', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navigation.classList.remove('active');
            menuButton.classList.remove('is-active');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Abrir menu');
        });
    });
}

/* Efeito de digitação somente nas páginas que têm os elementos e a biblioteca. */
if (typeof Typed !== 'undefined') {
    if (document.querySelector('.Typing')) {
        new Typed('.Typing', {
            strings: ['Estudante de Software Multiplataforma', 'Desenvolvedor Web'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
    if (document.querySelector('.Typing-T')) {
        new Typed('.Typing-T', {
            strings: ['Trajetória'],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1000,
            loop: true
        });
    }
}