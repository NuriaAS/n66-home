const images = document.querySelectorAll('.animate');
const sections = document.querySelectorAll('section');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('show-on-scroll');
    } 
    else {
      entry.target.classList.remove('show-on-scroll');
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});

const header = document.querySelector('header');
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    header.classList.add("colorizeSection");
  } else {
    header.classList.remove("colorizeSection");
  }
};

const menuIcon = document.querySelector('.nav__mobile');
const menuMobile = document.querySelector('.nav__mobile__menu');

function showMobileMenu(e) {
  e.preventDefault();
  menuMobile.classList.toggle('showMobileMenu')
}
menuIcon.addEventListener('click', showMobileMenu)


const mobileSubmenu = document.querySelector('.mobile-colecciones');
const mobileSubmenuItems = document.querySelectorAll('.sub-menu-hidden');
function showMobileSubMenu(e) {
  e.preventDefault();
  mobileSubmenuItems.forEach(item => {
    item.classList.toggle('showMobileSubMenu');
  })
}
mobileSubmenu.addEventListener('click', showMobileSubMenu);



const desktopSubmenu = document.querySelector('.desktop-colecciones');
const ulDeskSub = document.querySelector('.nav-desktop__list__item__list')
function showDesktopSubMenu(e) {
  e.preventDefault();
  ulDeskSub.classList.toggle('showDesktopSubMenu')
}

desktopSubmenu.addEventListener('click', showDesktopSubMenu)



var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector(".myImg");
var imgs = document.querySelectorAll(".img-product");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
imgs.forEach(img => {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
