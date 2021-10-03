// MAP //
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Array.prototype.myMap = function(callbackFn) {
    let answer = [];
    for(let i = 0;i < this.length;i++){ //loop through array
        if(this[i]=== undefined) continue; //if array contains undefinee value continue
        answer.push(callbackFn(this[i])) //return the values to answer,index,and array
    }
    return answer; // returns answer array
};

const arr = [1, 4, 9, 16];

const map1 = arr.myMap(x => x * 2);
const map2 = arr.myMap(x => x + 15);
console.log(map1);
console.log(map2);
