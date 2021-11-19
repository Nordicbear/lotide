const assertEqual = require('./assertEqual');

let arr1 = [];
let arr2 = [];

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

/*
// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [5, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
*/
module.exports = eqArrays;