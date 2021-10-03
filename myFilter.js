// FILTER //
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Array.prototype.myFilter = function(callbackFn){
    let storage = []; // storage to store new values in array
    for(let i = 0; i<this.length;i++){ //loop through array
        if(this[i]=== undefined) continue; //skips through undefined values
        if(callbackFn(this[i])===true){ //if the values in the array match the argument, push it into the storage array
            storage.push(this[i])
        }
    }
    return storage;// return the array
};

const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = arr.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
