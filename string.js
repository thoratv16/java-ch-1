/*string
console.log('Hello, world');

let email = 'alibaba@yahoo.com';

console.log(email);

// string concatenation
 let firstName = 'laxman';
 let lastName = 'kadam';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting Characters
console.log(fullName[2]);



//string length
console.log(fullName.length);

//string method
console.log(fullName.toUpperCase());
let result =fullName.toLowerCase();
console.log(result, fullName);


let index=  email.indexOf('@'); 
console.log(index);*/

// create function that reverse string

function reverse (str){
    //  check input
    if (!str ||str.length<2|| typeof str !=='string'){
        return 'hmm that is not good';
    }

     const backward =[];
     const totalItems = str.length - 1;
        for(let i = totalItems; i >= 0; i--){
            backward.push(str[i]);
             
        }
        console.log(backward);

        return backward.join('');
     

}
//reverse('Hi My name is Vaibhav');


function reverse2(str){ 
    return str.split('').reverse().join('')
}
console.log(reverse2('hi name is vaibhav'))


let user = {
    age : 25,
    name : 'vaibhav',
    add : "Pune",
    noob : function(){
        console.log('how are you guys ?');
    }
}

console.log(user.name);

user.noob()
user.spell ='har ghar modi';
console.log(user.spell);