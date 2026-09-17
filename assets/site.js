const menuBtn=document.querySelector('[data-menu-btn]'),menu=document.querySelector('[data-mobile-menu]');
if(menuBtn&&menu){menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('hidden')===false;menuBtn.setAttribute('aria-expanded',String(open));});}
const revealObs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));
if(menu){menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.add('hidden');if(menuBtn)menuBtn.setAttribute('aria-expanded','false');}));}
