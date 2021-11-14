// FUNCTION IMPLEMENTATION
let actual ="", expected = "";

//let arr1 = new Array(3);
//let arr2 = new Array(3);
let arr1 = [];
let arr2 = [];

const assertEqual = function(actual, expected) {
  // console.assert(actual === expected, "🛑 " + actual + " != " + expected);
  if (actual === expected) {
      console.log("✅ Assertin Passed: " + expected + " === " + actual);
  } else
  {
    console.log("🛑 Assertin Failed: " + expected + " !== " + actual);
  }
}

const eqArrays = function (arr1, arr2) {
    let retVal = true;
    if (arr1.length != arr2.length) {
      retVal = false;
    } else {
      retVal = true;
      for (let i=0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          retVal = false;
        }
      }
    }
    return retVal;
}

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [5, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);