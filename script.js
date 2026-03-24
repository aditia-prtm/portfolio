
// script.js
function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});} 
function toggleMenu(){document.querySelector('.navbar nav').classList.toggle('active');}

// SCROLL REVEAL + SKILL ANIMATION
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 100 && rect.bottom > 100;

    if (inView) {
      el.classList.add('active');

      // animate skill bars
      if (el.id === 'skills') {
        document.querySelectorAll('.bar div').forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
      }
    } else {
      // REMOVE supaya bisa animasi ulang
      el.classList.remove('active');

      // reset skill bar
      if (el.id === 'skills') {
        document.querySelectorAll('.bar div').forEach(bar => {
          bar.style.width = 0;
        });
      }
    }
  });
});

// trigger awal biar langsung ke-check
window.dispatchEvent(new Event('scroll'));

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent!');
});
