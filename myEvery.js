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
