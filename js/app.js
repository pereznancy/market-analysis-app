'use strict'

var trackClick = function(name, location) { //info will be pulled from array
  this.name = name;
  this.location = location;
  this.vote = 0;
}

//array of all the images w/name and location
//with new trackClick, it will send info to function above ^
var imagesArray = [
  new trackClick("bag", "images/bag.jpg"),
  new trackClick("banana", "images/banana.jpg"),
  new trackClick("boots", "images/boots.jpg"),
  new trackClick("chair", "images/chair.jpg"),
  new trackClick("cthulhu", "images/cthulhu.jpg"),
  new trackClick("dragon", "images/dragon.jpg"),
  new trackClick("pen", "images/pen.jpg"),
  new trackClick("scissors", "images/scissors.jpg"),
  new trackClick("shark", "images/shark.jpg"),
  new trackClick("sweep", "images/sweep.jpg"),
  new trackClick("unicorn", "images/unicorn.jpg"),
  new trackClick("usb", "images/usb.jpg"),
  new trackClick("watercan", "images/water_can.jpg"),
  new trackClick("wineglass", "images/wine_glass.jpg"),
];

//select a random picture from the array and store it in the variable
function getRandomPictures() {
  var chosen = [];  //array to hold the 3 pictures
  for (var index = 0; index <3; index++) { //only need to get up to 3 images
    chosen[index] = imagesArray[Math.floor(Math.random()*imagesArray.length)];
  }
  if (chosen[0] === chosen[1] || chosen[0] === chosen[2] || chosen[1] === chosen[2]) { //make sure no imposters aka duplicates aka
    var location = imagesArray[index].location;
    chosen = getRandomPictures(); //run through randomizer again to pick another random picture so no dupes
  }
  for (var newIndex = 0; newIndex < 3; newIndex++) {
    var firstImage = document.createElement("img");
    var sendImage = document.getElementById("images");
    firstImage.src = chosen[newIndex].location;
    sendImage.appendChild(firstImage);
  }
}

//event to add 3 images on load
window.addEventListener("load", getRandomPictures);
