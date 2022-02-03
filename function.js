// function expression

// function greet (){
//     console.log('function expression:');
// }


// // function declration

// const saudi = function(){
//     console.log('Function declration:');
// };

//  greet();
// // greet();


// //functon expression can invoke function from any where in code block i.e hoist(pull) function
// // function greet (){
// //     console.log('function expression:');
// // }


// saudi();


// argument & parameters

// const speak = function(name){
//     console.log(`good day ${name}`);
// }
// speak('mario');


//regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
//     //return area;
//     //console.log(area);
// };
// const area = calcArea(10);
//console.log(area); 


//         //arrow function
// const calcArea = radius => {
//     return 3.14 * radius ** 2;

// };

// const area = calcArea(12);
//     console.log('area of cirecle:', area);

//normal function calling or wrighting method

//  const greet = function(){
//      return 'hello world';
//  };
//  const result= greet();
//  console.log(result);


//in arrow function

// const greet = () => 'hello world';
// const result = greet();
// console.log(result);

// const bill = function (product,tax){
//     let total = 0;
//     for(i=0; i<product.length; i++){
//         total += product[i]=product[i] *tax;
//     }
//         return total;
// };

// console.log(bill ([5,5,5,15,30], 2));


//above arrow function

        // const bill = (product,tax) =>{
        //     let total = 0;
        //     for(i=0; i<product.length; i++){
        //         total +=(product[i]+product[i] )*tax;
        //     } 
        //     return total;
        // }
        // console.log(bill ([5,15], 2));  



// function funChallenge(input){
//     let a =10 ;
//     a = 50+3;
//     for (let i=0; i=input.length;i++){
//         anotherFunction();
//         let stranger =true;
//         a++;
//     }
//     return a;
// }




const array1 = ['a', 'b', 'c', 'z'];
const array2 = ['x', 't', 'c'];

function containsCommonItem3(arr1,arr2){
        return arr1.some(item=>arr2.includes(item))
} 

console.log(containsCommonItem3(array1,array2))



// function containsCommonItem2(arr1, arr2){
// //where loop through first array and create object where properties === items in the array
 
// let map ={};
// for(i = 0; i< arr1.length; i++){
//         if(!map[arr1[i]]){
//             const item = arr1[i];
//             map[item] = true;
//         }
// }

// //loop through second array and check if item in second array exists on created object.
// for (let j= 0;j<arr2.length;j++){
//         if (map[arr2[j]]){
//                 return true;
//         }
// }
//         return false;
// }
// console.log(containsCommonItem2(array1,array2));

// O(a+b)time complexity
// O (a) space complexity


//   comm1 = (arr1, arr2) =>  {
//     for (let i=0; i < arr1.length; i++) {
//      for (let j=0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//                return true;
//         }
//     }
// }
//     return false;
// }

//console.log(comm1(array1,array2));

// O(a*b) Time Complexity
// O (1) space complexity



// const array1 = [1, 3, 4, 7, 9];
// //const array2 = [3,5,7,1,32];

// sumArray = (arr1) => {
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++) {

//         sum += arr1[i]
//     } return sum;
//     console.log(sum);


// }

// console.log(sumArray(array1));

//              CALL BACK FUNCTION


// let people = ['Vaibs', 'sumit', 'laxman', 'datta', 'kunal', 'sahil'];

// const logPerson = (person, index) =>{
//     console.log(`${index}- Hello ${person}`);
// };


// people.forEach(logPerson);                  // call-back prototype
// (

// people.forEach((person,index,) =>{           
//     console.log(index,person);
// })

//              get a reference to USER INTERFACE 

// const ul = document.querySelector('.people');

// const people = ['Vaibs', 'sumit', 'laxman', 'datta', 'kunal', 'sahil'];

// let html = ``;

// people.forEach(function(person){
//     // create html template
//     html +=`<li style="color: green">${person}</li>`;

// });

// console.log(html);
// ul.innerHTML = html;