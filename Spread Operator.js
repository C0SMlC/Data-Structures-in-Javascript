//Consider an array
const array1=[1,2,3,4];
const array2=[5,6,7,8,9];
// Now lets cosnider we want to concate the array
// one way to do it is this
console.log(array1.concat(array2));
//but it does not modifies the first array
// it just concates two array for the sake of result
// to actually combines two array we gotta use the spread operator

const array3=[...array1,...array2,10,11,12];
console.log(array3)