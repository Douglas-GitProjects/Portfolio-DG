/* ========================================================================== 
   DADOS DOS PROJETOS
   ========================================================================== */
const portfolioProjects = {
  'dev-cloud': {
    title: 'Dev Cloud',
    description:
      'A Dev Cloud foi um dos projetos que marcou o começo da minha trajetória no Front-End. A proposta era apresentar serviços digitais de forma clara, com uma navegação simples e uma identidade visual ligada ao universo da tecnologia.',
    contribution:
      'Cuidei da estrutura das páginas, da estilização, da adaptação para diferentes telas e das interações em JavaScript.',
    learning:
      'Foi onde comecei a entender, na prática, como organizar um site completo e transformar uma ideia visual em uma interface funcional.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsividade'],
    images: ['assets/projetos/dev-cloud/capa.jpg'],
    live: 'https://dev-cloud-flame.vercel.app/',
    github: 'https://github.com/Douglas-GitProjects/Dev_cloud',
  },
  'pipoca-poc': {
    title: 'Pipoca Poc',
    description:
      'Uma vitrine digital criada para apresentar os produtos da Pipoca Poc com uma linguagem alegre, colorida e próxima do público. O visual foi pensado para deixar a navegação leve e destacar a personalidade da marca.',
    contribution:
      'Trabalhei na construção da interface, nos componentes responsivos e nas animações que deixam a experiência mais dinâmica.',
    learning:
      'O projeto me ajudou a explorar melhor identidade visual, hierarquia de informação e consistência entre diferentes seções.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI Design'],
    images: ['assets/projetos/pipoca-poc/capa.jpg'],
    live: 'https://pipoca-poc.onrender.com/',
    github: 'https://github.com/Douglas-GitProjects/Pipoca-Poc',
  },
  espectrocare: {
    title: 'EspectroCare',
    badge: 'Projeto acadêmico • TCC',
    description:
      'A EspectroCare nasceu como projeto de TCC para reunir informação confiável, acolhimento e acesso a profissionais especializados em um mesmo ambiente. O objetivo é tornar a jornada de famílias de pessoas com TEA um pouco mais simples e segura.',
    contribution:
      'Participei do Front-End, do desenho das interfaces, das decisões de acessibilidade e da adaptação do site para diferentes dispositivos, sempre em colaboração com a equipe.',
    learning:
      'Aprendi a pensar além da aparência da tela e considerar com mais cuidado clareza, acolhimento, acessibilidade e responsabilidade no conteúdo.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Acessibilidade', 'Git'],
    images: ['assets/projetos/espectrocare/capa.jpg'],
    live: 'https://espectro-care.onrender.com/',
  },
  conversor: {
    title: 'Conversor de moedas',
    badge: 'Projeto acadêmico',
    type: 'mobile',
    description:
      'Aplicativo Android feito para converter valores de moedas estrangeiras para real de maneira rápida. A interface prioriza uma tarefa por vez: informar o valor, escolher a moeda e visualizar o resultado.',
    contribution:
      'Implementei a tela, as validações de entrada, a seleção de moedas e a lógica responsável por apresentar o valor convertido.',
    learning:
      'O principal aprendizado foi conectar a lógica da aplicação aos estados da interface e apresentar o resultado sem complicar a experiência.',
    technologies: ['Kotlin', 'Android Studio', 'API REST'],
    images: [
      'assets/projetos/conversor/capa.jpeg',
      'assets/projetos/conversor/euro.jpeg',
      'assets/projetos/conversor/digitacao.jpeg',
    ],
    github: 'https://github.com/Douglas-GitProjects/App-Conversor',
  },
  'consulta-cep': {
    title: 'Consulta CEP',
    badge: 'Projeto acadêmico',
    type: 'mobile',
    description:
      'Aplicativo Android que consulta um CEP e organiza os dados encontrados em uma tela direta, mostrando logradouro, bairro, cidade, estado e DDD.',
    contribution:
      'Desenvolvi a interface de busca e a apresentação dos dados retornados, com atenção para deixar o resultado fácil de conferir.',
    learning:
      'O projeto foi um exercício prático de consumo de serviços externos, tratamento de resposta e organização de informações na tela.',
    technologies: ['Kotlin', 'Android Studio', 'API de CEP'],
    images: ['assets/projetos/consulta-cep/capa.jpeg'],
  },
  jokenpo: {
    title: 'Jokenpô',
    badge: 'Projeto acadêmico',
    type: 'mobile',
    description:
      'Uma versão mobile do clássico pedra, papel e tesoura, criada para praticar regras de jogo, estados da aplicação e respostas imediatas às escolhas do usuário.',
    contribution:
      'Desenvolvi as regras da partida, a escolha do computador e a atualização da interface a cada rodada.',
    learning:
      'A construção do jogo reforçou conceitos de lógica condicional, eventos e controle de estado.',
    technologies: ['Kotlin', 'Android Studio', 'Lógica de programação'],
    images: [],
    icon: 'fa-hand-scissors',
    github: 'https://github.com/Douglas-GitProjects/Jokenpo-APP',
  },
  'login-app': {
    title: 'Aplicativo de login',
    badge: 'Projeto acadêmico',
    type: 'mobile',
    description:
      'Aplicativo criado para estudar um fluxo de autenticação completo, desde o preenchimento dos dados até a comunicação com uma API e a navegação entre telas.',
    contribution:
      'Construí as telas, as validações do formulário, a navegação e a integração dos dados de acesso.',
    learning:
      'O projeto me ajudou a entender melhor a separação de responsabilidades e os cuidados necessários ao apresentar erros e confirmações ao usuário.',
    technologies: ['Kotlin', 'Android Studio', 'API REST', 'UX'],
    images: [],
    icon: 'fa-user-shield',
    github: 'https://github.com/Douglas-GitProjects/App_Login_AS',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     ELEMENTOS DO MODAL
     ------------------------------------------------------------------------ */
  const modal = document.querySelector('#project-modal');
  if (!modal) return;

  const title = modal.querySelector('#modal-project-title');
  const description = modal.querySelector('#modal-project-description');
  const contribution = modal.querySelector('#modal-project-contribution');
  const learning = modal.querySelector('#modal-project-learning');
  const badge = modal.querySelector('#modal-project-badge');
  const tags = modal.querySelector('#modal-project-technologies');
  const visual = modal.querySelector('#modal-project-visual');
  const stage = modal.querySelector('.project-modal__stage');
  const image = modal.querySelector('#modal-project-image');
  const fallback = modal.querySelector('#modal-project-fallback');
  const counter = modal.querySelector('#modal-project-counter');
  const previousButton = modal.querySelector('.project-modal__arrow--previous');
  const nextButton = modal.querySelector('.project-modal__arrow--next');
  const liveLink = modal.querySelector('#modal-project-live');
  const githubLink = modal.querySelector('#modal-project-github');
  const closeButton = modal.querySelector('.project-modal__close');
  let trigger = null;
  let activeProject = null;
  let activeImage = 0;
  let touchStartX = 0;

  /* ------------------------------------------------------------------------
     CARROSSEL DE IMAGENS
     ------------------------------------------------------------------------ */
  const renderImage = () => {
    const images = activeProject?.images || [];
    const hasImages = images.length > 0;
    image.hidden = !hasImages;
    fallback.hidden = hasImages;
    visual.classList.toggle('is-mobile', activeProject?.type === 'mobile');

    if (hasImages) {
      image.src = images[activeImage];
      image.alt = `Tela ${activeImage + 1} do projeto ${activeProject.title}`;
    } else {
      image.removeAttribute('src');
      fallback.innerHTML = `<i class="fa-solid ${activeProject.icon || 'fa-code'}" aria-hidden="true"></i><span>Imagens em breve</span>`;
    }

    const hasCarousel = images.length > 1;
    previousButton.hidden = !hasCarousel;
    nextButton.hidden = !hasCarousel;
    counter.textContent = hasCarousel ? `${activeImage + 1} / ${images.length}` : '';
  };

  const changeImage = (direction) => {
    if (!activeProject || activeProject.images.length < 2) return;
    activeImage =
      (activeImage + direction + activeProject.images.length) % activeProject.images.length;
    renderImage();
  };

  const closeModal = () => {
    modal.close();
    document.body.classList.remove('modal-open');
    trigger?.focus();
  };

  /* ------------------------------------------------------------------------
     ABERTURA E FECHAMENTO DO MODAL
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-project]').forEach((button) => {
    button.addEventListener('click', () => {
      const project = portfolioProjects[button.dataset.project];
      if (!project) return;
      trigger = button;
      activeProject = project;
      activeImage = 0;
      title.textContent = project.title;
      description.textContent = project.description;
      contribution.textContent = project.contribution;
      learning.textContent = project.learning;
      badge.textContent = project.badge || 'Projeto pessoal';
      tags.replaceChildren(
        ...project.technologies.map((technology) => {
          const tag = document.createElement('span');
          tag.textContent = technology;
          return tag;
        }),
      );
      liveLink.hidden = !project.live;
      githubLink.hidden = !project.github;
      if (project.live) liveLink.href = project.live;
      if (project.github) githubLink.href = project.github;
      renderImage();
      modal.showModal();
      document.body.classList.add('modal-open');
      closeButton.focus();
    });
  });

  previousButton.addEventListener('click', () => changeImage(-1));
  nextButton.addEventListener('click', () => changeImage(1));
  stage.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );
  stage.addEventListener(
    'touchend',
    (event) => {
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) > 50) changeImage(distance > 0 ? -1 : 1);
    },
    { passive: true },
  );
  modal.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') changeImage(-1);
    if (event.key === 'ArrowRight') changeImage(1);
  });
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  modal.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeModal();
  });
});
