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
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

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
