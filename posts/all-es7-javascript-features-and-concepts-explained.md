---
title: "All ES7 Javascript Features and Concepts Explained"
short_desc: "In this blog you can learn all the features of ES7 javascript"
date: "Sat Jun 16 2022"
source_img: "/img/post/aejface.jpg"
---

# All ES7 Javascript Features and Concepts Explained

In this blog you can learn all the features of ES7 javascript

## what is ES?

ES stands for ECMAScript. ECMAScript is a JavaScript standard meant to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International according to the document ECMA-262. ECMAScript is commonly used for client-side scripting on the World Wide Web, and it is increasingly being used for writing server applications and services using Node.js. [Know More](https://www.ecma-international.org/technical-committees/tc39/)

## All Versions of ES or ECMAScript

Javascript is constantly evolving. As a result, there are many new features getting added to it and also many version upgrades are being made to it. There are many versions of Javascript or ECMAScript.
**There stable versions are:**

- ES5
- ES6
- ES7
- Newer(Beta Versions)

## Feature - 1: UNICODE STANDARD VERSION 8 SUPPORT

- It will allow the use of smileys, a variables can be declared using unicode as character escapes.
- EXAMPLE:

```js
var u{102C0} = { u{102C0} : 2 };
return u{102C0};
```

## Feature - 2: BINARY, HEX AND OCTAL NUMBER

- hex — base 16 — starts with `0x`
- Oct — base 8 — starts with `0o`
- Binary — base 2 — starts with `0b`

```js
var decimalLit = 15;
var hexadecimalLit = 0xf;
var octalLit = 0o17;
var binaryLit = 0b1111;
console.log(decimalLit == hexadecimalLit);
console.log(decimalLit == octalLit);
console.log(decimalLit == binaryLit);
```

## Feature - 3: STRING TEMPLATE

- concatenating string using `+`, can now be done using ` ` `
  OLDER VERSION:

```js
var message =
	"The user " +
	user.firstName +
	"" +
	user.lastName +
	" cannot be " +
	action +
	"because " +
	validationError;
```

NEWER VERSION:

```js
var message = `The user ${user.firstName} ${user.lastName} cannot be
${action} because ${validationError}`;
```

**NOTE**:
The hard line-break between be and ${action} is because backtick strings are also “multiline literals.” This means that whitespace is preserved within the string, so the message above would appear on two lines. It would break after “be,” then display two spaces (because the code indents two spaces) before continuing.

## Feature - 4: VARIABLE DECLARATION

`var` declared variables could be reassigned, so we now have `let` keyword that don’t allow that. Rest all is same.

```js
var msg = "Howdy";
var msg = "Hello there"; // acceptable, just reassigns
```

On the other hand

```js
let message = `This is your message.`;
let message = `This is another message.`; // ERROR! can't redeclare the earlier declared variable message
```

## Feature - 5: CONST KEYWORD

Same as `final` in java and `const` in C/C++

```js
const message = `This is your message.`;
message = `This is your second message.`; // ERROR! can't reassign a const variable
```

## Feature - 6: BLOCK SCOPE

`var` declared variables were not blocked scope but function scoped. `let` and `const` declared variabled will be scoped in the block they are declared.

## Feature - 7: DESTRUCTURING ASSIGNMENT

- It breaks an array into its elements, keeping the original array unchanges. This process assignes the variables with items in the corresponding positions.
- EXAMPLE:

```js
let names = [“Ted”, “Jenni”, “Athen”];
let [ted, jenni, athen] = names;
console.log(ted, jenni, athen); // prints “Ted Jenni Athen”
```

```js
// SIMILAR TO THE FOLLOWING:
var ted = names[0];
var jenni = names[1];
var athen = names[2];
```

## Feature - 8: DESTRUCTURING IN OBJECTS

- EXAMPLES:

```js
var url = "http://www.newardassociates.com/#/speaking";
var parsedURL = /^(w+)://([^/]+)/(.*)$/.exec(url);
var [protocol, fullhost, fullpath] = parsedURL;
console.log(protocol); // “http”
```

```js
let point = { x: 2, y: 5 };
let { x, y } = point;
console.log(x, y); // prints 2, 5
```

```js
let point = { x: 2, y: 5 };
let { y, x } = point;
console.log(x, y); // prints 2, 5
```

```js
let { y: pty, x: ptx } = point;
console.log(ptx, pty); // prints 2, 5
```

- left-hand side indicating the name to match, and the right-hand side indicating the actual declared variable name:

```js
let rect = { lowerLeft: { x: 0, y: 0 }, upperRight: { x: 3, y: 4 } };
let {
	lowerLeft: { x: llx, y: lly },
	upperRight: { x: urx, y: ury },
} = rect;
console.log(llx, lly, urx, ury); // prints “0 0 3 4
```

- Tricks:
  - Overiding or adding using destructuring
    ```js
    let obj = { title: "", desc: "" };
    obj = { ...obj, ["title"]: "demo value" };
    ```
  - The above code was an example showing Overiding of a value in an object.
  - For adding a value however, it is farely easy, enter the value you have to add in the square brackets like so,
    ```js
    let obj = { title: "", desc: "" };
    obj = {
    	...obj,
    	["your value"]: "demo value",
    };
    ```

## Feature - 9: DESTRUCTURING OBJECT PRAMETERS IN A METHOD CALL

```js
let person = {
	firstName: "Ted",
	lastName: "Neward",
	age: 45,
	favoriteLanguages: ["ECMAScript", "Java", "C#", "Scala", "F#"],
};
```

```js
function displayDetails({ firstName, age }) {
	console.log(`${firstName} is ${age} years old`);
}
```

```js
displayDetails(person);
```

## Feature - 10: DEFAULT PARAMETER

Now we can provide the default values of the function variables just like C/C++

```js
let sayHello = function (message = "Hello world!") {
	console.log(message);
};
sayHello(); // prints "Hello world!"
sayHello("Howdy!"); // prints "Howdy!"
```

## Feature - 11: REST PARAMETERS TO A FUNCTION: PASSING A LIST OF ARGUMENTS

Historically, you might have done this by accessing the built-in `arguments` parameter that is silently constructed and passed to every function call:

IF THE VALUES PASSED IN THE EXISTING FUNCTION EXCEEDED THE DEFINED THEN THEY WERE ADDED TO THE `arguments`.
Those were accessed through:

```js
var args = Array.prototype.slice.call(arguments, <function-name>.length);
```

IN ES7 WE NOW HAVE JAVA STYLE SYNTAX TO CAPTURE A LIST OF VALUES
EXAMPLE:

```js
function greet(firstName, …args) {
    console.log("Hello",firstName);
    args.forEach(function(arg) { console.log(arg); });
}
greet("Ted");
greet("Ted", "Hope", "you", "like", "this!");
```

## Feature - 12: SPREAD PARAMETERS: OPPOSITE TO REST PARAMETERS

This destructurs an array into individual parts and simplest use case is to concatanate arrays.

```js
let arr1 = [0, 1, 2];
let arr2 = [...arr1, 3, 4, 5];
console.log(arr2); // prints 0,1,2,3,4,5
//IMPORTANT USECASE:
function printPerson(first, last, age) {
    console.log(first, last age);
}
let args = ["Ted", "Neward", 45];
printPerson(...args);
```

## Feature - 13: ARROW OPERATOR FOR THE FUNCTION

The keyword of `function` can now be droped using `=>` fat arrow operator.

```js
function(arg1, arg2){
    // something here
}
```

Example of a fat arrow function

```js
const functionNameHere = (param) => {
	console.log(param);
};

// if we have a single parameter in a function we can remove the paranthesis

const functionNameHere = (param) => {
	console.log(param);
};
```

**NOTE**: Also note that if the body of the arrow function is a single expression yielding a value, no explicit return is required. Instead, that single expression is implicitly returned to the arrow function’s caller. If, however, the body is more than one statement or expression, the curly brackets are mandatory, and any returned value must be sent back to the caller via the usual return syntax.

## Feature - 14: TO ITERATE OVER THE ARRAY

```js
let arr = ["janishar", "ali", "anwar"];
arr.map((eachElementInsideTheArray, indexOfEachElement) => {
	// Like a foreach loop
	// return is mandatory
	return eachElementInsideTheArray;
});
```

This blog is refered to [this blog check it out](https://afteracademy.com/blog/most-used-javascript-ecmascript-2015-es6-and-ecmascript-2016-es7-features-75682cd98596). If you want to know more this blog page will be updated.
