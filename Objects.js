'use strict'

const info={
    firstname:'Pratik',
    surname:'Pendurkar',
    age:20,
    rollno:39,
    status:'Still Alive',
    hasdriverlicense : age=>(age>18)? true:false
};

const info1={
    firstname:'Pratik',
    surname:'Pendurkar',
    age:20,
    rollno:39,
    status:'Still Alive',
    hasdriverlicense : age=>(age>18)? true:false
};

// console.log(info.hasdriverlicense());
// info['college']='PCE';
// console.log(info['age']);


// const objects = [info,info1];
// objects[1].firstname='Tanvi';
// console.log(objects[1]);

console.log(Object.keys(info1).at(0));
const array = ["firstname", "surname", "age", "rollno", "status", "hasdriverlicense"];
console.log(array.at(0));