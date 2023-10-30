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
    pop() {
        if(!this.head) {
            return undefined;
        }
        let temp = this.head;
        let pre = this.head;
        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    
    unshift(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    
    shift() {
        if(!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    
    }

    set(index, value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    
    }
    insert(index, value) {
        if(index < 0 || index > this.length) {
            return false;
        }
        if(index === this.length) {
            return this.push(value);
        }
        if(index === 0) {
            return this.unshift(value);
        }
        const newNode = new Node(value);
        let pre = this.get(index - 1);
        let temp = pre.next;
        pre.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }
        if(index === this.length - 1) {
            return this.pop();
        }
        if(index === 0) {
            return this.shift();
        }
        let before = this.get(index - 1);
        let temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let pre = null;
        let next = null;
        for(let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = pre;
            pre = temp;
            temp = next;
        }
        return this;
    }

   findMiddleNode() {
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    hasLoop() {
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) {
                return true;
            }
        }
        return false;
    }

    findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;
        for(let i = 0; i < k; i++) {
            if(fast === null) {
                return null;
            }
            fast = fast.next;

            while(fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    partitionList(x) {
        let beforeStart = null;
        let beforeEnd = null;
        let afterStart = null;
        let afterEnd = null;
        let temp = this.head;
        while(temp) {
            let next = temp.next;
            temp.next = null;
            if(temp.value < x) {
                if(beforeStart === null) {
                    beforeStart = temp;
                    beforeEnd = beforeStart;
                } else {
                    beforeEnd.next = temp;
                    beforeEnd = temp;
                }
            } else {
                if(afterStart === null) {
                    afterStart = temp;
                    afterEnd = afterStart;
                } else {
                    afterEnd.next = temp;
                    afterEnd = temp;
                }
            }
            temp = next;
        }
        if(beforeStart === null) {
            return afterStart;
        }
        beforeEnd.next = afterStart;
        return beforeStart;
    }
}



let myLinkedList = new LinkList(1);
myLinkedList.push(2);
myLinkedList.push('hello');
myLinkedList.push('world');
