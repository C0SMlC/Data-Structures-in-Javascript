"use strict";

// since or is true if both are false
// js engine will be going onto the second value
// since first value is flase itself
// that is as soon as true value is encountered excution stops
console.log(0 || 1); // OP => 1

//Exactly opposite case is with and short circuiting
// since or is true if both are true
// that is as soon as false value is encountered excution stops

console.log(0 && 1); // OP => 0

// Nullish Coaliasing Operator
// Nullish Coaliasing Operator only considers  NULL and UNDEFIEND as falsy values
// execution is same as OR Operator

console.log(0 ?? 1); // OP => 0

let num;

function isGreater10(num) {
  console.log("In Greater");
  return num > 10 ? true : fakse;
}

function isLesser10(num) {
  console.log("In Lesser");
  return num < 10 ? true : fakse;
}

isGreater10(20) || isLesser10(20);
