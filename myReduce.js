// REDUCE //
//finds sum of an array and can add values into array to add.

Array.prototype.myReduce = function(callbackFn, initial){
    let sum = initial || 0; //start the sum at 0
    for(let i = 0; i<this.length; i++){ //loop through array
        if(this[i]===undefined)continue; //array contains undefined value, continue to next
        sum = callbackFn(sum,this[i])// add elements in array
    }
    return sum; //return the sum
};
const arr = [1, 2, 3,4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 1 + 2 + 3 + 4
console.log(arr.myReduce(reducer));
// expected output: 10

// 15 + 1 + 2 + 3 + 4
console.log(arr.myReduce(reducer,15));
// expected output: 25
