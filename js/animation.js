function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior:'smooth'
  }); 
  document.querySelector('.navbar nav').classList.toggle('active', false);
} 

// SCROLL REVEAL + SKILL ANIMATION
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 50 && rect.bottom > 100;

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

window.dispatchEvent(new Event('scroll'));


// // SMOOTH SCROLLING

// let current = 0;
// let target = 0;
// let ease = 0.09;

// function getMaxScroll() {
//   return document.documentElement.scrollHeight - window.innerHeight;
// }

// window.addEventListener("wheel", (e) => {
//   target += e.deltaY;

//   // clamp target biar gak lewat batas
//   target = Math.max(0, Math.min(target, getMaxScroll()));
// });

// function smoothScroll() {
//   current += (target - current) * ease;
//   window.scrollTo(0, current);
//   requestAnimationFrame(smoothScroll);
// }

// smoothScroll();