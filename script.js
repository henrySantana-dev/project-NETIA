// Obtém o botão de alternância de tema pelo ID
const themeToggleButton = document.getElementById('theme-toggle');

// Chave usada para salvar a preferência de tema no localStorage
const themeStorageKey = 'netflixTheme';

// Função que aplica o tema ao body e atualiza o estado do botão
const setTheme = (theme) => {
    if (!themeToggleButton) return; // Se o botão não existir, sai sem fazer nada

    const isLightTheme = theme === 'light'; // Verifica se o tema atual é claro
    document.body.classList.toggle('light-theme', isLightTheme); // Adiciona ou remove a classe do body
    themeToggleButton.setAttribute('aria-pressed', String(isLightTheme)); // Atualiza o estado ARIA do botão
};

// Recupera o tema salvo ou usa a preferência do sistema
const getStoredTheme = () => {
    const savedTheme = localStorage.getItem(themeStorageKey); // Lê o tema do localStorage
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme; // Retorna tema válido se existir
    }
    // Caso não haja tema salvo, usa a preferência do sistema operacional
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

// Alterna entre dark e light quando o botão é clicado
const toggleTheme = () => {
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme); // Aplica o próximo tema
    localStorage.setItem(themeStorageKey, nextTheme); // Salva a preferência do usuário
};

// Executa quando o conteúdo da página estiver carregado
window.addEventListener('DOMContentLoaded', () => {
    const theme = getStoredTheme(); // Descobre o tema inicial
    setTheme(theme); // Aplica o tema inicial

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme); // Registra o evento de clique
    }

    // Salva o perfil ativo no localStorage quando o usuário clica em um perfil.
    const profileLinks = document.querySelectorAll('.profiles a[href="catalogo/catalogo.html"]');
    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const profileImage = link.querySelector('img');
            const profileName = link.querySelector('figcaption');

            if (profileName && profileImage) {
                localStorage.setItem('perfilAtivoNome', profileName.textContent.trim());
                localStorage.setItem('perfilAtivoImagem', profileImage.src);
            }
        });
    });
});