// swapping the images function
function imgSlider(anything) {
  document.querySelector('.pepsi').src = anything;
  // console.log("Yes, the function runs")
}

// background change function
function changeBgColor(color) {
  const sec = document.querySelector('.sec');
  sec.style.background = color;
}