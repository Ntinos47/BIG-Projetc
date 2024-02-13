$(document).ready(function() { 

    $('.slick-carousel').slick({
      prevArrow: '.arrow_prev',
      nextArrow: '.arrow_next',
      infinite: true,

      autoplay: true,
      autoplaySpeed: 1800,
      speed: 1300,
    });

});


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function carouselFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 52;
}
function artFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 280;
}