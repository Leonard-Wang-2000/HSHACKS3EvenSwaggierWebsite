function sayThatWasEasy() {
  var thatWasEasy = new Audio("Bang.mp3");
  thatWasEasy.play();
}


$("#Bang").on("click", sayThatWasEasy);