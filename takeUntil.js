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

const assertArraysEqual  = function (a1, a2) {
    if (eqArrays(a1, a2)) {
        console.log("✅ Assertion Passed: " + a1 + " === " + a2);
    } else
    {
        console.log("🛑 Assertion Failed: " + a1 + " !== " + a2);
    }
}

const takeUntil = function(array, callback) {
    const results = [];

    for (let item of array) {
         if (callback(item) === false) {
            results.push(item);
        }
        if (callback(item) === true) {
            return results;
        }
    }
    return results;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [4, 5, 4, -1, 5, 6];

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x < 0), [ 4, 5, 4]);

module.exports = takeUntil;