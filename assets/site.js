
const menuBtn=document.querySelector('[data-menu-btn]'),menu=document.querySelector('[data-mobile-menu]');
if(menuBtn&&menu){menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('hidden')===false;menuBtn.setAttribute('aria-expanded',String(open));});}
const revealObs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const f=btn.dataset.filter;
 document.querySelectorAll('.procedure-card').forEach(c=>{c.hidden=!(f==='All'||c.dataset.category===f)});
}));
