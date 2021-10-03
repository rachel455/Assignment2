// SOME //
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

Array.prototype.mySome = function(callbackFn) { //function mySome that returns true if it satisfies a condition in array once
    for(let i = 0; i<this.length;i++){ //loop through array
        if(this[i]===undefined)continue; //if undefined, skip and continue to next value
        if(callbackFn(this[i])===true){ //if array satisfies condtion return true otherwise false
            return true;// return true
        }
    }
    return false // return false
};
const arr = [44, 15, 3, 7, 5];
const even = (element) => element % 2 === 0;

console.log(arr.mySome(even));
// expected output: true
