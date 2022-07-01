// let obj1 ={ a: true};
// let obj2 = obj1;

// //console.log("1", obj1);
// obj1.a = 'lolu';

// delete obj1
// obj2 = 'hello';
// console.log("1", obj1);
// console.log('2', obj2);

//10 --> 15 --> 23

// let mylinkedList ={
//     head: {
//         value: 10,
//         next: {
//             value: 15 ,
//             next:{
//                 value: 23,
//                 next: null
//             }
//         }
//     }
// }

class Node{
    constructor (value){
        this.value = value;
        this.next = null;     
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
    const newNode = new Node(value);
        //    const newNode ={
    //        value: value,
    //        next: null
    //    };
        this.tail.next= newNode;
        this.tail= newNode;
        this.length++;
        return this;

    }
    prepend(value){
        const newNode ={
            value : value,
            next : null
        };
        newNode.next= this.head;
        this.head =newNode;
        this.length++;
        return this;    

    }
    printList(){
        const array = []; 
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next; 
        }
        return array;
    }
    insert (index, value){
        //check params
        if (index >= this.length){
            return this.append(value);
        }
        const newNode ={
            value: value,
            next : null
        };
        const leader = this.traversToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()

    }
    traversToIndex(index){

        let counter = 0;
        let currentNode= this.head;
        while (counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const mylinkedList = new LinkedList(10);
mylinkedList.append(15);
mylinkedList.append(23);
mylinkedList.prepend(1);
mylinkedList.printList();
mylinkedList.insert(2,39)
console.log(mylinkedList.printList());


