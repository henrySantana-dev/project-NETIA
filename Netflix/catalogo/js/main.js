import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

// Espera a página carregar antes de mexer no conteúdo.
document.addEventListener('DOMContentLoaded', () => {
    // Pega o nome e a imagem do perfil que foram salvos no navegador.
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        // Se encontrou os elementos, escreve o nome e muda a imagem.
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Encontra o lugar onde vamos colocar os carrosséis de filmes.
    const container = document.getElementById('main-content');
    
    if (container) {
        // Para cada categoria de filmes, cria um carrossel e adiciona na página.
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
