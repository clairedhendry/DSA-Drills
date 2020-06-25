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

// console.log(isEmpty(starTrek));

// console.log(peek(starTrek));

// console.log(display(starTrek));

// console.log(is_palindrome('dad'));
// console.log(is_palindrome("Tauhida"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));


function matchingParentheses(expression) {
    //returns true if expression has correct matching parentheses
    //need to travel through stack and every time meet open parentheses, add to count
    //when meet closed, add to count
    //if counts are equal, return true
    //keep track of location of erroneously open or close parenthesis

    let open = 0;
    let closed = 0;

    const stack = new Stack();
    for(let i = 0; i < expression.length; i++) {
        if(expression.charAt(i) === `)` || expression.charAt(i) === `(`) {
          let character = escape(expression.charAt(i));
          stack.push(character)
    }
}
    while(stack.top.next !== null) {
        if(stack.top.data = `%29`) {
            closed++;
        
            stack.top = stack.top.next
        } else
        if(stack.top.data = `%28`) {
            open++;
            
            stack.top = stack.top.next;
        }
    }
    console.log(`number of closed are ${open}`);
    console.log(`number of opens are ${closed}`);
    if(open === closed) {
        return true;
    } else {
        return false;
    }
    //not working correctly - only 
}

let expr = `(((((4 +2) + 1`

console.log(matchingParentheses(expr));



const starTrek_Queue = new Queue();

starTrek_Queue.enqueue('Kirk');
starTrek_Queue.enqueue('Spock');
starTrek_Queue.enqueue('Uhura');
starTrek_Queue.enqueue('Sulu');
starTrek_Queue.enqueue('Checkov');

function queue_peek(queue) {
    if(!queue.first) {
        return `nothing here!`
    }
    else {
        return queue.first.value
    }
}

console.log(queue_peek(starTrek_Queue));

function isQEmpty(q) {
    if(!q.first) {
        return `empty!`
    }
    else {
        return `not empty`
    }
}

const emptyQ = new Queue();

console.log(isQEmpty(starTrek_Queue));
console.log(isQEmpty(emptyQ));