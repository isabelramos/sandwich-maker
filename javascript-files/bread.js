// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldSandwichMaker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"White": 0.50,
  	"Wheat": 0.50, 
    "Sourdough": 0.75, 
  	"Multi-Grain": 1.00,
  }

  // Augment the original object with another method
  oldSandwichMaker.getBreadName = function(name) {
    return breadPrices;
  }
  oldSandwichMaker.getBreadPrices = function(key) {
    return breadPrices[key];
  }

  // Return the new, augmented object with the new method on it
  return oldSandwichMaker;
})(SandwichMaker || {});