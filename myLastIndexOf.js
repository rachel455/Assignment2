//Without using the native “Array.prototype.indexOf” method of JavaScript, 
//compose a function titled “myIndexOf” that will take in an array of elements and 
//returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(includedElement, index){
    for(let i = this.length - 1; i >= (index || 0); i--){ // created for loop to loop through array
        if(this[i] === includedElement){ //find element in array
            return i; //eturns the last index at which a given element can be found in the array
        }
    }
    return -1; // return -1 if it is not present
};

//Test function along with the native function //

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log("myLastIndexOf:")
console.log(animals.myLastIndexOf('Dodo')); // expected output: 3
console.log(animals.myLastIndexOf('Tiger')); // expected output: 1

console.log("lastIndexOf:")
console.log(animals.lastIndexOf('Dodo')); // expected output: 3
console.log(animals.lastIndexOf('Tiger')); // expected output: 1