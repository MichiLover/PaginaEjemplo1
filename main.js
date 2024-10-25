document.addEventListener('DOMContentLoaded', function () {
    var casillas = document.querySelectorAll('.casilla');
  
    casillas.forEach(function (casilla) {
      casilla.addEventListener('click', function () {
        this.classList.toggle('casilla-clicked');
      });
    });
  });
  

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top-btn").classList.add("show");
    } else {
      document.getElementById("back-to-top-btn").classList.remove("show");
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  