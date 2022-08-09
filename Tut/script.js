// const products = [
//         {pId:1,pName:"p1",price:400},
//         {pId:2,pName:"p2",price:100},
//         {pId:3,pName:"p3",price:50},
//         {pId:4,pName:"p4",price:60},
//         {pId:5,pName:"p5",price:800},
//         {pId:6,pName:"p5",price:1000}
// ]

// const lToH = products.slice(0).sort((a,b)=>{
//         return a.price - b.price;
// });
// const hToL = products.slice(0).sort((a,b)=>{
//         return b.price - a.price;
// });

// console.log(lToH);
// console.log(hToL);

// const arr = ["apple","batt","cat","ball","elephant"]

// function isLen3(string){
//         return string.length === 3;
// }

// console.log(arr.find(isLen3));

// console.log(arr.find((string)=> string.length===4));

// const user = [
//         {user_id:1,user_name:"omkar"},
//         {user_id:2,user_name:"om"},
//         {user_id:3,user_name:"kar"},
//         {user_id:4,user_name:"ar"},
//         {user_id:5,user_name:"r"},
//         {user_id:6,user_name:"omk"},
// ]

// console.log(user.find((user)=>user.user_id === 1));

// const products = [
//         {pId:1,pName:"p1",price:400},
//         {pId:2,pName:"p2",price:100},
//         {pId:3,pName:"p3",price:50},
//         {pId:4,pName:"p4",price:60},
//         {pId:5,pName:"p5",price:800},
//         {pId:6,pName:"p5",price:1000}
// ]

// console.log(products.every((product)=>product.price<=1000));

// const no = [3,5,9,7,8]
// console.log(no.some((number)=>number%2===0));

// const person = {
//     firstName:"ashish",
//     age:8,
//     about:function(){
//         console.log(`Person name is ${this.firstName} and age is ${this.age}`)
//     }
// }

// console.log(person.about());

// function myFun(){
//     "use strict"
//     console.log(this);
// }

// myFun();

// Without new keyword
// function createUserObject(name, age, email) {
//     const user = Object.create(createUserObject.prototype);
//     user.name = name;
//     user.age = age;
//     user.email = email;
//     return user;
// }

// createUserObject.prototype.about = function() {
//     return `The user name is ${this.name} and age is ${this.age} for contact email here ${this.email}`;
// };

// createUserObject.prototype.is18 = function() {
//     return this.age >= 18;
// };

// const u1 = createUserObject("Omkar",18,"prajapatiomkar01@gmail.com");
// console.log(u1.is18());

// With new keyword

// function createUserObject(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;

// }

// createUserObject.prototype.about = function() {
//     return `The user name is ${this.name} and age is ${this.age} for contact email here ${this.email}`;
// };

// createUserObject.prototype.is18 = function() {
//     return this.age >= 18;
// };

// const u1 =new  createUserObject("Omkar",18,"prajapatiomkar01@gmail.com");
// console.log(u1);
// console.log(u1.about());
// console.log(u1.is18());

// const arr = [500,1,2,40,0,13,17,15]
// const ans =arr.sort((a,b)=>{
//     return a-b;
// });
// console.log(ans);

// const arr = ["omkar","all","is","well"]
// console.log(arr.find((string)=>{
//     return string.length ===5;
// }))

// const btn = document.querySelector(".btn");
// btn.addEventListener("click",(n)=>{
//     btn.classList.toggle("active")
// })

// const arr = [5,2,4,6,7,12,42,10]

// let a =arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(typeof a)

// const no = [4,2,6,3]
// function myFun(num,ind){
//     console.log(`Index is ${ind} number is ${num}`)
// }
// no.forEach(myFun)

const no = [3, 4, 5, 6, 14];

// const sqrt= function(no){
//     return no*no;
// }

// const sqrNo = no.map(sqrt)
// console.log(sqrNo)

// const even = no.filter((no)=>{
//     return no%2 ==0;
// })

// console.log(even)

// const sum = no.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })

// console.log(sum)

// const arr = [];

// function isLen2(str){
//     return (str.length ===2);
// }

// console.log(arr.every(isLen2))

// console.log("Script Start !!!!");
// const allButton = document.querySelectorAll(".my-buttons button");

// allButton.forEach((button) => {
  
//   button.addEventListener("click", (e) => {
//     let sum = 0;
//     for (let i = 0; i <= 1000000000; i++) {
//       sum += i;
//     }
//     console.log(e.currentTarget.textContent,sum);
//   });
// });
// let outerVar = 0;
// for (let i = 0; i <= 1000000000; i++) {
//     outerVar += i;
//   }
// console.log("Script End !!!!");

// const allButton = document.querySelectorAll(".my-buttons button");
// allButton.forEach(button=>{
//     button.addEventListener("click",(e)=>{
//         e.target.style.backgroundColor = "red"
//         e.target.style.color = "white"
//     })d
// })



// const body = document.body;

// body.addEventListener("keypress",(e)=>{
    
//     console.log(e.key)
// }) 

const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click",(e)=>{
    console.log(e.target)
})