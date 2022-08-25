<h1 align="center">var-let-const</h1>
<h3 align="left">1- var is a function scoped </h3>
<h3 align="left">2- let and const are block scoped</h3>
<h3 align="left">3- use const if you are not going to change the value</h3>
<h3 align="left">4- use let if you want to change the value later</h3>

<h1 align="center">Scopes in Javascript</h1>
<h2 align="center">Global Scope</h2>
- Global scoped variables can be accessed from anywhere down in the file. <br>
- Be carefull it can not be accessed from up where the variable has been declared.

<h2 align="center">Local Scope</h2>
-Function scope <br>
-Block scope <br>
<h3 align="left">Function Scope</h3>
-anything inside a function <br>
-var is a function scope means it can be accessed from anywhere inside the function even variable declared inside a block 
- var, let or const declared inside the function , can not be accessed outside the function. 
<h3 align="left">Block Scope</h3>
- anything inside a curly braces {} . block can be a if statement or loop or switch statement.<br>
- let and const are block scoped.
- we can not access globally, variables declared by let and const inside a block (we can access variables if variable declared by var)



