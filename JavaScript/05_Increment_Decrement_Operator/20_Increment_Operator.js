let a = 10;
let b = ++a;

console.log(a);
console.log(b);
///////////////////////////////////
let c = 11;
let d = c++;

console.log(c);
console.log(d);
////////////////////////////////////

let e = 10 ;
console.log( ++e + e); 
// 11 + 11 = 22

///////////////////////
let f = 5
console.log(++f + f + f++);
// 6 + 6 + 6 = 18 

//////////////////////////
let i = 1;
let result = i++ + ++i;
// 1 + 3 = 4
console.log(result,i );