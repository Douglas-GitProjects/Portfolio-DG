(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('portfolio-theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
  root.dataset.theme = savedTheme || preferredTheme;

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.header__theme');
    if (!button) return;

    const renderThemeButton = () => {
      const isLight = root.dataset.theme === 'light';
      button.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
      button.innerHTML = `<i class="fa-solid ${isLight ? 'fa-sun' : 'fa-moon'}" aria-hidden="true"></i>`;
    };

    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('portfolio-theme', root.dataset.theme);
      renderThemeButton();
    });

    renderThemeButton();
  });
})();
