class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }


}

let myLinkedList = new LinkList(1);
console.log(myLinkedList.push(2));