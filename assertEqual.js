// FUNCTION IMPLEMENTATION
let actual ="", expected = "";

const assertEqual = function(actual, expected) {
//    console.log("In the function...", actual, expected);

  console.assert(actual === expected, "🛑 " + actual + " != " + expected);
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
assertEqual(1, 1);
