//------------1. var Keyword
var x; //declaration
x=5; //initialization
var x=10; // declaration+initialization
var x=100, y=50; //multiple variables

//output is displayed in webpage
//document.write("x is",x); // document is object and write() is method of object
//output displayd in console tab of web page
console.log(x);

//---------2. let keyword 
// similar to var but let is block scoped and var is function scoped
console.log("a is: ",a); //outout is undefined for var keyword and output for let keyword - Uncaught ReferenceError: Cannot access 'a' before initialization
var a=90; 
//let a=100;
console.log("a is: ",a);


//-------------3. const keyword
const q=123;
console.log("q is: ",q);
//q=80; // incorrect because q is constant
console.log("q is: ",q); //Uncaught TypeError: Assignment to constant variable.

//------Data type
let p=100;
console.log(typeof(p));

let k=100.09;
console.log(typeof(k));

let r="Krishna";
console.log(typeof(r));

let i=false;
console.log(typeof(i));

let s=null;
console.log(typeof(s));

let h=undefined;
console.log(typeof(h));

