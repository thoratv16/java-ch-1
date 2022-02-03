                  // for loop
/*
for (i= 0; i<7; i++ )
{
  console.log('In loop:', i);
}
//else (i> 0)
{
  //  console.log('Out of the loop', i);
}
console.log('Loop is finished');
*/

/*const names = ['vaib', 'aki','bhushan', 'laxman'];
for (let i = 0; i <names.length; i++ )
{
//console.log(names [i]);
let html = `<div> ${names[i]} </div>`;
console.log(html);
}

            // WHILE LOOP
let i = 0; 
while (i < 15)
{
    console.log('in loop',i);
    i++;
}

// do while

let i = 0;
do {
    console.log('val of i is = ', i);
    i++;
}while (i < 10);


//      If Statement

const age =15;
if ( age < 19)
{
    console.log('your age is less than 19');
}
*/

//const traders = ['vaib', 'amith','datta','abhi', 'bhus'];

// if (traders.length  > 3 ){
//     console.log("thats lots of traders;", traders);   
//   }


//   const password = 'passw';

//   if (password.length >=12){
//     console.log('that passwrod is too strong');
//   }

//   else if(password.length >= 8){
//     console.log('that password is long enough!');
//   }
//   else{
//     console.log('Password is to short! ');
// }


//logical operators - OR || and  AND &&

// const password = 'password211 5';

// if (password.length >= 12 && password.includes('@')){
//   console.log('Password is mighty strong');
// }
// else if(password.length <=8 || password.includes('@') && password.length > 5){
//   console.log('password is long enough');
// }
// else if(password.length <15) {
//   console.log('password is too short');
//}



//LOGICAL NOT (!)

// let user = false;
  
// if (!user){
// console.log('User are need to be login if want to be continue');  
// }
// console.log(!true);
// console.log(!false);


//break and continue  

// const scores =[10, 40 , 20, 30, 0, 23, 95, 100, 76, 61,29];
// for (let i = 0; i <scores.length; i++)
// { if (scores[i]===0)
//   {
//     continue;
//     //console.log()
//   }
//   console.log('scores of student are', scores[i]);

//   if (scores[i] === 100){
//     console.log('congrats, you got the top score!');
//     break;  
//   } 
// }


//switch statements

// const grade = 'C';

// switch (grade){
//     case 'A':
//     console.log('You got an A!');
//     break;
//     case 'B':
//     console.log('You got an B!');
//     break;
//     case 'C':
//     console.log('You got an C!');
//     break;
//     case 'D':
//     console.log('You got an D!');
//     break;
//     case 'E':
//     console.log('You got an E!');
//     break;
//     default:
//     console.log('Not a valid score');
// }

// // using if statement
 

// //varible & block Scope


// let age =30;
// //let name = 'datta'
// if (true){
//    //let age =40;
//   let name = 'shuarya'
//   console.log('Inside 1st code block: ', age, name);

// if (true){
//   let age = 78;
//   console.log('inside 2nd nested code block: ', age);
//   var test ="Hello world";  
// }
// }
//   age  = 50;
// console.log('outside code block',age, name, test);