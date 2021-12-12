"use strict";

window.onload = somethingClever;

function somethingClever() {




 var thisTime = new Date();
  var sign = document.getElementById("openSign");
  var thisDay = (thisTime.getDay());
  var thisHours = (thisTime.getHours()) + (thisTime.getMinutes());
 
 


if (thisDay === 6 && thisHours >= 1000 && thisHours <= 1630) {
	sign.innerHTML = "<img src='Other/1.jpg' alt='Open!' >";
}else if (thisDay !== 6 && thisHours >= 1100 && thisHours <=1630) {
	sign.innerHTML = "<img src='Other/1.jpg' alt='Open!' >";
} else {
	sign.innerHTML = "<img src='Other/4.jpg' alt='Closed!' >";
 }

}