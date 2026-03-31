// Importa o array de categorias de dados externos
import { categories } from './data.js';
// Importa a função responsável por criar carrosséis de um componente externo
import { createCarousel } from './components/Carousel.js';

// Executa o código apenas após todo o conteúdo do DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    
    const hero = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero h1');
const heroDesc = document.querySelector('.hero p');

let indexHero = 0;

// Junta todos os filmes em um array só
const allMovies = categories.flatMap(cat => cat.items);

function atualizarHero() {
    const movie = allMovies[indexHero];

    hero.style.backgroundImage = `
        linear-gradient(to top, #141414, transparent),
        url('${movie.img}')
    `;

    heroTitle.textContent = movie.nome;
    heroDesc.textContent = "Filme em destaque da plataforma";

    indexHero = (indexHero + 1) % allMovies.length;
}

// roda uma vez ao carregar
atualizarHero();

// troca a cada 2 minutos (120000 ms)
setInterval(atualizarHero, 10000);
    
    
    // Obtém o nome do perfil ativo armazenado no localStorage
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    // Obtém o caminho da imagem do perfil ativo armazenado no localStorage
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Verifica se tanto o nome quanto a imagem do perfil foram recuperados com sucesso
    if (nomePerfil && imagemPerfil) {
        // Seleciona o elemento de link relacionado ao perfil kids na página
        const kidsLink = document.querySelector('.kids-link');
        // Seleciona o elemento de ícone do perfil na página
        const profileIcon = document.querySelector('.profile-icon');
        
        // Se o elemento de link existir, atualiza seu texto com o nome do perfil
        if (kidsLink) kidsLink.textContent = nomePerfil;
        // Se o elemento de ícone existir, atualiza sua fonte com a imagem do perfil
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Seleciona o container principal onde os carrosséis serão inseridos
    const container = document.getElementById('main-content');
    
    // Verifica se o container foi encontrado na página
    if (container) {
        // Percorre cada categoria do array de categorias
        categories.forEach(category => {
            // Cria um carrossel específico para a categoria atual usando a função importada
            const carousel = createCarousel(category);
            // Adiciona o carrossel criado como filho do container principal
            container.appendChild(carousel);
        });
    }
});

