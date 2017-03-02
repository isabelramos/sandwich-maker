// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	"Lettuce": 0.15,
  	"Tomato": 0.20, 
    "Green Pepper": 0.55, 
  	"Spinach": 0.40,
    "Onion": 0.45
  }

  // Augment the original object with another method
  oldSandwichMaker.getVeggieName = function(name) {
    return veggiePrices;
  }
  oldSandwichMaker.getVeggiePrices = function(key) {
    return veggiePrices[key];
  }

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});