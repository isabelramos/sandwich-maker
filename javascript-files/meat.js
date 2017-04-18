// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"Ham": 0.90,
  	"Turkey": 0.90, 
    "Capicola": 1.10, 
  	"Salami": 1.00,
  	"Pepperoni": 1.10,
  	"Bacon": 1.50
  }

  // Augment the original object with another method
  oldSandwichMaker.getMeatName = function(name) {
    return meatPrices;
  }
  oldSandwichMaker.getMeatPrices = function(key) {
    return meatPrices[key];
  }

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});