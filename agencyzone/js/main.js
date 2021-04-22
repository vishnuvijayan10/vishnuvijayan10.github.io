let hamburger = document.getElementById('hamburger');
let navbar = document.querySelector('.navbar-nav');

 function toggleNavbar(){
     navbar.classList.toggle('active');
     this.classList.toggle('animate');
 }

hamburger.addEventListener('click',toggleNavbar);