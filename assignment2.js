// FOR EACH //
Array.prototype.myEach = function() {

};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

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
Array.prototype.myPush = function(...args){
    let arg_i = 0;
    let length = this.length; // uses length property to determine where to start inserting the given values
    for(let i = length; i < length + args.length; i++){ // created for loop to loop through array
        this[i] = args[arg_i]; // append values to an array
        arg_i++;
    }
    return this.length; // returns the new length of the array
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
