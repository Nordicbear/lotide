// FUNCTION IMPLEMENTATION
let actual ="", expected = "";
let values = [];

const assertEqual = function(actual, expected) {
  // console.assert(actual === expected, "🛑 " + actual + " != " + expected);
  if (actual === expected) {
      console.log("✅ Assertin Passed: " + expected + " === " + actual);
  } else
  {
    console.log("🛑 Assertin Failed: " + expected + " !== " + actual);
  }
}

const head = function(values) {
    return(values[0]);
}

// TEST CODE
assertEqual("The Cat", "The Cat");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
assertEqual(1, 1);

assertEqual(head(["Hi", "Bye", "Hello"]), "Hi");
assertEqual(head([5, 10, 15]), 10);