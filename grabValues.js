//Without using the native “Object.values()” method of JavaScript, 
//compose a function titled “grabValues” that will take in an object and 
//return all of the values of the key:value pairs of that object.

// VALUES //
Object.grabValues = function(objectList) {
    let valuesArray = [];
    for (let value in objectList){
        value = valuesArray.push(onjectList[value]);
    }
    return valuesArray;
};