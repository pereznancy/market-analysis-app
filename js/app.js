'use strict'


//array of all the images
var imagesArray = [
  ("bag", "images/bag.jpg"),
  ("banana", "images/banana.jpg"),
  ("boots", "images/boots.jpg"),
  ("chair", "images/chair.jpg"),
  ("cthulhu", "images/cthulhu.jpg"),
  ("dragon", "images/dragon.jpg"),
  ("pen", "images/pen.jpg"),
  ("scissors", "images/scissors.jpg"),
  ("shark", "images/shark.jpg"),
  ("sweep", "images/sweep.jpg"),
  ("unicorn", "images/unicorn.jpg"),
  ("usb", "images/usb.jpg"),
  ("watercan", "images/water_can.jpg"),
  ("wineglass", "images/wine_glass.jpg"),
];

//select a random picture from the array and store it in the variable
function getRandomPictures() {
  var chosen = [];  //array to hold the 3 pictures
  for (var index = 0; index <3; index++) { //only need to instantiate until we get 3 images
    chosen[index] = imagesArray[Math.floor(Math.random()*imagesArray.length)];
  }
  if (chosen[0] === chosen[1] || chosen[0] === chosen[2] || chosen[1] === chosen[2]) { //make sure no imposters aka duplicates
    console.log('matching picture: ', chosen);
    chosen = getRandomPictures(); //run through randomizer again to pick another random picture so no dupes
  } else { //no dupes found finally
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
