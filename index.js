// import * as mdb from 'mdb-ui-kit'; // lib
let linkEl = document.querySelectorAll('.nav-link');
//console.log(linkEl);
let navbarEl = document.querySelector('.navbar');
// console.log(navbarEl);
window.addEventListener('scroll', function () {
   let currentScroll = window.pageYOffset;
   if (currentScroll >= 100) {
      navbarEl.classList.add('changeColor');
      console.log(currentScroll)
   
   } else if (currentScroll < 100) {
      navbarEl.classList.remove('changeColor');
  
   }
});