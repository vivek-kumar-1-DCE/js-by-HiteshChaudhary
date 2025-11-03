//in last we studied about string literals 

//in this lecture we will study singletone object

const tinderUser = new Object()  //singleton object

// console.log(tinderUser);


tinderUser.id = "123abc"
tinderUser.name = "vivek"
tinderUser.loggedIn = false


// console.log(tinderUser);

const user = {
    userid: "abc",
    username: {
        userfullName: {
            name: "vivek",
            surname: "kumar"
        }


    }
}

// console.log(user.username);

// merger of two objects

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 2: "b", 3: "b" }
const obj3 = { 4: "a", 5: ".b" }

const obj5 = { obj1, obj2, obj3 }   //this will create a obj5 in which object 1,2,3 are present as an object itself
// console.log(obj5);


//use this for merger  
const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);      //target ,src1,src2,.....  //returns a object

//spred
const obj6 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj6);

//array of objects
const arr = [
    {
        id: "1",
        email: "v@gamil.com",

    },
    { id: "2", email: "c@gmail.com" }
]

// console.log(arr[0].id);

// console.log(Object.keys(tinderUser)); //this will give an array of keys from tinder.. object
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //this will give a nested array of keyvalue array

console.log(tinderUser.hasOwnProperty("name"));



