## What is Javascript ?

1. JavaScript is a versatile **Scripting and Programming language** primarily used to make websites interactive and dynamic.

## Scripting and Programming language means

- Scripting languages and programming languages are both used to write instructions that tell a computer what to do. But they differ in how they are executed and what they are used for.

## Scripting languages

**Execution**

    - Scripting languages are interpreted, which means they are executed line by line.

**Use**

- Scripting languages are often used for automation, configuration management, and prototyping.

**Ease of use**

- Scripting languages are generally easier to learn and faster to code than programming languages.

**Examples**

- JavaScript, PHP, Python, Node.js, and Ruby are all scripting languages.

## Programming languages

**Execution**

- Programming languages are compiled, which means they are translated into machine code before being executed.

**Use**

- Programming languages are often used for developing complex software applications.

**Ease of use:**

- Programming languages can have a steep learning curve.

**Examples**

- C, C++, and Java are all programming languages.

---

2.  It is a language that web browsers understand. When you visit a webpage, your browser can read and execute JavaScript code to create interactive features and functionality on the page.
3.                     Actions:
            Enables interactivity.
         Updates:
              Alters page without reloading.
         Events:
           Responds to user actions.
          Data:
            Fetches and sends info to server.

4.  JavaScript makes the web engaging, dynamic, and user-friendly.

---

    JavaScript is traditionally a synchronous, single-threaded programming language. However, with the introduction of Node.js, JavaScript now supports asynchronous programming, enabling it to handle non-blocking operations efficiently

    JavaScript is a high-level, interpreted, event-driven, and object-oriented programming language that supports key principles such as polymorphism, encapsulation, and inheritance. It is used for both client-side and server-side scripting. For server-side scripting, we use tools like Node.js. JavaScript allows developers to create interactive and dynamic web pages, enhancing the user experience by transforming static pages into engaging, interactive ones.

\*_JavaScript can be executed not only in web browsers but also on servers and any device equipped with a JavaScript engine. This versatility makes it possible to build a wide range of applications, including:_

- Frontend applications
- Backend applications
- Mobile applications
- Desktop applications
- Machine learning solutions
- Game development projects

**Some of the most popular websites and applications built using JavaScript include Facebook, Instagram, Discord, Uber, WhatsApp Desktop app, and Microsoft Teams.**

---

5. JavaScript can modify both the content (HTML) and the style (CSS) of a webpage. It can handle calculations, manipulate data, and ensure information is entered correctly.

6. It makes web pages dynamic, allowing them to change and respond to user actions in real-time. Unlike compiled languages, JavaScript is interpreted directly by your web browser. The browser’s built-in JavaScript engine takes care of this translation process, enabling the code to run seamlessly.

---

## NOTE

       **JavaScript and  Java are two different languages, each with its own purpose and style.**

\*_JavaScript is mainly used for making websites interactive, like adding
animations or forms that respond when you click. It works in your
web browser._

\*_Java on the other hand is often used for building the backend of websites, handling things like databases and servers._

## History of JavaScript

     1.JavaScript was originally named Mocha, then renamed to LiveScript, and finally JavaScript to capitalize on the popularity of Java at the time.

     2.JavaScript was created by *Brendan Eich* in 1995 while he was working at Netscape Communications Corporation.

     3.JavaScript is an interpreted language, meaning it is executed line by line.

ECMA-(European Computer Manufacturers Association (1997))

**ECMA International is a non-profit organization that develops standards in computer hardware, communications, and programming languages.**

## es-16 on going fot javascript

## Applications of JavaScript

- Node.js ,Express js
- React Native, Ionic
- Webpack,Parcel,Gulp

## JavaScript vs TypeScript

# JavaScript vs TypeScript

| **Feature**             | **JavaScript (JS)**                                     | **TypeScript (TS)**                                                                    |
| ----------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Definition**          | A dynamic, high-level scripting language.               | A statically typed superset of JavaScript.                                             |
| **Typing**              | Dynamically typed.                                      | Statically typed with optional type annotations.                                       |
| **Compilation**         | Interpreted by browsers.                                | Transpiles to JavaScript before execution.                                             |
| **Error Detection**     | Errors detected at runtime.                             | Errors caught at compile-time.                                                         |
| **Tooling Support**     | Basic tooling, less support for large-scale projects.   | Enhanced tooling support with features like IntelliSense.                              |
| **Learning Curve**      | Easier to learn for beginners.                          | Slightly steeper learning curve due to static typing.                                  |
| **Code Maintenance**    | Can be harder to maintain and debug in large codebases. | Easier to maintain and refactor due to static types.                                   |
| **Development Speed**   | Faster for small projects and prototyping.              | Potentially slower initial development but saves time in the long run with fewer bugs. |
| **Community and Usage** | Widely used, especially in web development.             | Growing rapidly, especially in large-scale applications.                               |
| **Example Usage**       | `var x = 10;`                                           | `let x: number = 10;`                                                                  |

