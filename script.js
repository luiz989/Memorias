document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    const temaBoxes = document.querySelectorAll('.tema-box');
    const backToTopButton = document.getElementById('back-to-top');
    let currentTheme = 'dark';

    // Alternar tema
    themeToggle.addEventListener('click', function() {
        if (currentTheme === 'dark') {
            body.classList.add('light-theme');
            temaBoxes.forEach(box => box.classList.add('light-theme'));
            currentTheme = 'light';
            themeToggle.textContent = '🌙'; // Símbolo da lua para o tema claro
        } else {
            body.classList.remove('light-theme');
            temaBoxes.forEach(box => box.classList.remove('light-theme'));
            currentTheme = 'dark';
            themeToggle.textContent = '☀️'; // Símbolo do sol para o tema escuro
        }
    });

    // Menu hambúrguer
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
        menuButton.classList.toggle('active');
        // Altera a animação do menu hambúrguer para X
        menuButton.classList.toggle('cross');
    });

    // Botão Voltar ao Topo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex'; // Alterado para flex para centralizar o conteúdo
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Carrossel de imagens
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    // Função para mudar os slides
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none'; // Alteração para apenas mostrar o slide atual
        });
    }

    // Exibir o slide inicial
    showSlide(currentSlide);

    // Botão "Próximo" - Move para o próximo slide
    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length; // Vai para o próximo slide, reinicia ao final
        showSlide(currentSlide);
    });

    // Botão "Anterior" - Move para o slide anterior
    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Vai para o slide anterior
        showSlide(currentSlide);
    });
});