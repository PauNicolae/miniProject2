// import * as mdb from 'mdb-ui-kit'; // lib
let linkEl = document.querySelectorAll('.nav-link');
console.log(linkEl);
let navbarEl = document.querySelector('.navbar');
// console.log(navbarEl);
window.addEventListener('scroll', function () {
   let currentScroll = window.pageYOffset;
   if (currentScroll >= 1100) {
      navbarEl.classList.add('changeColor');
      console.log(currentScroll)
    //   for (let i = 0; i <= linkEl.length; i++) {
    //      linkEl[i].classList.add('changeTextColor');
    //   }
      // linkEl.classList.add('changeTextColor');
   } else if (currentScroll < 1100) {
      navbarEl.classList.remove('changeColor');
    //   for (let i = 0; i <= linkEl.length; i++) {
    //     linkEl[i].classList.remove('changeTextColor');
    //  }
   }
});