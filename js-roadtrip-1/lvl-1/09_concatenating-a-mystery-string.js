// Challenge:

// Use the + operator to concatenate the following words and numbers.
// All values need to be separated by a space:
//          "eight"
//           5
//          "six"
//          "two"
//          3
//          7

// The resulting string output should be: "eight 5 six two 3 7"

///////////////////////// Solution /////////////////////////

"eight " + 5 + " six " + "two " + 3 + " 7"

// pay attention to the white space
// "eight " has a space within the string because the integer 5
// will not add any spaces.
// " six " needed extra spaces at the beginning and end of the string
// "two " required one at the end
// 3 evaluates as an integer and will not add any spaces to the string
// 7 was changed to " 7"
// This is because if it were to be left and integer, the console would
// evaluate 3 + 7 and add the result to the string
// Since we want it to appear in a specific context and not evaluate as
// an expression, we change it to a string and add a space where needed
