console.log('i am here')
// syntax ,declaring variables, data type

// var ,let , const
var variableName
var a
var b
var tentabc

let test

const cd = 1
// 8 Data types

//1. number=(1,2,3,4,)
let num = 2
const secNum = 10
console.log(num, typeof num)

//2. string
let str = `hi this is my test`
const str1 = `2`

console.log(str1, typeof str1)

console.log(str, typeof str)

// 3.bollean
let bool = true
let bool2 = false
console.log(bool, typeof bool)

//4. undefined 

let notDef;
console.log(typeof  notDef)
//5.  null 
let abc= null;
console.log(typeof abc);


//7. object
let student1 ={
    name: "pranshant",
    age:2,
    rollno:33,
    ispresent :false
}
console.log(student1, typeof student1)
console.log(student1.name, typeof student1.name)
console.log(student1.age, typeof student1.age)


//arrayyy
 let newArr =[1,2,3,4,5]
 let student =[`ram`,`shyam`,`hari`,`rita`,`gita`]
 console.log(student)
 let data=[1,`str`,true,false,-99]


 let newArObj =[student1, {
    test: `124`

 } , true, false,{

data:123

 }
]
console.log(typeof newArObj)


let num1=10;
let num2 =20;


const sum=num1 + num2;
console.log(`sum`, sum);

const sub=num1 - num2;
console.log(`sub`, sub);

const mul=num1 * num2;
console.log(`mul`, mul); 

const div =num1 / num2;
console.log(`div`, div);

const rem=num2 % num1;
console.log(`rem`, rem);


const exponential =2**5 ;
console.log(`exponential`, exponential);

num1++
console.log(num1)

num1--
console.log(num2)

//comparison operator

let a=30;
let b=20;

console.log("a==b",a==b);
console.log("a===b",a===b);
