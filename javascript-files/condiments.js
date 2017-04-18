// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
  	"Mayonnaise": 0.15,
  	"Mustard": 0.15, 
    "Oil": 0.10, 
  	"Vinegar": 0.10,
  }

  // Augment the original object with another method
  oldSandwichMaker.getCondimentName = function(name) {
    return condimentPrices;
  }
  oldSandwichMaker.getCondimentPrices = function(key) {
    return condimentPrices[key];
  }

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});