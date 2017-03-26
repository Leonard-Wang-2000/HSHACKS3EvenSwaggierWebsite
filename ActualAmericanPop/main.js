function sayThatWasEasy() {
  var thatWasEasy = new Audio("Bang.mp3");
  thatWasEasy.play();
}


$("#22").on("click", sayThatWasEasy);