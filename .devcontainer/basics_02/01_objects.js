// const arr = [1] 
// console.log(typeof arr);  //object 

//---------------object-------------

//-------------Symbol-------------
const mysum = Symbol("key1")


const myFirstObj = {
    name: "vivek",
    "Full Name": "vivek kuamr",
    age: 19,
    class: "cse6",
    // mysum: "myKey1",
    [mysum]: "mykey1"  //correct Syntax
}

// console.log(myFirstObj.name); //not a good practice we cannot print "full name" using this
// console.log(myFirstObj["Full Name"]); //use this instead ,we can print anything using this
// console.log(typeof age);//wrong will givw undefined
// console.log(typeof myFirstObj.age); //correct /number
// console.log(myFirstObj.mysum);
// console.log(typeof myFirstObj.mysum);//string
// console.log(myFirstObj[mysum]); //mykey1
// console.log(typeof myFirstObj[mysum]); //string
// console.log(myFirstObj);

// myFirstObj.class = "cse5"

// Object.freeze(myFirstObj); //after this we can not able to update our object

// myFirstObj.class = "cse1"  //this will not give an error but also not work
// console.log(myFirstObj);

// ++++++++functions+++++++++

myFirstObj.greetings = function(){
    console.log("hello ji");
}

// console.log(myFirstObj.greetings);
// console.log(myFirstObj.greetings());

myFirstObj.greetings2 = function(){
    console.log(`"hello, ${this.name}`);
}
// console.log(myFirstObj.greetings2);  this will be explained later
// console.log(myFirstObj.greetings2());   

