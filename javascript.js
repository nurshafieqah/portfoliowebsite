let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Fix: Use `querySelectorAll` for multiple sections
let navlinks = document.querySelectorAll('header nav a'); // Fix: Use `querySelectorAll` for multiple links

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // Adjusting for header height
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id'); // Fix: Use getAttribute('id') to fetch section id

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*='${id}']`).classList.add('active'); // Use template literals for proper string interpolation
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
