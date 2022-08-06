//https://www.youtube.com/watch?v=_E96W6ivHng&ab_channel=DaveGray
//var-let-const

/* ===============global scope================ */
//1-we have access to the global scope variable in anywhere in the file
//2- global variable can not be access from the up 

//console.log(x); // output will be undefined;
var x = 1;
let y = 2;
const z = 3;


/* =============local scope================ */
/* 
Inside a local scope there is two scope 
1- block scope (inside of a curly braces)
2- funtion scope (inside of a function)
*/

//BLOCK SCOPE 
{
    let x = 2;
}

//FUNCTION SCOPE 
function functionScope() {
    //console.log('Inside a function called function scope')
    //nested block scope inside a function
    //nested blocks can be if statements, for loops, switch statements
    {
        let x = 4;
        //console.log(x);
    }
}
functionScope();


/*================== SUMMERY =====================*/

/* inside a funtion scope
var is a function scoped    
let and const is a block scoped */

//global scope

var a = 1;
let b = 2;
const c = 3;

console.log(`global: ${a}`);
console.log(`global: ${b}`);
console.log(`global: ${c}`);

function myFunc() {
    var a = 10;
    const b = 20;
    {
        var a = 55; //function scope (it can be accessed from anywhere in the function)
        const b = 99; //let and const is block scopeed 
        console.log(`block: ${a}`);
        console.log(`block: ${b}`);
        console.log(`block: ${c}`);
    }
    console.log(`function: ${a}`);
    console.log(`function: ${b}`);
    console.log(`function: ${c}`);
}

myFunc();






