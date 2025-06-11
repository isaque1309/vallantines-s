
// Episodes data
const episodes = [
    {
        id: 1,
        thumbnail: 'ft1.jpg',
        title: 'Episódio 1'
    },
    {
        id: 2,
        thumbnail: 'ft2.jpg',
        title: 'Episódio 2'
    },
    {
        id: 3,
        thumbnail: 'ft4.jpg',
        title: 'Episódio 3'
    },
    {
        id: 4,
        thumbnail: 'ft5.jpg',
        title: 'Episódio 4'
    },
    {
        id: 5,
        thumbnail: 'ft6.jpg',
        title: 'Episódio 5'
    },
    {
        id: 6,
        thumbnail: 'ft7.jpg',
        title: 'Episódio 5'
    },
    {
        id: 7,
        thumbnail: 'img.jpg',
        title: 'Episódio 5'
    },
    {
        id: 8,
        thumbnail: 'img1.jpg',
        title: 'Episódio 5'
    },
    {
        id: 9,
        thumbnail: 'img2.jpg',
        title: 'Episódio 5'
    },
    {
        id: 10,
        thumbnail: 'img3.jpg',
        title: 'Episódio 5'
    },
    {
        id: 11,
        thumbnail: 'img4.jpg',
        title: 'Episódio 5'
    },
    {
        id: 12,
        thumbnail: 'img5.jpg',
        title: 'Episódio 5'
    },
    {
        id: 13,
        thumbnail: 'img6.jpg',
        title: 'Episódio 5'
    },
    {
        id: 14,
        thumbnail: 'img7.jpg',
        title: 'Episódio 5'
    }
];


function generateEpisodes() {
    const episodesGrid = document.getElementById('episodesGrid');
    
    episodes.forEach(episode => {
        const episodeCard = document.createElement('div');
        episodeCard.className = 'episode-card';
        episodeCard.onclick = () => playEpisode(episode.id);
        
        episodeCard.innerHTML = `
            <img src="${episode.thumbnail}" alt="${episode.title}" class="episode-image">
            <div class="episode-badge">HD</div>
            <div class="episode-overlay"></div>
        `;
        
        episodesGrid.appendChild(episodeCard);
    });
}


function playContent() {
    console.log('Reproduzindo conteúdo principal...');
   
    
    const audio = new Audio('Papoulas.mp3'); // Caminho do arquivo de áudio
    audio.play();
}

function toggleFavorite() {
    console.log('Alternando favorito...');
    
    const btn = document.querySelector('.btn-secondary');
    const currentText = btn.textContent.trim();
    
    if (currentText.includes('Favorito')) {
        btn.innerHTML = `
            <svg class="check-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            Favoritado
        `;
        
    } else {
        btn.innerHTML = `
            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            Favorito
        `;
     
    }
}

// Function to handle episode click
function playEpisode(episodeId) {
    console.log(`Reproduzindo episódio ${episodeId}...`);
    
}

// Function to add smooth scrolling for episodes carousel
function addSmoothScrolling() {
    const episodesGrid = document.getElementById('episodesGrid');
    
    // Add scroll buttons functionality if needed
    episodesGrid.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            episodesGrid.scrollLeft += e.deltaY;
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('HEARTZZU - Plataforma de Streaming carregada!');
    
    // Generate episodes
    generateEpisodes();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 0.8s ease-out';
        heroContent.style.opacity = '1';
    }, 100);
});

// Utility function for responsive behavior
function handleResize() {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('.hero-title');
    
    if (width <= 480) {
        heroTitle.style.fontSize = '2rem';
    } else if (width <= 768) {
        heroTitle.style.fontSize = '2.5rem';
    } else {
        heroTitle.style.fontSize = '4rem';
    }
}

// Add resize listener
window.addEventListener('resize', handleResize);

// Call once on load
handleResize();
