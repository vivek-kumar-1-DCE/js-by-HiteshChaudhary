//primitive data types uses stack memory,  non primitive data types uses heap memory-

let p1 = "rahul"
let p2 = p1  //here p2 get a copy of p1 value
console.log(p2);
p2="soni"
console.log(p1);
console.log(p2);
//by refrence   

let obj1 = {
    name: "vivek",
    rollNo:62,   
}

let obj2 = obj1
console.log(obj1.name);
obj2.name = "vikas"  //modifying obj2
console.log(obj1.name);//here obj2 is pointing to the same memory location as obj1 so any changes made through obj2 will reflect in obj1

