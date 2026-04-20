--- script.js (原始)
// Dados históricos da história de Portugal
const historicalEvents = [
    {
        year: "1139",
        title: "Fundação do Reino de Portugal",
        description: "D. Afonso Henriques é proclamado primeiro Rei de Portugal após a Batalha de Ourique, marcando o início da independência portuguesa. Este evento fundamental estabeleceu as bases para a formação da nação portuguesa.",
        tags: ["Independência", "Monarquia", "Fundação"]
    },
    {
        year: "1147",
        title: "Conquista de Lisboa",
        description: "Com a ajuda dos Cruzados, D. Afonso Henriques conquista Lisboa aos Mouros, um marco crucial na Reconquista Cristã. A cidade tornou-se posteriormente a capital do reino em 1255.",
        tags: ["Reconquista", "Expansão", "Lisboa"]
    },
    {
        year: "1249",
        title: "Conclusão da Reconquista",
        description: "D. Afonso III conquista o Algarve, completando a Reconquista em território português. Portugal torna-se o primeiro reino europeu com fronteiras definidas e estáveis.",
        tags: ["Reconquista", "Fronteiras", "Algarve"]
    },
    {
        year: "1383-1385",
        title: "Crise de Sucessão e Batalha de Aljubarrota",
        description: "Após a morte de D. Fernando, Portugal enfrenta uma crise de sucessão. Nuno Álvares Pereira lidera as forças portuguesas à vitória na Batalha de Aljubarrota (1385), garantindo a independência contra Castela e estabelecendo a Dinastia de Avis.",
        tags: ["Independência", "Batalha", "Dinastia de Avis"]
    },
    {
        year: "1415",
        title: "Conquista de Ceuta - Início dos Descobrimentos",
        description: "D. João I conquista Ceuta no Norte de África, marcando o início da expansão marítima portuguesa. Este evento inaugura a Era dos Descobrimentos que transformaria Portugal numa potência global.",
        tags: ["Descobrimentos", "Expansão", "África"]
    },
    {
        year: "1488",
        title: "Bartolomeu Dias dobra o Cabo da Boa Esperança",
        description: "O navegador português Bartolomeu Dias contorna o extremo sul da África, abrindo o caminho marítimo para a Índia. Esta descoberta revolucionou o comércio entre Europa e Ásia.",
        tags: ["Navegação", "Descobrimentos", "Rota da Índia"]
    },
    {
        year: "1498",
        title: "Vasco da Gama chega à Índia",
        description: "Vasco da Gama alcança Calicute na Índia, estabelecendo a primeira rota marítima direta entre Europa e Ásia. Este feito transformou Portugal na principal potência comercial do século XVI.",
        tags: ["Índia", "Comércio", "Império"]
    },
    {
        year: "1500",
        title: "Descobrimento do Brasil",
        description: "Pedro Álvares Cabral desembarca no Brasil, oficialmente a 22 de abril. Inicialmente chamado de 'Terra de Vera Cruz', o Brasil tornaria-se a mais importante colónia portuguesa.",
        tags: ["Brasil", "Colónias", "América"]
    },
    {
        year: "1572",
        title: "Publicação de Os Lusíadas",
        description: "Luís de Camões publica 'Os Lusíadas', poema épico que celebra os feitos dos navegadores portugueses. Considerada a obra-prima da literatura portuguesa, imortalizou a epopeia dos Descobrimentos.",
        tags: ["Literatura", "Cultura", "Camões"]
    },
    {
        year: "1580-1640",
        title: "União Ibérica",
        description: "Após a morte de D. Sebastião na Batalha de Alcácer Quibir (1578) e a subsequente crise sucessória, Filipe II de Espanha assume o trono português. Portugal vive 60 anos sob domínio espanhol até à Restauração.",
        tags: ["União Ibérica", "Espanha", "Crise"]
    },
    {
        year: "1640",
        title: "Restauração da Independência",
        description: "A 1 de dezembro, um grupo de nobres portugueses derruba o governo espanhol e aclama D. João IV como rei, restaurando a independência nacional. Inicia-se a Dinastia de Bragança.",
        tags: ["Independência", "Restauração", "Bragança"]
    },
    {
        year: "1755",
        title: "Grande Terramoto de Lisboa",
        description: "Um terramoto de magnitude estimada em 9.0 destrói grande parte de Lisboa a 1 de novembro. O Marquês de Pombal lidera a reconstrução da cidade com planeamento urbano moderno.",
        tags: ["Terramoto", "Pombal", "Reconstrução"]
    },
    {
        year: "1807-1811",
        title: "Invasões Francesas",
        description: "As tropas napoleónicas invadem Portugal por três vezes. A Família Real transfere-se para o Brasil em 1807. As invasões causam devastação mas também aceleram mudanças políticas.",
        tags: ["Guerras", "Napoleão", "Família Real"]
    },
    {
        year: "1820",
        title: "Revolução Liberal do Porto",
        description: "Revolução liberal que exige o regresso do Rei do Brasil e uma Constituição. Marca o início do liberalismo em Portugal e leva à primeira Constituição portuguesa em 1822.",
        tags: ["Liberalismo", "Constituição", "Revolução"]
    },
    {
        year: "1822",
        title: "Independência do Brasil",
        description: "D. Pedro I proclama a independência do Brasil a 7 de setembro. Portugal perde sua maior e mais rica colónia, marcando o fim do império colonial brasileiro.",
        tags: ["Brasil", "Independência", "Império"]
    },
    {
        year: "1890",
        title: "Ultimato Inglês",
        description: "A Inglaterra exige que Portugal retire as suas tropas dos territórios entre Angola e Moçambique (Mapa Cor-de-Rosa). O ultimato gera revolta popular e enfraquece a monarquia.",
        tags: ["Colonialismo", "Inglaterra", "Crise"]
    },
    {
        year: "1910",
        title: "Implantação da República",
        description: "A 5 de outubro, uma revolução republicana derruba a monarquia constitucional. Manuel II, o último rei, parte para o exílio. É proclamada a Primeira República Portuguesa.",
        tags: ["República", "Revolução", "Monarquia"]
    },
    {
        year: "1916-1918",
        title: "Portugal na Primeira Guerra Mundial",
        description: "Portugal participa na Grande Guerra ao lado dos Aliados, principalmente em França e em África. O conflito causa instabilidade política e económica no país.",
        tags: ["Guerra Mundial", "Aliados", "Conflito"]
    },
    {
        year: "1926",
        title: "Golpe Militar e Ditadura",
        description: "Um golpe militar a 28 de maio põe fim à Primeira República e estabelece uma ditadura militar. Em 1932, Salazar torna-se Presidente do Conselho, iniciando o Estado Novo.",
        tags: ["Ditadura", "Estado Novo", "Salazar"]
    },
    {
        year: "1974",
        title: "Revolução dos Cravos",
        description: "A 25 de abril, o Movimento das Forças Armadas (MFA) derruba pacificamente o regime autoritário. Restaura-se a democracia e inicia-se o processo de descolonização.",
        tags: ["Democracia", "Revolução", "Liberdade"]
    },
    {
        year: "1975",
        title: "Independência das Colónias Africanas",
        description: "Angola, Moçambique, Guiné-Bissau, Cabo Verde e São Tomé e Príncipe conquistam a independência. Termina oficialmente o império colonial português.",
        tags: ["Descolonização", "África", "Independência"]
    },
    {
        year: "1986",
        title: "Adesão à Comunidade Económica Europeia",
        description: "Portugal adere à CEE (atual União Europeia) juntamente com a Espanha. Esta adesão marca uma nova era de desenvolvimento económico e integração europeia.",
        tags: ["Europa", "CEE", "Integração"]
    },
    {
        year: "1999",
        title: "Entrega de Macau e Lançamento do Euro",
        description: "Portugal entrega Macau à China em 20 de dezembro, encerrando cinco séculos de administração portuguesa. No mesmo ano, Portugal adota o Euro como moeda oficial.",
        tags: ["Macau", "Euro", "China"]
    },
    {
        year: "2004",
        title: "Portugal sedia o Campeonato Europeu de Futebol",
        description: "Portugal organiza o UEFA Euro 2004, construindo e renovando estádios por todo o país. O evento promoveu a imagem de Portugal internacionalmente.",
        tags: ["Desporto", "Futebol", "Euro 2004"]
    }
];

