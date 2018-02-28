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

var getRandomPicture = imagesArray[Math.floor(Math.random()*imagesArray.length)];
;
//will display image on website
document.body.innerHTML= "<img src='" + getRandomPicture + "'>";

for (var index = 0; index < imagesArray.length; index++) {
  var item = getRandomItem(imagesArray);
  images[i].innerHTML = '<img src=' + imagesArray[i];
}
