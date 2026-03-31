// Importa funções utilitárias para manipulação de dados do vídeo e geração de valores aleatórios
import { getYouTubeId, getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from '../utils.js';

// Exporta função responsável por criar o elemento card de um filme/vídeo
export function createCard(item) {
    // Cria o elemento div principal do card e define sua classe base
    const card = document.createElement('div');
    card.className = 'movie-card';
    // Se o item tiver progresso de visualização, adiciona classe correspondente
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // Cria elemento de imagem para capa do filme/vídeo
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Movie cover`;

    // Cria elemento iframe para reprodução do vídeo do YouTube
    const iframe = document.createElement('iframe');
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";

    // Obtém o ID do vídeo do YouTube a partir do link fornecido no item
    const videoId = getYouTubeId(item.youtube);

    // Adiciona iframe e imagem como filhos do card
    card.appendChild(iframe);
    card.appendChild(img);

    // Obtém um selo de classificação etária aleatório
    const ageBadge = getRandomAgeBadge();

    // Cria elemento para container de detalhes do card
    const details = document.createElement('div');
    details.className = 'card-details';
    // Define o conteúdo HTML interno dos detalhes, incluindo botões, informações e tags
    details.innerHTML = `
        <div class="details-buttons">
        <h5 class="movie-title">${item.nome}</h5>
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    // Adiciona container de detalhes como filho do card
    card.appendChild(details);


    // Se o item tiver progresso de visualização, cria e adiciona barra de progresso
    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`;
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    // Declara variável para controlar o timeout de reprodução
    let playTimeout;
    // Adiciona ouvinte de evento para quando o mouse entrar no card
    card.addEventListener('mouseenter', () => {
        // Obtém dimensões e posição do card na tela
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        
        // Aplica classes para ajustar posicionamento caso o card esteja próximo às bordas da janela
        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        // Define timeout para iniciar reprodução do vídeo após 600ms
        playTimeout = setTimeout(() => {
            // Configura fonte do iframe com parâmetros de reprodução automática, mudo, sem controles, etc.
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            // Adiciona classes para estilizar elemento durante reprodução
            iframe.classList.add('playing');
            img.classList.add('playing-video');
        }, 700);
    });

    // Adiciona ouvinte de evento para quando o mouse sair do card
    card.addEventListener('mouseleave', () => {
        // Limpa o timeout para evitar que a reprodução inicie após o mouse sair
        clearTimeout(playTimeout);
        // Remove classes de estilização de reprodução
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        // Limpa a fonte do iframe para parar a reprodução
        iframe.src = "";
        // Remove classes de ajuste de posicionamento
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    // Retorna o card completo criado
    return card;
}
