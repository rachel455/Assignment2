//Without using the native “Object.keys()” method of JavaScript, 
//compose a function titled “grabKeys” that will take in an object and 
//return all of the keys of the key:value pairs of that object.

// KEYS //
Object.grabKeys = function(objectList) {
    let keysArray = []; // make an array
    for(let key in objectList){ // created for loop to loop through array
        key = keysArray.push(key); // returns an array of a given object's own enumerable property names
    }
    return keysArray; // returns an array of strings that represent all the enumerable properties of the given object
};

//Test function along with the native function //

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

console.log("grabKeys:")
console.log(Object.grabKeys(object1)); // expected output: Array ["a", "b", "c"]

console.log("keys:")
console.log(Object.keys(object1)); // expected output: Array ["a", "b", "c"]