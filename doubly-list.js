class DoublyLinkedList {
    constructor() {
        this._length = 0
        this.head = null
        this.tail = null
    }

    print() {
        let currentNode = this.head
        while (currentNode.next) {
            console.log(currentNode.data)
            currentNode = currentNode.next;
        }
        console.log(currentNode.data)
    }

    addToTheBeginning(newNode) {
        if (this._length == 0) {
            this.head = newNode
            this.tail = newNode
            this._length++;
            return;
        }

        newNode.next = this.head
        newNode.next.prev = newNode
        this.head = newNode
        this._length++;
    }

    addToTheEnd(newNode) {
        if (this._length == 0) {
            this.head = newNode
            this.tail = newNode
            this._length++;
            return;
        }

        newNode.prev = this.tail
        newNode.prev.next = newNode
        this.tail = newNode
        this._length++;
    }

    deleteItem(nodeToDelete) {
        if (this.head == nodeToDelete) {
            this.head = nodeToDelete.next
            this.head.prev = null
            this._length--;
            return;
        }

        if (this.tail == nodeToDelete) {
            this.tail = nodeToDelete.prev
            this.tail.next = null
            this._length--;
            return;
        }

        nodeToDelete.prev.next = nodeToDelete.next
        nodeToDelete.next.prev = nodeToDelete.prev
        this._length--;
    }

    deleteItemByIndex(index) {
        if (index == 0) {
            this.head = this.head.next
            this.head.prev = null
            this._length--;
            return;
        }

        if (index == this._length-1) {
            this.tail = this.tail.prev
            this.tail.next = null
            this._length--;
            return;
        }

        let nodeToDelete = this.head;
        for (let i=0; i<index; i++) { nodeToDelete = nodeToDelete.next } 
        
        nodeToDelete.prev.next = nodeToDelete.next
        nodeToDelete.next.prev = nodeToDelete.prev
        this._length--;
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

let list = new DoublyLinkedList();
let list2 = new DoublyLinkedList();

let n1 = new Node('1')
let n2 = new Node('2')
let n3 = new Node('3')
let n4 = new Node('4')
let n5 = new Node('5')
let n6 = new Node('6')
let n7 = new Node('7')
let n8 = new Node('8')

list.addToTheBeginning(n1);
list.addToTheBeginning(n2);
list.addToTheBeginning(n3);
list.addToTheBeginning(n4);
list.print();

console.log('*****')

list2.addToTheEnd(n5)
list2.addToTheEnd(n6)
list2.addToTheEnd(n7)
list2.addToTheEnd(n8)
list2.print();