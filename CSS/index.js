
console.log("Your index.js file is loaded correctly!");
const header = document.getElementById("changeText");

var text = ["I'm an Inventor.", "I'm a UX/UI Designer.", "I'm an Adventurer.", "I'm a Coder.", "I'm an Interior Designer.", "I'm a Program Manager.",];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1500);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
