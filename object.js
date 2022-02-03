// obect litrals

// const blog =[
//     {title:'why mac & cheese rules', likes: 40},
//     {title:'10 things to make marmite', likes: 35}
// ]
// console.log(blog);


// let user = {
//     name: 'vaibhav',
//     age: 25,
//     email: 'vaibhavrock@kgf.com',
//     location: 'norway',
//     blogs  : [ {title:'why mac & cheese rules', likes: 40},
//                {title:'10 things to make marmite', likes: 35}],
//     login : function(){
//         console.log('the user is logged in');
//     },
//     logout: function(){
//         console.log('the user are logout');
//     },
//     logBlog: function() {
//         //console.log(this.blogs);
//         console.log('this user has written the following blogs');
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         })
//     }
// };

// user.logBlog();

// user.login();
// user.logout();



// console.log(user);



// console.log(user.name);

// //user.age = 27;

// console.log(user.age);

// const key = 'location';
// console.log(key);

// console.log(user['email'])
// user ['name'] = 'rajaram';
// console.log(user['name']);

// console.log(typeof user )




                // Maths object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 75.8;
// console.log(Math.round(area));
// console.log(Math.floor (area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random number

// const random = Math.random();
// console.log(random);
// console.log(Math.round(random *100));


//                 //premitive value

// let scoreOne = 50;
// let scoreTwo =scoreOne;


// console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);  

// scoreOne= 100;
// console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`); 

//             //refrenece value

// const userOne = {name: 'Arav', age: 67};
// const userTwo = userOne;

// console.log(userOne,userTwo);

// userOne.name = 'ramesh';
// console.log(userOne,userTwo);





//      Instantiation

class Employer {
    constructor (name, age, typeOf){
      //  console.log('employer',this);
        this.name= name;
        this.age= age;
        this.typeOf= typeOf;
    }
    introduce(){
        console.log(`I am ${this.name}. `,` I am ${this.age} old.    `,` I am ${this.typeOf}.`)
    }
}

class Company extends Employer{
    constructor(name, age, typeOf){
        super(name , age, typeOf)
        console.log('company',this)
        
    }
    role(){
        console.log(`I am  ${this.typeOf}`);
    }
}

const company1 = new Company('Vaibs',25,'Engineer');
const company2 = new Company('Amit',28,'Accountant');
const company3 = new Company('Sudhir',27,'Doctor');

// company3.role();
// company3.introduce();
// company3.introduce();