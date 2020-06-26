
//linear search
//best 0(1), average and worst 0(n)
function indexOf(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(arrray[i] === value) {
            return i;
        }
    }
    return -1;
};

//binary search
//average 0(log(n))
//finding specific value in sorted array
function BinaryIndexOf(array, value, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if(start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

   
    if(item == value) {
        return index;
    }
    else if(item < value) {
        return BinaryIndexOf(array, value, index + 1, end);
    }
    else if(item > value) {
        return BinaryIndexOf(array, value, start, index -1);
    }
}

//depth-first search
//like through binary tree
function depthFirstSearch(values=[]) {
    if(this.left) {
        values = this.left.depthFirstSearch(values);
    }
    values.push(this.value);

    if(this.right) {
        values = this.right.depthFirstSearch(values);
    }
    return values;
}

//breadth-first search
//0(n)
function breadthFirstSearch(tree, values=[]) {
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);
    while(queue.length) {
        const node = queue.dequeue();
        values.push(node.value);

        if(node.left) {
            queue.enqueue(node.left);
        }
        if(node.right) {
            queue.enqueue(node.right);
        }
    }
    return values;
}


