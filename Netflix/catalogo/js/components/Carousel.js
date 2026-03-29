import { createCard } from './Card.js';

// Cria um carrossel de filmes ou séries para uma categoria.
export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Cabeçalho com o título da categoria.
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const row = document.createElement('div');
    row.className = 'movie-row';

    // Para cada item na categoria, cria um card e adiciona na linha.
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    section.appendChild(row);
    return section;
}
