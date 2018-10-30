class LinkedList {
    constructor() {
        this._length = 0
        this.head = null
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
        newNode.next = this.head
        this.head = newNode
        this._length++;
    }

    addToTheEnd(newNode) {
        if (this._length == 0) {
            this.head = newNode
            this._length++;
            return;
        }

        let currentNode = this.head

        while (currentNode.next) { currentNode = currentNode.next }
        currentNode.next = newNode
        this._length++;
    }

    removeItem(nodeToDelete) {
        if (this.head == nodeToDelete) {
            this.head = nodeToDelete.next
            this._length--;
            return;
        }

        let currentNode = this.head
        
        while (currentNode.next != nodeToDelete) { currentNode = currentNode.next }
        currentNode.next = nodeToDelete.next
        this._length--;
    }

    removeItemByIndex(index) {
        if (index == 0) {
            this.head = this.head.next
            this._length--;
            return;
        }

        let currentNode = this.head

        for (let i = 1; i < index; i++) { currentNode = currentNode.next }
        currentNode.next = currentNode.next.next;
        this._length--;
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let list = new LinkedList();

let n1 = new Node('1') //0
let n2 = new Node('2') //1
let n3 = new Node('3') //2
let n4 = new Node('4') //3

list.addToTheBeginning(n4);
list.addToTheBeginning(n3);
list.addToTheBeginning(n2);
list.addToTheBeginning(n1);

list.print();