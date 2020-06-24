class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    //0(1) constant time for push and pop
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}


class Queue_Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
//0(1)
    enqueue(data) {
        const node = new Queue_Node(data);

        if(this.first === null) {
            this.first = node;
        }
        if(this.last) {
            this.last.next = node;
        }
        this.last = node;
    }
//0(1)
    dequeue() {
        if(this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;

        if(node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}


// class Stack {
//     constructor() {
//         this.top = null;
//     }

//     push(data) {
//         if(this.top === null) {
//             this.top = new _Node(data, null);
//             return this.top;
//         }
//         const node = new _Node(data, this.top);
//         this.top = node;
//     }

//     pop() {
//         if(this.top === null) {
//             return;
//         }
//         const node = this.top;
//         this.top = node.next;
//         return node.data;
//     }
// }

const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');



function peek(stack) {
    const top = stack.top;
    return top;
}

function isEmpty(stack) {
    if(stack.top === null) {
        return true;
    }
    else {
        return false;
    }
}

// function display(stack) {
//     if(stack.top === null) {
//         return;
//     }
//     if(stack.top !== null) {
//         const node = this.top;
//         const nextNode = node.next;
//         while(nextNode !== null) {
//             node = nextNode;
//             nextNode = nextNode.next
//         }
//         return node;
//     }
// }

function display(stack) {
    let currNode = stack.top;
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode;
}

function is_palindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const stack = new Stack();
    for(let i = 0; i < str.length; i++) {
        stack.push(str.charAt(i))
    }
    let outcome;
    for(let i = 0; i < str.length; i++) {
        if(stack.top.data === str.charAt(i)) {
            outcome = true;
            stack.top = stack.top.next;
        }
        else {
            outcome = false;
        }
    }
    return outcome;
}

console.log(isEmpty(starTrek));

console.log(peek(starTrek));

console.log(display(starTrek));

console.log(is_palindrome('dad'));
console.log(is_palindrome("Tauhida"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));