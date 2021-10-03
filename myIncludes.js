//Without using the native “Array.prototype.includes” method of JavaScript, 
//compose a function titled “myIncludes” that will take in an array of elements 
//and indicate whether or not a target element is contained within the input array. 
//This returns a boolean.

// INCLUDES //
Array.prototype.myIncludes = function(includedElement, index) {
    for(let i = (index || 0); i < this.length; i++){
        if(this[i] === includedElement){
            return true;
        }
    }
    return false;
};