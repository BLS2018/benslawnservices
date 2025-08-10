
// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.style.display === 'flex';
    navMenu.style.display = open ? 'none' : 'flex';
    navToggle.setAttribute('aria-expanded', String(!open));
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form handler (mailto fallback)
const form = document.getElementById('quote-form');
const status = document.querySelector('.form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Quote request from ' + (data.get('name') || ''));
    const body = [...data.entries()].map(([k,v]) => k + ': ' + v).join('%0D%0A');
    const email = document.getElementById('contact_email')?.textContent || 'Benslawnservices@yahoo.com';
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    if (status) {
      status.textContent = 'Opening your email app… If nothing happens, email us at ' + email;
    }
  });
}
