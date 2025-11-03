const alpha = ["A", "B", "C", "D"]
const num = [1,2,3,4]

// alpha.push(num)  //push an array as an elemnt
// console.log(alpha);  
// console.log(alpha[4][0]);


//concat
 const newarr = alpha.concat(num)     //.concat gives new array ,doesn't modify existing array or returns a new array

// console.log(newarr);
// console.log()

//spred

// const newarrr = [...alpha,...num]  //in concat we can only merge two array ,but here we can merde multiple arrays
// console.log(newarrr);

// const complex_array = [1,2,3,[4,5],6,[7,[8,9]],0]
// const simplified_array = complex_array.flat(Infinity)   //.flat(number of folds/depth)   ,returns a new simplified array
// console.log(simplified_array);
// console.log("complex",complex_array);

// ++++++++++++another data type to array+++++++++++++++++++++
// .isArray and from

// console.log(Array.isArray("vivek"));
// console.log(Array.from("vivek"));

//interesting case 
// console.log(Array.from({name : "vivek"})); //this wiil give a empty array ,we have to specify that what should we use ,key or value
//  let score1 = 100;
//  let score2 = 200;
//  let score3 = 300;

//  console.log(Array.of(score1, score2, score3));  //in  .of(here we can pass any element and array itself)
 const a1 = [1,2,3]
 const a2  = [4,5,6]
 const a3 = [7,8,9]
 console.log(Array.of(a1,a2,a3));


