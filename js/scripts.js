var imageSlider = document.getElementById('imagesSlider');

var images = ["url('img/img1.jpeg')", "url('img/img2.jpeg')", "url('img/img3.jpeg')", "url('img/img4.jpeg')"];


  var counter = 0;

function carousel() {
  imageSlider.style.backgroundImage = images[counter];

  counter++;


  if (counter > 3) {
    counter = 0;
  }
  console.log("dorcas")
}
setInterval(carousel, 3000)
