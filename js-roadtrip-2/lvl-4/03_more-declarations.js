// Challenge:

// Build a function declaration called maxOf2 that takes in two
// numbers and returns the greater value. Be careful to think
// about the possibility of equality as well and return one of
// the numbers.

///////////////////////// SOLUTION /////////////////////////

function maxOf2(a, b) {
  if (a > b){
  return a;
  } else if (a < b){
  return b;
  } else {
  return a && b;
  }
}
