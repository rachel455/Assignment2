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

//test the function

const cs = [15,20,32,44,31,13];
const mjq = [8,9,20,34,60,66,79,86];
console.log("myEvery: ");
const isBelowThreshold = (currentValue) => currentValue < 40;
const isBelowThreshold2 = (currentValue) => currentValue < 100;
console.log(cs.myEvery(isBelowThreshold));
console.log(mjq.myEvery(isBelowThreshold2));
