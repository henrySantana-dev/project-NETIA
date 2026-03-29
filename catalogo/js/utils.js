// Função que pega o id do vídeo do YouTube a partir do link.
// O id é usado para colocar o vídeo dentro do card quando o mouse passar por cima.
export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8"; // usa um vídeo padrão se não tiver link
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return url.split('/').pop();
}

// Função que devolve um número entre 80 e 99.
// Esse número aparece como porcentagem de "match" no card.
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Função que cria um texto de duração aleatória.
// Se o item já tem progresso, mostra "10 temporadas".
export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// Função que escolhe aleatoriamente uma tag de idade.
// Às vezes retorna A16 com cor vermelha, às vezes 16 normal.
export function getRandomAgeBadge() {
    return Math.random() > 0.5
        ? { text: 'A16', class: 'red-accent' }
        : { text: '16', class: '' };
}
