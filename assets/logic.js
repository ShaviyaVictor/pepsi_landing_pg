// swapping the images function
function imgSlider(anything) {
  document.querySelector('.pepsi').src = anything;
  // console.log("Yes, the function runs")
}

// background change function
function changeBgColor(color) {
  const sec = document.querySelector('.sec');
  sec.style.background = color;
  // alternatively
  // document.querySelector('.sec').style.background = color;
}

// function for the navbar toggle functionality
function toggleMenu() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
  console.log("Yes, it should work")
}

// function for the preloader
var loader = document.querySelector('#preloader');

window.addEventListener("load", function() {
  loader.style.display = 'none';
});