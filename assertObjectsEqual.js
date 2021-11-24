let val1 = "";
let val2 = "";
let objKeys1 = [];
let objKeys2 = [];
let retVal = true;

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

const eqObjects = function(object1, object2) {
// Returns true if both objects have identical keys with identical values.
// Otherwise, you get back a false!
    retVal = true;
 
    objKeys1 = Object.keys(object1);
    objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) {
        // Different lenghts, we're out of here.
        return false;
    }

   for(val1 of objKeys1){
        for (val2 of objKeys2){
            if ((Array.isArray(val1)) && (Array.isArray(val2))){
                retVal = eqArrays(val1, val2);
            }else
            if (val1 === val2){
                retVal = true;
            } else {
                retVal = false;
            }
        }
        return retVal;
    }
};

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
    console.log(`✅ Assertin Passed: ${inspect(expected)}` + " === " + `${inspect(actual)}`);
  } else
  {
    console.log(`🛑 Assertin Failed: ${inspect(expected)}` + " !== " + `${inspect(actual)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const ac = {a: "2", c: "3"};
assertObjectsEqual(ab, ac); // => false

module.exports = assertObjectsEqual;