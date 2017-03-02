// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"Cheddar": 0.90,
  	"American": 0.90, 
    "Provolone": 1.10, 
  	"Muenster": 1.00,
  }

  // Augment the original object with another method
  oldSandwichMaker.getCheeseName = function(name) {
    return cheesePrices;
  }
  oldSandwichMaker.getCheesePrices = function(key) {
    return cheesePrices[key];
  }

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});