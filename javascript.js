// let result;

// const operator = prompt();

// const number1 = prompt();
// const number2 = prompt();

// switch (operator){
//     case "+":
//         result = number1 + number2;
//         console.log(result);
//         break;

//     case "*":
//         result = number1 * number2;
//         console.log(result);
//         break;   

//     case "/":
//         result = number1 / number2;
//         console.log(result);
//         break;

//     case "-":
//         result = number1 - number2;
//         console.log(result);
//         break; 

//     default:
//         console.log("Invalid Operator");
//         break;    
// }


// let age = prompt("Age");
// let gender = prompt("gender");

// if (age >= 17 && gender=="male"){
//     console.log("Enter");
// }else{
//     console.log("No Entry");
// }



// let percentage = prompt("Percentage");


// if (percentage < 40 ){
//     console.log("Fail"); 
// }
// else if(percentage >=40 && percentage <=50 ){
//     console.log("Buy a Pen");
// }else if (percentage >=50 && percentage <=60 ){
//     console.log("Buy a Book");
// }else if (percentage >=60 && percentage <=70 ){
//     console.log("Buy a Bag");
// }else if (percentage >=70 && percentage <=80 ){
//     console.log("Buy a Watch");
// }else if (percentage >=80 && percentage <=90 ){
//     console.log("Buy a Mobile");
// }else if (percentage >=90 && percentage <=100 ){
//     console.log("Buy a Laptop");
// }else{
//     console.log("Fail")
// }


// let number=prompt();

// if (number%2 == 0){
//     console.log(number + number)
// }


// let number=prompt();

// if (number%2 == 0){

//     console.log(number*2)
// }else{
//     console.log(parseInt(number)+2)
// }

// loops

// for (let i=0; i<=10; i++){
//     console.log("Hello Raju")
// }

// for(let i=1; i<=10; i++){
//     console.log("Hello Again!")
// }


// for (let i=1; i<=10; i++){
//     console.log(i)
// }


// Write a program that uses a loop to calculate and display the sum of all numbers from 1 to 50.

// let a=0;

// for(let i=1; i<=50; i++){
//     a+=i;
//     console.log(a)
// }

// Write a program that uses a loop to calculate and display the factorial of a given number.

// let a=1;

// for (let i=5; i>=1; i--){
//     a*=i;
//     console.log(a);
// }


// Write a program that uses a loop to generate and display the Fibonacci sequence up to a certain number of terms.

// let a=0;

// for (let i=0; i<=100; i++){
//     a+=i;
//     console.log(a);

// }


// Whenever the Aadhar Number is Entered, then the following conditions must be satisfied.
//        a) "1. Length of Aadhar is Valid"
//        b) "2. Aadhar in digits are Valid"
//        c) "3. Aadhar Number Should not start with 0 and 1".
//        d) otherwise => "Invalid Aadhar Number"
// Note : Take an Aadhar number in string format.


// let aadhar = prompt("Enter Aadhar")

// if (aadhar.length == 12 && aadhar[0] !=0 && aadhar[0] != 1  ){
//     console.log("Valid Aadhar");
// }else{
//     console.log("Invalid Aadhar")
// }

// let aadhar = prompt("Enter Aadhar")
// aadhar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// if (aadhar.length == 12 && aadhar[0] !=0 && aadhar[0] != 1  ){
//     console.log("Valid Aadhar");
// }else{
//     console.log("Invalid Aadhar")
// }



// Write a program that uses a loop to print a multiplication table for a given Number up to a certain range.

// let a = prompt();

// for (let i=1; i<=10; i++){

//     table = a*i;

//     console.log(a+"*"+i+"="+table)
// }




// let paragraph = document.querySelector('.paragraph');

// paragraph.innerHTML ="this is paragraph"


// let button = document.querySelector(".button");
// button.addEventListener("click", ()=>{
//     button.innerHTML = "i am changed"
// })

// let a="";

// for (let i=1; i<=10; i++){
//  a+=i+"";
//  console.log(a)
// }

// for (let i=1; i<=10; i++){

//  console.log(i)
// }


// let myArray =[1,"r",2,3,"a",8,"b",7,"c"];
// length= myArray.length;
// console.log(length);
// for (let i=1; i<=length; i++){
//     if (i == typeof()){
//         console.log(i);
//     }
// }



