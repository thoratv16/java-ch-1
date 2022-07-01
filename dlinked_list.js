class Noden{
    constructor (value){
        this.value = value;
        this.next = null;

    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next : null,
            prev : null,
        }
        this.tail = this.head;
        this.length = 1;

    }
    append(value){
    const new_Node = new Node(value);
           const newNode ={
           value: value,
           next: null,
           prev: null
       };
        newNode.prev = this.tail;
        this.tail.next= newNode;
        this.tail= newNode;
        this.length++;
        return this;

    }
    prepend(value){
        const newNode ={
            value : value,
            next : null,
            prev : null
        };
        newNode.next= this.head;
        this.head.prev = newNode;
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
            next : null,
            prev : null
        };
        const leader = this.traversToIndex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
       follower.prev =newNode;
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

const my_linkedList = new LinkedList(10);
mylinkedList.append(15);
mylinkedList.append(23);
mylinkedList.prepend(1);
mylinkedList.printList();
mylinkedList.insert(2,39)
console.log(mylinkedList.printList());