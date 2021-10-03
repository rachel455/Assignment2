//FOR EACH //
Array.prototype.myEach = function(callbackFn){
  for(let i = 0; i < this.length;i++){
    if(this[i]===undefined)continue;
    //element
    //element,index
    //element,index,Array
    callbackFn(this[i],i,this);
  }
};

const arr = ['a','b','c'];
arr.myEach(element => console.log(element)); //outputs
//a
//b
//c
