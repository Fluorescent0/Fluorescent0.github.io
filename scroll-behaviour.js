window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("hero").style.fontSize = "15px";
  } else {
    document.getElementById("hero").style.fontSize = "30px";
  }
}// JavaScript Document
