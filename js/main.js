document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     MENU RESPONSIVO
     ------------------------------------------------------------------------ */
  const menuButton = document.querySelector('.header__menu');
  const navigation = document.querySelector('.header__nav');
  const navLinks = [...document.querySelectorAll('.header__list a')];

  const closeMenu = () => {
    navigation?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    document.body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation?.classList.toggle('is-open', willOpen);
    menuButton.setAttribute('aria-expanded', String(willOpen));
    menuButton.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', willOpen);
  });
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });

  const year = document.querySelector('#ano-atual');
  if (year) year.textContent = new Date().getFullYear();

  const portrait = document.querySelector('.about__portrait img');
  portrait?.addEventListener('error', () => (portrait.hidden = true));

  /* ------------------------------------------------------------------------
     ANIMAÇÕES E NAVEGAÇÃO ENTRE SEÇÕES
     ------------------------------------------------------------------------ */
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14 },
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) =>
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`),
          );
        });
      },
      { rootMargin: '-35% 0px -55%', threshold: 0 },
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* ------------------------------------------------------------------------
     FORMULÁRIO DE CONTATO
     ------------------------------------------------------------------------ */
  const form = document.querySelector('#contact-form');
  const feedback = document.querySelector('#contact-feedback');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Contato pelo portfólio: ${data.get('subject')}`);
    const message = encodeURIComponent(
      `Olá, Douglas!\n\n${data.get('message')}\n\nNome: ${data.get('name')}\nE-mail para retorno: ${data.get('email')}`,
    );
    feedback.textContent = 'Abrindo seu aplicativo de e-mail para concluir o envio...';
    window.location.href = `mailto:douglasgsilva.2512@gmail.com?subject=${subject}&body=${message}`;
  });
});
