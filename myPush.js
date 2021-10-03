//Without using the native “Array.prototype.push” method of JavaScript, 
//compose a function titled “myPush” that will take in an array of elements as well as an elementToAdd and 
//append that element to the end of the array.

// PUSH //
Array.prototype.myPush = function(...args){
    let arg_i = 0;
    let length = this.length; // uses length property to determine where to start inserting the given values
    for(let i = length; i < length + args.length; i++){ // created for loop to loop through array
        this[i] = args[arg_i]; // append values to an array
        arg_i++;
    }
    return this.length; // returns the new length of the array
};

//Test function along with the native function //

const animals = ['pigs', 'goats', 'sheep'];

console.log("myPush:")
const count = animals.myPush('cows');
console.log(count); // expected output: 4
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.myPush('chickens', 'cats', 'dogs');
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

console.log("push:")
const counts = animals.push('cows');
console.log(count); // expected output: 4
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push('chickens', 'cats', 'dogs');
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
