// class Node{
// constructor (value){
//     this.value = value;
//     this.next = null;
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;

//     }
//     peek(){
//         return this.top;
//     }
//     push(value){
//         const newNode = new Node(value);
//         if (this.length === 0){
//             this.top = newNode;
//             this.bottom = newNode;
//         } else {
//             const holdingPointer = this.top;
//             this.top = newNode;
//             this.top.next = holdingPointer;
//         }
//         this.length++;
//         return this;
 

//     }
//     pop(){
//         if (!this.top){
//             return null;
//         }
//         const holdingPointer =this.top;
//         this.top = this.top.next;
//         this.length--;
//         return holdingPointer;
//     }
//     // isEmpety
// }

// const myStack =new Stack();
// // myStack.peek()

// myStack.push("yahoo");
// myStack.push("google");
// myStack.push("gmail");
// myStack.push("insta");
// // console.log(myStack.push());
// //console.log(myStack.peek());

// console.log(myStack.pop());
// console.log(myStack.pop());
