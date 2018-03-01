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
function getRandomPictures() {
  var chosen = [];
  for (var index = 0; index <3; index++) {
    chosen[index] = imagesArray[Math.floor(Math.random()*imagesArray.length)];
  }
  if (chosen[0] === chosen[1] || chosen[0] === chosen[2] || chosen[1] === chosen[2]) {
    console.log('matching picture: ', chosen);
    chosen = getRandomPictures();
  } else {
    return chosen;
  }
}





// function getThreePictures() {
//   for (var index = 0; index < imagesArray.length; index++) {
//     var item = getRandomPicture;
//     document.getElementbyID("images").innerHTML = "'<img src='" + item + "'>" ;
//   }
// }
// getThreePictures();
