console.log(null>0);   //false       // in first two comparisons
                                                    //  null is converted to 0                
console.log(null>=0);//true
console.log(null==0);//false

console.log(undefined>0);//false
console.log(undefined<0);//false               
console.log(undefined==0);//false
// *remember == and (>=,<=,>,<) behave differently with type conversions*

//strict equality operator
console.log("2"==2); //true    // type conversion happens string to number
console.log(2=="2");//true              first two are same thing
console.log("2"===2);//false  // no type conversion happens

//in most codes we avoid these type of confusing conversions