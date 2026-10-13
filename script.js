const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const menu=$('#menu'),links=$('#links'),theme=$('#theme'),header=$('#header'),progress=$('#progress');
menu.onclick=()=>links.classList.toggle('open');
$$('#links a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
theme.onclick=()=>{document.body.classList.toggle('light');theme.textContent=document.body.classList.contains('light')?'☀':'☾';localStorage.theme=document.body.classList.contains('light')?'light':'dark'};
if(localStorage.theme==='light'){document.body.classList.add('light');theme.textContent='☀'}
addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>20);progress.style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%'});
const ob=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
$$('.reveal').forEach(e=>ob.observe(e));
$('#year').textContent=new Date().getFullYear();
$('#form').onsubmit=e=>{e.preventDefault();$('#note').textContent='Thanks! The demo form is ready to connect to PHP, Formspree or EmailJS.';e.target.reset()};
