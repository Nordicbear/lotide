let arr1 = new Array(3);
let arr2 = new Array(3);

const eqArrays = function (arr1, arr2) {
    let retval = true;
    for (let i=0; i <= 2; i++) {
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 5]);