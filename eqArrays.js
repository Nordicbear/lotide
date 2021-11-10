// FUNCTION IMPLEMENTATION
let actual ="", expected = "";

let arr1 = new Array(3);
let arr2 = new Array(3);

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
    let retval = true;
    for (let i=0; i <= 2; i++) {
        if (arr1[i] !== arr2[i]) {
            retval = false;
        }
    }
    return retval;
}

// TEST CODE
//console.log(eqArrays([1, 2, 3], [3, 2, 1]));
//console.log(eqArrays([1, 2, 3], [1, 2, 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [5, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);