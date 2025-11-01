//primitive data type and non primitive(or refrence type) data types in javascript  according to how a datatype get stored in memory

//primitive data types :(call by value)
/* 
7 primitive data types in javascript
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol----> use to create unique identifiers
7. bigint
*/

/*
reference data types :(call by reference)
1. object
2. array
3. function
*/

//java script is a dynamically typed language means we dont have to specify the datatype of a variable while declaring it . The javascript engine automatically assigns a datatype based on the value assigned to the variable.
    //primitive data types examples
const id = Symbol('123')    //symbol datatype
console.log(typeof id)      //symbol
const anotherId = Symbol('123')
console.log(id === anotherId)  //false because symbol always create unique identifier

const BigInt = 9007199254741991n  //bigint datatype
console.log(typeof BigInt);         //bigint

//reference data types examples
    //array
    const heros = ['shaktiman', 'naagraj', 'doga']
    //object
    let myobj = {
        name: "ravi",   
        age: 24,}

    //function
    function myFunc(){
        console.log("hello world");
    }

    //datatye    

    console.log(typeof myFunc);
    console.log(typeof myobj);
