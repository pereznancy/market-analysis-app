'use strict'

//array of all the images
var imagesArray = [
  'images/bag.jpg',
  'images/banana.jpg',
  'images/boots.jpg',
  'images/chair.jpg',
  'images/cthulhu.jpg',
  'images/dragon.jpg',
  'images/pen.jpg',
  'images/scissors.jpg',
  'images/shark.jpg',
  'images/sweep.jpg',
  'images/unicorn.jpg',
  'images/usb.jpg',
  'images/water_can.jpg',
  'images/wine_glass.jpg'
];

//select a random picture from the array and store it in the variable
var getRandomPicture = imagesArray[Math.floor(Math.random()*imagesArray.length)];
//use varible to send picture via inner.HTML for simplicity
function showPictures() {
  var pic = document.body.innerHTML = "<img src='" + getRandomPicture + "'>";
  pic
}
showPictures();

// document.getElementbyID("images").innerHTML = "<img src='" + getRandomPicture + "'>";
// document.getElementbyID("images").innerHTML = "<img src='" + getRandomPicture + "'>";

//
// function getThreePictures() {
//   var item = getRandomPicture;
//   var index = 1
//   while (index < 4) {
//
//   }
// }
//
// function getThreePictures() {
//   for (var index = 0; index < imagesArray.length; index++) {
//     var item = getRandomPicture;
//     document.getElementbyID("images").innerHTML = "'<img src='" + item + "'>" ;
//   }
// }
// getThreePictures();