---

## Where to Place JavaScript in Document(index.html)

### Where to Place JavaScript in an HTML Document

1. **Inline (on the elements)**
2. **Internal (inside the `<script>` tag)**
3. **External (linked via the `src` attribute in the `<script>` tag)**

---

## Ways to See the Output of JavaScript

1. **Console**
2. **Alert Dialog Box**
3. **HTML Content Manipulation**
4. **Document Write**
5. **Prompt Dialog Box**

# Key Features of JavaScript

## 1. Interactivity

- Enables dynamic content and user interactions.

## 2. Versatility

- Used for frontend, backend, and full-stack development.

## 3. Asynchronous Programming

- Supports promises, async/await, and callbacks for non-blocking operations.

## 4. Event-Driven Programming

- Responds to user actions like clicks, keypresses, and form submissions.

## 5. Rich Ecosystem

- Includes libraries and frameworks like React, Angular, Vue.js, and NPM packages.

## 6. Easy Integration

- Seamlessly integrates with HTML, CSS, and various APIs.

## 7. Multi-Paradigm Support

- Offers object-oriented and functional programming capabilities.

## 8. Cross-Browser Compatibility

- Works across all modern web browsers.

## 9. Rich APIs

- Provides Web APIs (DOM, Geolocation, Fetch) and integrates with third-party APIs.

## 10. Easy Learning Curve

- Beginner-friendly syntax with depth for advanced use.

## 11. Cross-Platform Development

- Creates web, mobile, desktop, and game applications.

## 12. Prototyping and Rapid Development

- Quick testing and iteration directly in browsers.

---

# Variables in JavaScript

Variables in JavaScript are containers used to store data values.

## Syntax for Declaring Variables

# JavaScript Variable Declaration: `var`, `let`, and `const`

JavaScript provides three keywords for declaring variables:

- `var`: Used in older versions of JavaScript.
- `let`: Used for block-scoped variables.
- `const`: Used for variables that cannot be reassigned.

## Examples

### 1. **Using `var`**

`var` is function-scoped and can be redeclared or updated. It is less commonly used in modern JavaScript.

```javascript
var name = "John";
console.log(name); // Output: John

// Redeclaring and updating with `var`
var name = "Doe";
console.log(name); // Output: Doe

// Hoisting with `var`
console.log(age); // Output: undefined (hoisted, but not initialized)
var age = 25;
```

### 2. **Using `let`**

`let` is block-scoped and cannot be redeclared in the same scope. It allows reassignment.

```javascript
let city = "New York";
console.log(city); // Output: New York

// Updating the value
city = "Los Angeles";
console.log(city); // Output: Los Angeles

// Block scope example
if (true) {
  let greeting = "Hello";
  console.log(greeting); // Output: Hello
}
// console.log(greeting); // Error: greeting is not defined
```

### 3. **Using `const`**

`const` is block-scoped and cannot be reassigned or redeclared. It must be initialized when declared.

```javascript
const country = "USA";
console.log(country); // Output: USA

// Attempting reassignment or redeclaration
// country = "Canada"; // Error: Assignment to constant variable
// const country = "Canada"; // Error: Identifier 'country' has already been declared

// Block scope with `const`
if (true) {
  const food = "Pizza";
  console.log(food); // Output: Pizza
}
// console.log(food); // Error: food is not defined

// Using `const` with objects or arrays (mutation allowed)
const person = { name: "Alice", age: 30 };
person.age = 31; // Allowed (mutating the object)
console.log(person); // Output: { name: "Alice", age: 31 }

// person = { name: "Bob" }; // Error: Assignment to constant variable
```

---

## Comparison Table

| Feature       | `var`                            | `let`                     | `const`                           |
| ------------- | -------------------------------- | ------------------------- | --------------------------------- |
| Scope         | Function                         | Block                     | Block                             |
| Redeclaration | Allowed                          | Not Allowed               | Not Allowed                       |
| Reassignment  | Allowed                          | Allowed                   | Not Allowed                       |
| Hoisting      | Yes (initialized as `undefined`) | Yes (not initialized)     | Yes (not initialized)             |
| Common Use    | Rare in modern JS                | For variables that change | For constants (unchanging values) |

---

# JavaScript Case Sensitivity

JavaScript is **case-sensitive**, meaning it treats uppercase and lowercase letters as different. This applies to variable names, function names, and keywords.

## Key Points

1. **Variable Names**:

   - Variable names are case-sensitive.
   - Example:

   ```javascript
   let myVariable = 10;
   let MyVariable = 20;

   console.log(myVariable); // Output: 10
   console.log(MyVariable); // Output: 20
   ```

2. **Function Names**:

   - Function names must match exactly, including case.
   - Example:

   ```javascript
   function myFunction() {
     console.log("This is myFunction.");
   }

   function MyFunction() {
     console.log("This is MyFunction.");
   }

   myFunction(); // Output: This is myFunction.
   MyFunction(); // Output: This is MyFunction.
   ```

