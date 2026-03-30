// Importa o array de categorias de dados externos
import { categories } from './data.js';
// Importa a função responsável por criar carrosséis de um componente externo
import { createCarousel } from './components/Carousel.js';

// Executa o código apenas após todo o conteúdo do DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
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
