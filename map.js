const words = ['ground', 'control', 'to', 'major', 'tom'];
const words2 = ['ground', 'control', 't', 'major', 'tom'];

const eqArrays = function (arr1, arr2) {
  let retVal = true;
  if (arr1.length != arr2.length) {
    retVal = false;
  } else {
    retVal = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        retVal = false;
      }
    }
  }
  return retVal;
};

const assertArraysEqual = function (a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log(`✅ Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${a1} !== ${a2}`);
  }
};

// The second argument/parameter is expected to be a (callback) function
const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 'x']);
assertArraysEqual(map(words2, (word) => word[0]), ['g', 'c', 't', 'm', 't']);

module.exports = map;
