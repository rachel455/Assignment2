// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0;i <this.length;i++){
        if(this[i]=== undefined) continue;
        //element
        //element,index
        //element,index,array
        callbackFn(this[i],i,this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    let answer = [];
    for(let i = 0;i < this.length;i++){ //loop through array
        if(this[i]=== undefined) continue; //if array contains undefinee value continue
        answer.push(callbackFn(this[i])) //return the values to answer,index,and array
    }
    return answer; // returns answer array
};

// FILTER //
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

// SOME //
Array.prototype.mySome = function(callbackFn) { //function mySome that returns true if it satisfies a condition in array once
    for(let i = 0; i<this.length;i++){ //loop through array
        if(this[i]===undefined)continue; //if undefined, skip and continue to next value
        if(callbackFn(this[i])===true){ //if array satisfies condtion return true otherwise false
            return true;// return true
        }
    }
    return false // return false
};

//EVERY//
Array.prototype.myEvery = function(callbackFn){ //function for myEvery
    for(let i = 0; i<this.length;i++){//loop through array
      if(this[i]===undefined)continue;//if there is an undefined space in array, skip and continue to next value
      if(!callbackFn(this[i])){ //if the array contains a value that does not match condition
        return false; //return false
      }
    }
    return true;//return true
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initial){
    let sum = initial || 0; //start the sum at 0
    for(let i = 0; i<this.length; i++){ //loop through array
        if(this[i]===undefined)continue; //array contains undefined value, continue to next
        sum = callbackFn(sum,this[i])// add elements in array
    }
    return sum; //return the sum
};

// INCLUDES //
Array.prototype.myIncludes = function(includedElement, index) {
    for(let i = (index || 0); i < this.length; i++){ // created for loop to loop through array
        if(this[i] === includedElement){ //determine whether an array includes a certain value among its entries
            return true; //return boolean true if value is in array
        }
    }
    return false; //return boolean false if value is NOT in array
};

// INDEXOF //
Array.prototype.myIndexOf = function(includedElement, index) {
    for(let i = (index || 0); i < this.length; i++){ // created for loop to loop through array
        if(this[i] === includedElement){ //find element in array
            return i; // returns the first index at which a given element can be found in the array
        }
    }
    return -1; // return -1 if it is not present
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length; // uses length property to determine where to start inserting the given values
    for(let i = length; i < length + args.length; i++){ // created for loop to loop through array
        this[i] = args[arg_i]; // append values to an array
        arg_i++;
    }
    return this.length; // returns the new length of the array
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(includedElement, index) {
    for(let i = this.length - 1; i >= (index || 0); i--){ // created for loop to loop through array
        if(this[i] === includedElement){ //find element in array
            return i; //eturns the last index at which a given element can be found in the array
        }
    }
    return -1; // return -1 if it is not present
};

// KEYS //
Object.grabKeys = function(objectList) {
    let keysArray = []; // make an array
    for(let key in objectList){ // created for loop to loop through array
        key = keysArray.push(key); // returns an array of a given object's own enumerable property names
    }
    return keysArray; // returns an array of strings that represent all the enumerable properties of the given object
};

// VALUES //
Object.grabValues = function(objectList) {
    let valuesArray = []; // make an array
    for (let value in objectList){ // created for loop to loop through array
        value = valuesArray.push(objectList[value]); // returns an array of a given object's own enumerable property values
    }
    return valuesArray; //returns an array containing the given object's own enumerable property values
};
