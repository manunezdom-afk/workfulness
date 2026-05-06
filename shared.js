const reveals=document.querySelectorAll('[data-reveal]');
if(reveals.length){const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');ro.unobserve(e.target)}})},{threshold:0.12});reveals.forEach(el=>ro.observe(el))}
const counters=document.querySelectorAll('[data-count]');
if(counters.length){const co=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=+el.dataset.count,suffix=el.dataset.suffix||'',dur=1400,start=Date.now();const tick=()=>{const p=Math.min((Date.now()-start)/dur,1),ease=1-Math.pow(1-p,4);el.textContent=Math.round(ease*target)+suffix;p<1&&requestAnimationFrame(tick)};requestAnimationFrame(tick);co.unobserve(el)})},{threshold:0.5});counters.forEach(el=>co.observe(el))}
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
