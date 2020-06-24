
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

    insertAt(item, index) {

    }

}


const main = function() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Apollo');
   
    SLL.remove('Tauhida');
    return SLL;
}


function display(list) {
 //recursion? for each next (as long as not null) push value into array?
  if(!list.head) {
      return null;
  }
  let array = [];
  let currNode = list.head;
  while(currNode !== null) {
      array.push(currNode.value)
      currNode = currNode.next;
  }
  console.log(array)
}

function size(list) {
    let counter = 0;
    if(!list.head) {
        return counter;
    }
    
    let currNode = list.head;
    while(currNode !== null) {
        counter++;
        currNode = currNode.next;
    }
    console.log(counter)
}

function isEmpty(list) {
    if(!list.head) {
       return true;
    } else {
    return false;
    }
}


function findPrevious(list, key) {
    let currNode = list.head;
    let previousNode = list.head;
  
    while((currNode.value !== key) && (currNode.next !== null)) {
        previousNode = currNode;
        currNode = currNode.next;
    }
    
    console.log(currNode)

}

function findLast(list) {
    let currNode = list.head;
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    console.log(currNode)
}

isEmpty(main());
display(main());
size(main());
findPrevious(main(), 'Boomer');
findLast(main());

//checking if the list has repeats?
//comparing each node against the first node, then each value against the 2nd, and so on
// 0(n^k)? or exponential
function WhatDoesThisProgramDo(lst) {
    //current is first node (head)
    let current = lst.head;
    //as long as there is a node, not null
    //going to cycle through each node
    while (current !== null) {
        //create newNode at current node
        let newNode = current;
        //while newNode is not the last in the list
        while (newNode.next !== null) {
            //if the value of the node next to newNode equals the value of the current node
            if (newNode.next.value === current.value) {
                //the node next to newNode becomes the one next to it
                newNode.next = newNode.next.next;
            }
            else {
                //else move along 
                newNode = newNode.next;
            }
        }
        //then move along the list
        current = current.next;
    }
}

function reverseList(list) {
    //tail becomes head and next points to previous node
    //walk along list, each currNode's next points back to previous node
    //can be solved with recursion
}

function thirdFromEnd(list) {
    //find the node where .next.next.next === null
}

function middleOfList(list) {
    //find the node where number of previous nodes === number of next nodes
    //can not just get size and divide by 2
    //
}

function cycleList(list) {
    //check if .next of currNode === any previous node 
    //probably very similar to whatDoesThisProgramDo - need to compare each node against each other

}

function sortingAList(list) {
    //maybe similar to above, where need to check each value against all others?
    //or maybe, slightly better way
    //compare consecutive values, if a is lower, compare to minValue, if lower, becomes minValue
    //but need to make sure pointer is set correct
}