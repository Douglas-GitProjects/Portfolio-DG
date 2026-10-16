/* ========================================================================== 
   EFEITO DE PROFUNDIDADE DO CARTÃO DA APRESENTAÇÃO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.hero__code-card');
  if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  card.addEventListener('pointermove', (event) => {
    const bounds = card.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -4;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = 'rotate(1.5deg)';
  });
});
