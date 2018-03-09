'use strict'

var trackClick = function(name, location) { //info will be pulled from array
  this.label = name;
  this.location = location;
  this.y = 0;
}

function addListener() {
  document.getElementById("images").addEventListener("click", newClicks)
}
//array of all the images w/name and location
//with new trackClick, it will send info to function above ^
var imagesArray = [];
if (localStorage.getItem("images") == null){
  imagesArray.push(
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
    new trackClick("wineglass", "images/wine_glass.jpg")
  );
} else {
  imagesArray = JSON.parse(localStorage.getItem("images"));
}

//to track clicks
var voteTracker = 0;

//select a random picture from the array and store it in the variable
function getRandomPictures() {
  var sendImage = document.getElementById("images");
  sendImage.innerHTML = "";
  var chosen = [];  //array to hold the 3 pictures
  for (var index = 0; index <3; index++) { //only need to get up to 3 images
    chosen[index] = imagesArray[Math.floor(Math.random()*imagesArray.length)];
  }
  if (chosen[0] === chosen[1] || chosen[0] === chosen[2] || chosen[1] === chosen[2]) { //make sure no imposters aka duplicates
    console.log(index);
    var location = imagesArray[index].location;
    getRandomPictures(); //run through randomizer again to pick another random picture so no dupes
  }else {
    for (var newIndex = 0; newIndex < 3; newIndex++) {
      var firstImage = document.createElement("img");
      firstImage.src = chosen[newIndex].location;
      sendImage.appendChild(firstImage);
    }
  }
}

//saves votes if clickedd
function newClicks(event) {
  if (event.target.tagName == "IMG") {
    var index = event.target.src.lastIndexOf("/");
    var imageLocation = "images/" + event.target.src.substring(index + 1);
    for (var indexClick = 0; indexClick < imagesArray.length; indexClick++) {
      if (imagesArray[indexClick].location.indexOf(imageLocation) != -1) {
        imagesArray[indexClick].y += 1;
        voteTracker += 1;
      }
    }
    if (voteTracker % 15 == 0) {
      showChart();
    }else {
      localStorage.setItem("images", JSON.stringify(imagesArray));
      document.getElementById("chartContainer").innerHTML = "";
      getRandomPictures();
    }
  }
}

//onload
window.addEventListener("load", getRandomPictures);
window.addEventListener("load", addListener);
