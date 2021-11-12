let actual ="", expected = "";
let val = "";
let retVal = undefined;
let srchVal = "";
let obj = {};
let objKeys = [];

const assertEqual = function(actual, expected) {
  // console.assert(actual === expected, "🛑 " + actual + " != " + expected);
  if (actual === expected) {
      console.log("✅ Assertin Passed: " + expected + " === " + actual);
  } else
  {
    console.log("🛑 Assertin Failed: " + expected + " !== " + actual);
  }
}

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

const findKeyByValue = function(obj, srchVal) {
    // Scan the object and return the first key which contains the given value. 
    // If no key with that given value is found, then return undefined.
    console.log("");
    objKeys = Object.keys(obj);

    for(val of objKeys){
        if (obj[val] == srchVal) {
 //         console.log("They match, match is ", val); // val IS THE KEY!!!
          retVal = val;
        }
    }
    return retVal;
}


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "documentary");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

