//Without using the native “Array.prototype.indexOf” method of JavaScript, 
//compose a function titled “myIndexOf” that will take in an array of elements and 
//returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

// INDEXOF //
Array.prototype.myIndexOf = function(includedElement, index){
    for(let i = (index || 0); i < this.length; i++){ // created for loop to loop through array
        if(this[i] === includedElement){ //find element in array
            return i; // returns the first index at which a given element can be found in the array
        }
    }
    return -1; // return -1 if it is not present
};

//Test function along with the native function //

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log("myIndexOf:")
console.log(beasts.myIndexOf('bison')); // expected output: 1
// start from index 2
console.log(beasts.myIndexOf('bison', 2)); // expected output: 4
console.log(beasts.myIndexOf('giraffe')); // expected output: -1

console.log("indexOf:")
console.log(beasts.indexOf('bison')); // expected output: 1
// start from index 2
console.log(beasts.indexOf('bison', 2)); // expected output: 4
console.log(beasts.indexOf('giraffe')); // expected output: -1