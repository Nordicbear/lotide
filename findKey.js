let actual ="", expected = "";

const assertEqual = function(actual, expected) {
  // console.assert(actual === expected, "🛑 " + actual + " != " + expected);
  if (actual === expected) {
      console.log("✅ Assertin Passed: " + expected + " === " + actual);
  } else
  {
    console.log("🛑 Assertin Failed: " + expected + " !== " + actual);
  }
}


const findKey = function(obj, callback) {
    // Scan the object and return the first key which contains the given value. 
    // If no key with that given value is found, then return undefined.
    let retVal = undefined;

    objKeys = Object.keys(obj);

    for (let item of objKeys) {
//        console.log("obj is ", obj[item], ", item is ", item);
//        console.log("The callback is ", callback(obj[item]));
        if (callback(obj[item]) === true) {
            retVal = item;
            break;
        }
    }
    return retVal;

}

assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 1), "Blue Hill");

assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), "noma");

  assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3), "Akaleri");

  assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 4), "Akaleri");