// const form = document.querySelector("#form");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const phone = document.querySelector("#phone");
// const password = document.querySelector("#password");


// form.addEventListener("submit", (e)=>{
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//     const passwordValue = password.value.trim();

//     if (nameValue == ""){
//         e.preventDefault();
//         alert("please provide the name!");
//         name.focus();
//         return false;
//     }

//     if(!isNaN(nameValue)){
//         e.preventDefault();
//         alert("please provide a valid name!");  
//         name.focus();
//         return false;
//     }

//     if (emailValue == ""){
//         e.preventDefault();
//         alert("please provide an email!");
//         email.focus();
//         return false;
//     }

//     if (phoneValue.length<10 || phoneValue.length>10){
//         e.preventDefault();
//         alert("please provide valid phonenumber!");
//         phone.focus();
//         return false;
//     }

//     if (password == " "){
//         e.preventDefault();
//         alert("please provide a password");
//         password.focus();
//         return false;
//     }

//     if (password.length < 5){
//         e.preventDefault();
//         alert("password cant be less than 5 digits!");
//         password.focus();
//         return false;
//     }

//     alert("data saved successfully")


// });


// const form=document.querySelector("#new_task_form");
// const input=document.querySelector("#new_task_input");
// const tasks=document.querySelector(".tasks");

// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const userData = input.value;

//     if(!userData){
//         alert("Please give some task before submitting")
//         return;
//     }

//     const task=document.createElement("div");
//     task.classList.add("task");

//     const content=document.createElement("div");
//     content.classList.add("content");

//     const task_input=document.createElement("input");
//     task_input.classList.add("text");
//     task_input.classList.add("form-control");
//     task_input.value= userData;
//     task_input.setAttribute("readonly", "readonly");
//     task_input.type="text";


//     content.appendChild(task_input);
//     task.appendChild(content);
//     tasks.appendChild(task);
// });


// const user={
//     name:"Kiran",
//     email:"mr@gmail.com",
//     ph:7207051930
// }

// let {name, email,ph}=user;
// console.log(name,email,ph )


// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined)


// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }

//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }

//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//   console.log(myUpdatedVehicle)




//   function add(...input){
//     let sum = 0;
//     for (let i of input){
//         sum+= i;
//     }
//     console.log(sum)
//   }


//   add(2,44,5,6,6,5,5,5,5,55555,5,5,5,5,6,4,66,4,6,6,4,5,55);


// let myArray = ["one","two","three","four","five"];
// for (let item of myArray){
//     console.log(item);
// }

// let myArray = ["one","two","three","four","five"];
// for()



// Write a program that uses a loop to find and display the common elements between two arrays of integers.

// let listA =[55, 33, 44, 55, 67, 77, 7];
// let listB =[77, 7, 33, 1, 488, 9, 1];

// let lengthA = listA.length;
// let lengthB = listB.length;

// for (let i=0; i<lengthA; i++){
//   for (let j=0; j<lengthB; j++){

//   if(listA[i] == listB[j]){
//     console.log(listA[i]);

//   }
// }
// }

// let listA =[55, 33, 44, 55, 67, 77, 7];
// let listB =[77, 7, 33, 1, 488, 9, 1];

// let lengthA = listA.length;
// let lengthB = listB.length;

// for (let i=0; i<lengthA; i++){
//   for (let j=0; j<lengthB; j++){

//   if(listA[i] == listB[j]){
//     console.log(listA[i]);

//   }
// }
// }


// let sentence = "my namegggggggggggggggggggggggggg is careerpedia";
// let find = sentence.split(" ");

// let f = '';
// for (let i=0; i<find.length; i++){
//   if(f.length < find[i].length){
//     f = find[i]
//   }
// }

// console.log(f)

// Given an array of objects representing users, update the age of a user with a specific ID.
// const users = [
//   { id: 1, name: "A", age: 25 },
//   { id: 2, name: "B", age: 30 },
//   { id: 3, name: "C", age: 22 }
// ];


const users = [
  { id: 1, name: "A", age: 25 },
  { id: 2, name: "B", age: 30 },
  { id: 3, name: "C", age: 22 }
];

console.log(users);










