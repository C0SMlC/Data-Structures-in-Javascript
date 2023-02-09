'use strict'
const array=[1,2,3,4,5];
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}

// Arrays are declared in heap but the address is stored in the stack, and hence even though declarec as const 
//we can modify arrays, as we are only changing the data that in heap and not the address which is in stack