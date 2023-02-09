const num=[1,2,[4,5]];
let[x,y,[m,n]]=num;
console.log(x,y,m,n);
//swaping variables
[x,y]=[y,x];
console.log(x, y, m, n);
[x, y,m,n] = [y, x,n,m];
console.log(x, y, m, n);
