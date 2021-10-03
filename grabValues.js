//Without using the native “Object.values()” method of JavaScript, 
//compose a function titled “grabValues” that will take in an object and 
//return all of the values of the key:value pairs of that object.

// VALUES //
Object.grabValues = function(objectList) {
    let valuesArray = []; // make an array
    for (let value in objectList){ // created for loop to loop through array
        value = valuesArray.push(objectList[value]); // returns an array of a given object's own enumerable property values
    }
    return valuesArray; //returns an array containing the given object's own enumerable property values
};

//Test function along with the native function //

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

console.log("grabValues:")
console.log(Object.grabValues(object1));// expected output: Array ["somestring", 42, false]

console.log("values:")
console.log(Object.values(object1)); // expected output: Array ["somestring", 42, false]