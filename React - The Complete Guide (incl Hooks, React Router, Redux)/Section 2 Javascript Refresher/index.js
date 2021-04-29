/*
--Arrow Functions--
A)
function myFunc(){
    ...
}; //Issues with the 'this' keyword

B)
const myFnc = () => {
    ...
};

A)
const multiply = (number) => {
    return number * 2;
}

B)
const multiply = number => number * 2;
-can omit ()
-can omit {}
-can omit return statement

--Exports & Imports (Modules)--

-Default exports can have the name changed.
-person.js, export default person;
import person from './person.js'
import prs from './person.js'

-With named export, name is defined by export, and {} is used.
import { smth } from './utility.js'
import { smth as Smth } from './utility.js'

--Classes--

class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); //required when using parent class Human
        this.name = 'Klinton';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName(); >> 'Klinton'

--Classes, Properties & Methods--
-Properties-
ES6
constuctor() {
    this.myProperty = 'value';
}

ES7
myProperty = 'value';

-Methods-
ES6
myMethod(){...}

ES7
myMethod = () => {...}
//No problems with 'this' keyword

-Therefore-

class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Klinton';
    

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName(); >> 'Klinton'
-ES6/Babel was used

--Spread & Rest Operators--
...
-Spread- used to split up array elements OR object properties
const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5 }

-Rest- Used to merge a list of function arguments into an array.
-Then able to use array functions
function sortArgs(...args){
    return args.sort()
}

--Destructuring--
-Easily extract array elements or object properties and store them in variables
-Array Destructuring-
[a,b] = ['Hello', 'Klinton']

Object Destructuring
{name} = {name: 'Klinton', age: 34}
console.log(name) //'Klinton'
console.log(age) //Undefined

*/
