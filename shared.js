const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
const toggle = document.getElementById('menuToggle');
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('drawerBackdrop');
const close = document.getElementById('drawerClose');
const open = (v) => {
  drawer.classList.toggle('open', v);
  backdrop.classList.toggle('open', v);
  drawer.setAttribute('aria-hidden', v ? 'false' : 'true');
  toggle.setAttribute('aria-expanded', v ? 'true' : 'false');
};
toggle.addEventListener('click', () => open(true));
close.addEventListener('click', () => open(false));
backdrop.addEventListener('click', () => open(false));
