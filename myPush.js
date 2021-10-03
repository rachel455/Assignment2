//Without using the native “Array.prototype.push” method of JavaScript, 
//compose a function titled “myPush” that will take in an array of elements as well as an elementToAdd and 
//append that element to the end of the array.

// PUSH //
Array.prototype.myPush = function(...args){
    let arg_i = 0;
    let length = this.length;
    for(let i = length; i < length + args.length; i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};