let currentIndex = 0;

// Função para renderizar eventos na timeline
function renderTimeline() {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = '';

    historicalEvents.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = `event-item ${index % 2 === 0 ? 'left' : 'right'}`;
        eventElement.onclick = () => selectEvent(index);

        eventElement.innerHTML = `
            <div class="event-year-badge">${event.year}</div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-preview">${event.description.substring(0, 100)}...</p>
        `;

        container.appendChild(eventElement);
    });
}

// Função para criar pontos de navegação
function renderNavigationDots() {
    const dotsContainer = document.getElementById('navigationDots');
    dotsContainer.innerHTML = '';

    historicalEvents.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
        dot.onclick = () => selectEvent(index);
        dotsContainer.appendChild(dot);
    });
}

// Função para selecionar e mostrar detalhes de um evento
function selectEvent(index) {
    currentIndex = index;
    const event = historicalEvents[index];

    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventYear').textContent = event.year;
    document.getElementById('eventDescription').textContent = event.description;
    document.getElementById('currentPeriod').textContent = `${index + 1}/${historicalEvents.length}`;

    // Renderizar tags
    const tagsContainer = document.getElementById('eventTags');
    tagsContainer.innerHTML = '';
    event.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    // Atualizar pontos de navegação
    updateNavigationDots();

    // Scroll suave para os detalhes
    document.getElementById('eventDetail').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}

