"use strict";

const info = {
  firstname: "Pratik",
  surname: "Pendurkar",
  age: 20,
  rollno: 39,
  status: "Still Alive",
  hasdriverlicense: (age) => (age > 18 ? true : false),
};
// while destructing use the same names that were used in object itself
const{firstname,status}=info;
console.log(`${firstname} and ${status}`);
//To use new name, nameinobject:newname
const { firstname:name, status:fyi } = info;
console.log(`${name} and ${fyi}`);
//Assigning default values
// consider birthdate property which is not in object info, atleast not yet
// by default the vaule will be undefined

const{birthdate:bod=2002,rollno:no=[]}=info;
console.log(`${bod} and ${no}`);


//mutating objects and arrays

let a =10;
let b =20;
const obj= {
    a:100,
    b:200
};
console.log(a,b);
//Now lets say, if we want to assign a and b values of obj 

//{a,b}=obj;Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment,
// you might need to wrap the the whole assignment in parentheses.ts(2809)
({ a, b } = obj);
console.log(a,b);

