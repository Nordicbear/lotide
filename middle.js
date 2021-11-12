let arr1 = new Array();
let arr2 = new Array();

let first = 0;
let second = 0;
let newVal = 0;

const eqArrays = function (arr1, arr2) {
    let retval = true;

    if(arr1.length == arr2.length) {
        retval = false;
    } else {
        for (let i=0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                retval = false;
            }
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

const middle = function(testArr) {
    const newArr = [];
    //first thing we should do is check for how many elements are in the array
    if (testArr.length < 3) {
        //if the array has 1 or 2 elemnts we return an empty array
        newArr.lenth = 0;
      } else
    //now check if the array has an odd/even number of elements
    if ((testArr.length % 2) == 1) {
        // This is odd...
        //get the middle element
        first = Math.round((testArr.length - 1) / 2) ;
     
        //add the two middle elements to the new array
        newArr.push(testArr[first]);
        //return the new array
    } else {
        //find the middle elements
        //add the middle element to the new array
        //return the new array
        first = Math.round((testArr.length - 1) / 2) - 1;
        second = first + 1;

        newArr.push(testArr[first]);
        newArr.push(testArr[second]);
    }

    return newArr;
}

console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));