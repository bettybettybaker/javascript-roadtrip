// Challenge:

// We’ve made a significant difference, but there are still too many sheep
// for the fragile Death Valley ecosystem. The Rangers would like you to
// implement the following new plan for population reduction:

// If the month is a multiple of 4, then find 75% of the sheep population.
// Log that value to the console in the format below. Then, remove that value
// from the total number of sheep.
// Otherwise, if the population is above 10000, find half of the sheep
// population. Log that value to the console in the format below. Then,
// remove that value from the total number of sheep.

// Use this format for logging sheep reduction:

// Removing <number> sheep from the population.
// Note: To complete the challenge, you only need to insert an if statement
// and an else if statement. You do not need to create an else statement at
// the bottom or change any of the provided code.


///////////////////////// SOLUTION /////////////////////////

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
  	removeNumSheep =  numSheep * .75;
    console.log("Removing " + removeNumSheep + " sheep from the population.");
    numSheep = numSheep *= .25;

  } else if (numSheep >= 10000) {
  	numSheep = numSheep / 2;
    console.log("Removing " + numSheep +  " sheep from the population." );
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
