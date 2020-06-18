
//create _Node class - underscore indicates private class
//takes a value and a pointer to the next node
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

//create linked list
//start with nothing - null
class LinkedList {
    constructor() {
        this.head = null;
    }

//insert in beginning
//create new node at the head
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

//insert at end
//create new node
//if list is empty, insert at beginning
//start at beginning and move through until reach the end, set end node's next pointer to new node
//new node's next pointer is nulll
    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

//find - just traverse the list, compare value wanted with each node and return when found
    find(item) {
        let currNode = this.head;
        if(!this.head) {
            return null;
        }
        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next
            }
        }
        return currNode;
    }

//deleting - from beginning, from end, anywhere between 2 nodes
    remove(item) {
        //if the list is empty
        if(!this.head) {
            return null;
        }
        //if node to be removed is head, make the next node head
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found');
            returun;
        }
        previousNode.next = currNode.next;
    }

//insertBefore - needs to find the node with the key
//insert a node before that 
//looking for currNode.next that has key
//then previous node.next equals item/currNode
//and currNode.next = currNode.next
    insertBefore(item, key) {
        if(!this.head) {
            this.insertFirst(item)
        }
        let currNode = this.head;
        let previousNode = this.head;
        let keyNode;
        while((currNode.value !== key) && (currNode.next !== null)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        keyNode = currNode;
        previousNode.next = new _Node(item, keyNode)
    }

    insertAfter(item, key) {
        if(!this.head) {
            this.insertFirst(item)
        }
        let currNode = this.head;
        let prevousNode = this.head;
        let keyNode;
        if(currNode.next === key) {
            this.insertLast(item)
        }
        while(currNode.value !== key) {
            prevousNode = currNode;
            currNode = currNode.next;
        }
        keyNode = currNode;
        keyNode.next = new _Node(item, currNode.next)
    }

}


const main = function() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    console.log(SLL)
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    


    SLL.insertBefore('Athena', 'Boomer')
    console.log(SLL);
    SLL.insertAfter('Hotdog', 'Apollo');
    console.log(SLL)
}

main();

