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


///////////////////////// PROBLEM /////////////////////////

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  <if statement goes here>

  <else if statement goes here>

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