3. **Object Properties**:

   - Object property names are case-sensitive.
   - Example:

   ```javascript
   const person = {
     name: "Alice",
     Name: "Bob",
   };

   console.log(person.name); // Output: Alice
   console.log(person.Name); // Output: Bob
   ```

4. **Keywords**:

   - JavaScript keywords are case-sensitive.
   - Example:

   ```javascript
   let for = 10; // Error: Unexpected token 'for'
   let For = 10; // Allowed (not a keyword)
   ```

5. **Built-in Objects and Methods**:

   - JavaScript built-in objects and methods must use the correct case.
   - Example:

   ```javascript
   console.log(Math.PI); // Output: 3.141592653589793
   console.log(Math.pi); // Output: undefined
   ```

6. **Event Names**:

   - Event names are also case-sensitive.
   - Example:

   ```javascript
   document.addEventListener("click", function () {
     console.log("Clicked!");
   });

   document.addEventListener("Click", function () {
     console.log("This won't work!");
   });
   ```

---

## Common Mistakes

1. **Confusing Variable Names**:

   - Using the wrong case will cause an error.

   ```javascript
   let myData = 100;
   console.log(mydata); // Error: mydata is not defined
   ```

2. **Incorrect Built-in Names**:

   - Using the wrong case for built-in objects or methods.

   ```javascript
   console.log(Math.pi); // Output: undefined (should be Math.PI)
   ```

3. **Function Name Mismatch**:

   - Function calls must match the exact name and case.

   ```javascript
   function myFunc() {
     console.log("Hello!");
   }

   myfunc(); // Error: myfunc is not defined
   ```

---

## Best Practices

- **Be Consistent**:
  Use the same naming style (e.g., camelCase) for variables and functions.

- **Check Built-in Names**:
  Refer to documentation for correct capitalization of built-in objects and methods.

- **Avoid Reserved Words**:
  Do not use keywords or similar names (e.g., `for` vs `For`).

---

## JavaScript's case sensitivity can lead to errors if you're not careful. Always double-check variable names and built-in methods to ensure they match exactly.

# Naming Conventions in Programming

Apart from the strict rules of programming languages, there are also **conventions**. These are widely accepted standards followed by most developers to maintain consistency and readability in code.

Naming conventions are especially important as programmers need to name various entities, such as variables, functions, classes, methods, and interfaces.

Over the years, developers have adopted different case types for naming. The most popular ones are:

- **Camel Case**
- **Snake Case**
- **Kebab Case**
- **Pascal Case**

## Naming Case Examples

### Camel Case

- Starts with a lowercase letter.
- Each subsequent word starts with an uppercase letter.

Examples:

```javascript
firstName;
lastName;
userAccount;
```

### Snake Case

- All letters are lowercase.
- Words are separated by underscores (`_`).

Examples:

```javascript
first_name;
last_name;
user_account;
```

### Kebab Case

- All letters are lowercase.
- Words are separated by hyphens (`-`).

Examples:

```javascript
first - name;
last - name;
user - account;
```

### Pascal Case

- Each word starts with an uppercase letter.

Examples:

```javascript
FirstName;
LastName;
UserAccount;
```

---

Using consistent naming conventions improves code readability and helps teams collaborate effectively.

---

Data type
primitive types
non primitive types

conversion to one data to other data types
type conversion(explicit conversion)
type corieion(implicit conversion)

operator
unary operator
arthmatic operator
bitwise operator
comparision/relational operator
logical operator
conditional operator
assignment/compound operator

---

control statement
decisions control statement - if - if else - nested if else

iteration/loop/repeat control statement - while loop,do while loop,for loop, - foreach loop,map,filter,reduce,for in,for of
switch control statement

break ,continue

---

stack and heap memory management

function
-- type of function
-- way to write function

scope and hositing
return keyword
execution context and call stack in js
higher order function and callback function
settimeout and setinterval
evnet loop
closers and lexical scope

this keyword

what is call,bind,apply

--
array destrucing object destructuring

user defined function
-- default parameters function
arrguments object function
rest operator
spread operator

iife

---

string
and string methods

array
array methods
multidimensional array
shallow copy deep copy

object
object methods

Math object
math methods

Date object
date methods

---

BOM
and BOM methods

---

DOM
DOM methods and properties

--
event
adding event in different way
event propogation
event delegation

what is api
xmlHttpRequest,
how to handle asynchronous task and synchronous
what is callback hell
promises
fetch
asyn and await
error handling
optional chaining
exports and imports

oop concept support in js

---

https://www.freecodecamp.org/news/programming-naming-conventions-explained/

---

https://github.com/anil-sidhu/JavaScript-100-objective-based-questions

---

https://github.com/sadanandpai

---

https://api.github.com/
