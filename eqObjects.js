let actual ="", expected = ""; // For the assertEqual function.
let val1 = "";
let val2 = "";
let objKeys1 = [];
let objKeys2 = [];
let retVal = true;

let arr1 = [];
let arr2 = [];

const assertEqual = function(actual, expected) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise, you get back a false!
const eqObjects = function(object1, object2) {
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); 

const bc = { a: "5", b: "6"};
assertEqual(eqObjects(ab, bc), false);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// Second set of tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;