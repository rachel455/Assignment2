//Without using the native “Array.prototype.includes” method of JavaScript, 
//compose a function titled “myIncludes” that will take in an array of elements 
//and indicate whether or not a target element is contained within the input array. 
//This returns a boolean.

// INCLUDES //
Array.prototype.myIncludes = function(includedElement, index) {
    for(let i = (index || 0); i < this.length; i++){ // created for loop to loop through array
        if(this[i] === includedElement){ //determine whether an array includes a certain value among its entries
            return true; //return boolean true if value is in array
        }
    }
    return false; //return boolean false if value is NOT in array
};

//Test function along with the native function //

const array1 = [1, 2, 3];
const pets = ['cat', 'dog', 'bat'];

console.log("myIncludes:")
console.log(array1.myIncludes(2)); // expected output: true
console.log(pets.myIncludes('cat')); // expected output: true
console.log(pets.myIncludes('at')); // expected output: false

console.log("includes:")
console.log(array1.includes(2)); // expected output: true
console.log(pets.includes('cat')); // expected output: true
console.log(pets.includes('at')); // expected output: false