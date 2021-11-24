let arr1 = new Array();
let arr2 = new Array();

let removeWord = "lighthouse";
const newWords = [];
const words = ["hello", "world", "lighthouse"];

const eqArrays = function (arr1, arr2) {
    let retval = true;
    for (let i=0; i <= arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            retval = false;
        }
    }
    return retval;
}

const assertArraysEqual  = function (a1, a2) {
    if (eqArrays(a1, a2)) {
        console.log("✅ Assertion Passed: " + a1 + " === " + a2);
    } else
    {
        console.log("🛑 Assertion Failed: " + a1 + " !== " + a2);
    }
}

const without = function (words, removeWord) {
    for (let i=0; i < 2; i++) {
        if (words[i] != removeWord) {
//            console.log("words[i] is ", words[i], " removeword is ", removeWord);
            newWords.push(words[i]);
        }
 //       console.log(newWords);
    }
    return newWords;
}

//assertArraysEqual([1, 2, 3], [1, 2, 3]);
//assertArraysEqual([1, 2, 3], [1, 2, 5]);

//console.log(without(words, ["lighthouse"]));
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);

module.exports = without;