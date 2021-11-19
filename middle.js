const assertArraysEqual = require('./assertArraysEqual');

let first = 0;
let second = 0;

const middle = function(testArr) {
    const newArr = [];
    //first thing we should do is check for how many elements are in the array
    if (testArr.length < 3) {
        //if the array has 1 or 2 elemnts we return an empty array
        newArr.length = 0;
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

module.exports = middle;