// Atualizar estado dos pontos de navegação
function updateNavigationDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Navegar para o evento anterior
function previousEvent() {
    if (currentIndex > 0) {
        selectEvent(currentIndex - 1);
    } else {
        selectEvent(historicalEvents.length - 1);
    }
}

// Navegar para o próximo evento
function nextEvent() {
    if (currentIndex < historicalEvents.length - 1) {
        selectEvent(currentIndex + 1);
    } else {
        selectEvent(0);
    }
}

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousEvent();
    } else if (e.key === 'ArrowRight') {
        nextEvent();
    }
});

// Inicializar a aplicação
function init() {
    renderTimeline();
    renderNavigationDots();
    selectEvent(0);
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

+++ script.js (修改后)
// Dados históricos da história de Portugal com imagens
const historicalEvents = [
    {
        year: "1139",
        title: "Fundação do Reino de Portugal",
        description: "D. Afonso Henriques é proclamado primeiro Rei de Portugal após a Batalha de Ourique, marcando o início da independência portuguesa. Este evento fundamental estabeleceu as bases para a formação da nação portuguesa.",
        tags: ["Independência", "Monarquia", "Fundação"],
        image: "https://images.unsplash.com/photo-1599940778173-e276d4acb2e7?w=1920&q=80"
    },
    {
        year: "1147",
        title: "Conquista de Lisboa",
        description: "Com a ajuda dos Cruzados, D. Afonso Henriques conquista Lisboa aos Mouros, um marco crucial na Reconquista Cristã. A cidade tornou-se posteriormente a capital do reino em 1255.",
        tags: ["Reconquista", "Expansão", "Lisboa"],
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd81?w=1920&q=80"
    },
    {
        year: "1249",
        title: "Conclusão da Reconquista",
        description: "D. Afonso III conquista o Algarve, completando a Reconquista em território português. Portugal torna-se o primeiro reino europeu com fronteiras definidas e estáveis.",
        tags: ["Reconquista", "Fronteiras", "Algarve"],
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80"
    },
    {
        year: "1383-1385",
        title: "Crise de Sucessão e Batalha de Aljubarrota",
        description: "Após a morte de D. Fernando, Portugal enfrenta uma crise de sucessão. Nuno Álvares Pereira lidera as forças portuguesas à vitória na Batalha de Aljubarrota (1385), garantindo a independência contra Castela e estabelecendo a Dinastia de Avis.",
        tags: ["Independência", "Batalha", "Dinastia de Avis"],
        image: "https://images.unsplash.com/photo-1598555845144-8e6d3f4e8f5c?w=1920&q=80"
    },
    {
        year: "1415",
        title: "Conquista de Ceuta - Início dos Descobrimentos",
        description: "D. João I conquista Ceuta no Norte de África, marcando o início da expansão marítima portuguesa. Este evento inaugura a Era dos Descobrimentos que transformaria Portugal numa potência global.",
        tags: ["Descobrimentos", "Expansão", "África"],
        image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1920&q=80"
    },
    {
        year: "1488",
        title: "Bartolomeu Dias dobra o Cabo da Boa Esperança",
        description: "O navegador português Bartolomeu Dias contorna o extremo sul da África, abrindo o caminho marítimo para a Índia. Esta descoberta revolucionou o comércio entre Europa e Ásia.",
        tags: ["Navegação", "Descobrimentos", "Rota da Índia"],
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
    },
    {
        year: "1498",
        title: "Vasco da Gama chega à Índia",
        description: "Vasco da Gama alcança Calicute na Índia, estabelecendo a primeira rota marítima direta entre Europa e Ásia. Este feito transformou Portugal na principal potência comercial do século XVI.",
        tags: ["Índia", "Comércio", "Império"],
        image: "https://images.unsplash.com/photo-1524492412937-b28074f5d7d4?w=1920&q=80"
    },
    {
        year: "1500",
        title: "Descobrimento do Brasil",
        description: "Pedro Álvares Cabral desembarca no Brasil, oficialmente a 22 de abril. Inicialmente chamado de 'Terra de Vera Cruz', o Brasil tornaria-se a mais importante colónia portuguesa.",
        tags: ["Brasil", "Colónias", "América"],
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=80"
    },
    {
        year: "1572",
        title: "Publicação de Os Lusíadas",
        description: "Luís de Camões publica 'Os Lusíadas', poema épico que celebra os feitos dos navegadores portugueses. Considerada a obra-prima da literatura portuguesa, imortalizou a epopeia dos Descobrimentos.",
        tags: ["Literatura", "Cultura", "Camões"],
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=80"
    },
    {
        year: "1580-1640",
        title: "União Ibérica",
        description: "Após a morte de D. Sebastião na Batalha de Alcácer Quibir (1578) e a subsequente crise sucessória, Filipe II de Espanha assume o trono português. Portugal vive 60 anos sob domínio espanhol até à Restauração.",
        tags: ["União Ibérica", "Espanha", "Crise"],
        image: "https://images.unsplash.com/photo-1563820698-9c679b2a6af9?w=1920&q=80"
    },
    {
        year: "1640",
        title: "Restauração da Independência",
        description: "A 1 de dezembro, um grupo de nobres portugueses derruba o governo espanhol e aclama D. João IV como rei, restaurando a independência nacional. Inicia-se a Dinastia de Bragança.",
        tags: ["Independência", "Restauração", "Bragança"],
        image: "https://images.unsplash.com/photo-1596726618134-8cb2d7f6c6d0?w=1920&q=80"
    },
    {
        year: "1755",
        title: "Grande Terramoto de Lisboa",
        description: "Um terramoto de magnitude estimada em 9.0 destrói grande parte de Lisboa a 1 de novembro. O Marquês de Pombal lidera a reconstrução da cidade com planeamento urbano moderno.",
        tags: ["Terramoto", "Pombal", "Reconstrução"],
        image: "https://images.unsplash.com/photo-1518182170546-0766aaef21f6?w=1920&q=80"
    },
    {
        year: "1807-1811",
        title: "Invasões Francesas",
        description: "As tropas napoleónicas invadem Portugal por três vezes. A Família Real transfere-se para o Brasil em 1807. As invasões causam devastação mas também aceleram mudanças políticas.",
        tags: ["Guerras", "Napoleão", "Família Real"],
        image: "https://images.unsplash.com/photo-1599940778173-e276d4acb2e7?w=1920&q=80"
    },
    {
        year: "1820",
        title: "Revolução Liberal do Porto",
        description: "Revolução liberal que exige o regresso do Rei do Brasil e uma Constituição. Marca o início do liberalismo em Portugal e leva à primeira Constituição portuguesa em 1822.",
        tags: ["Liberalismo", "Constituição", "Revolução"],
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd81?w=1920&q=80"
    },
    {
        year: "1822",
        title: "Independência do Brasil",
        description: "D. Pedro I proclama a independência do Brasil a 7 de setembro. Portugal perde sua maior e mais rica colónia, marcando o fim do império colonial brasileiro.",
        tags: ["Brasil", "Independência", "Império"],
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=80"
    },
    {
        year: "1890",
        title: "Ultimato Inglês",
        description: "A Inglaterra exige que Portugal retire as suas tropas dos territórios entre Angola e Moçambique (Mapa Cor-de-Rosa). O ultimato gera revolta popular e enfraquece a monarquia.",
        tags: ["Colonialismo", "Inglaterra", "Crise"],
        image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1920&q=80"
    },
    {
        year: "1910",
        title: "Implantação da República",
        description: "A 5 de outubro, uma revolução republicana derruba a monarquia constitucional. Manuel II, o último rei, parte para o exílio. É proclamada a Primeira República Portuguesa.",
        tags: ["República", "Revolução", "Monarquia"],
        image: "https://images.unsplash.com/photo-1596726618134-8cb2d7f6c6d0?w=1920&q=80"
    },
    {
        year: "1916-1918",
        title: "Portugal na Primeira Guerra Mundial",
        description: "Portugal participa na Grande Guerra ao lado dos Aliados, principalmente em França e em África. O conflito causa instabilidade política e económica no país.",
        tags: ["Guerra Mundial", "Aliados", "Conflito"],
        image: "https://images.unsplash.com/photo-1599940778173-e276d4acb2e7?w=1920&q=80"
    },
    {
        year: "1926",
        title: "Golpe Militar e Ditadura",
        description: "Um golpe militar a 28 de maio põe fim à Primeira República e estabelece uma ditadura militar. Em 1932, Salazar torna-se Presidente do Conselho, iniciando o Estado Novo.",
        tags: ["Ditadura", "Estado Novo", "Salazar"],
        image: "https://images.unsplash.com/photo-1563820698-9c679b2a6af9?w=1920&q=80"
    },
    {
        year: "1974",
        title: "Revolução dos Cravos",
        description: "A 25 de abril, o Movimento das Forças Armadas (MFA) derruba pacificamente o regime autoritário. Restaura-se a democracia e inicia-se o processo de descolonização.",
        tags: ["Democracia", "Revolução", "Liberdade"],
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1920&q=80"
    },
    {
        year: "1975",
        title: "Independência das Colónias Africanas",
        description: "Angola, Moçambique, Guiné-Bissau, Cabo Verde e São Tomé e Príncipe conquistam a independência. Termina oficialmente o império colonial português.",
        tags: ["Descolonização", "África", "Independência"],
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
    },
    {
        year: "1986",
        title: "Adesão à Comunidade Económica Europeia",
        description: "Portugal adere à CEE (atual União Europeia) juntamente com a Espanha. Esta adesão marca uma nova era de desenvolvimento económico e integração europeia.",
        tags: ["Europa", "CEE", "Integração"],
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80"
    },
    {
        year: "1999",
        title: "Entrega de Macau e Lançamento do Euro",
        description: "Portugal entrega Macau à China em 20 de dezembro, encerrando cinco séculos de administração portuguesa. No mesmo ano, Portugal adota o Euro como moeda oficial.",
        tags: ["Macau", "Euro", "China"],
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80"
    },
    {
        year: "2004",
        title: "Portugal sedia o Campeonato Europeu de Futebol",
        description: "Portugal organiza o UEFA Euro 2004, construindo e renovando estádios por todo o país. O evento promoveu a imagem de Portugal internacionalmente.",
        tags: ["Desporto", "Futebol", "Euro 2004"],
        image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=1920&q=80"
    }
];

let currentIndex = 0;
let isAnimating = false;
let touchStartX = 0;
let touchEndX = 0;

// Criar slides do carrossel
function createCarousel() {
    const track = document.getElementById('carouselTrack');
    track.innerHTML = '';

    historicalEvents.forEach((event, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="slide-bg" style="background-image: url('${event.image}')"></div>
            <div class="slide-overlay"></div>
        `;
        track.appendChild(slide);
    });
}

// Atualizar carrossel
function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.slide');

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });

    updateInfoPanel();
}

// Atualizar painel de informações
function updateInfoPanel() {
    const event = historicalEvents[currentIndex];

    // Atualizar conteúdo com animação
    const infoContent = document.querySelector('.info-content');
    infoContent.style.animation = 'none';
    infoContent.offsetHeight; // Trigger reflow
    infoContent.style.animation = null;

    document.getElementById('eventYear').textContent = event.year;
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventDescription').textContent = event.description;
    document.getElementById('counter').textContent = `${currentIndex + 1}/${historicalEvents.length}`;

    // Atualizar barra de progresso
    const progress = ((currentIndex + 1) / historicalEvents.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    // Renderizar tags
    const tagsContainer = document.getElementById('eventTags');
    tagsContainer.innerHTML = '';
    event.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
}

// Navegar para próximo evento
function nextEvent() {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (currentIndex + 1) % historicalEvents.length;
    updateCarousel();

    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

// Navegar para evento anterior
function previousEvent() {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (currentIndex - 1 + historicalEvents.length) % historicalEvents.length;
    updateCarousel();

    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

// Ir para evento específico
function goToEvent(index) {
    if (isAnimating || index === currentIndex) return;
    isAnimating = true;

    currentIndex = index;
    updateCarousel();

    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextEvent();
    } else if (e.key === 'ArrowLeft') {
        previousEvent();
    }
});

// Suporte a swipe/touch
document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextEvent(); // Swipe para esquerda
        } else {
            previousEvent(); // Swipe para direita
        }
    }
}

// Clique nos botões
document.getElementById('prevBtn').addEventListener('click', previousEvent);
document.getElementById('nextBtn').addEventListener('click', nextEvent);

// Auto-play opcional (descomentar para ativar)
// setInterval(nextEvent, 8000);

// Inicializar
function init() {
    createCarousel();
    updateCarousel();
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);
