document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (targetId && targetId !== '#') {
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

const yearSpan = document.createElement('span');
yearSpan.className = 'year-tag';
const footer = document.createElement('footer');
footer.style.textAlign = 'center';
footer.style.padding = '20px 0 40px';
footer.style.color = '#61708f';
footer.innerHTML = `© <span id="year"></span> Avery Taylor`;
document.querySelector('.page-shell').appendChild(footer);

document.getElementById('year').textContent = new Date().getFullYear();
