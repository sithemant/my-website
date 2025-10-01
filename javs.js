// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');
navToggle?.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href === '#') return;
    const el = document.querySelector(href);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav if open
      if(nav.classList.contains('show')) nav.classList.remove('show');
    }
  });
});

// Fake contact handler for demo (static site)
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thank you! This is a demo site — replace with backend or 3rd-party form service.');
  form.reset();
});

// Insert current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
