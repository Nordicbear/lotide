// FUNCTION IMPLEMENTATION
let actual ="", expected = "";

const assertEqual = function(actual, expected) {
  // console.assert(actual === expected, "🛑 " + actual + " != " + expected);
  if (actual === expected) {
    console.log("✅ Assertin Passed: " + expected + " === " + actual);
  } else
  {
    console.log("🛑 Assertin Failed: " + expected + " !== " + actual);
  }
}

/*
// TEST CODE
assertEqual("The Cat", "The Cat");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
assertEqual(1, 1);
*/
module.exports = assertEqual;
