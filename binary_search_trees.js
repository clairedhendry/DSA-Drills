//each node holds a key, value, and left and right pointers
//or, each  node holds key, value, parent pointer

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    //0(log(n)) when a balanced tree - nodes insserted equally on right and left
    //worst case is tree skews to right or left - 0(n) - essentially a linked list
    insert(key, value) {
        if(this.key == null) {
            this.key = key;
            this.value = value;
        }

        else if (key < this.key) {
            if(this.left == null) {
                this.left = new BinarySearchTree(key, value, this)
            }
            else {
            this.left.insert(key, value);
        }
        }

        else {
            if(this.right == null) {
                this.right = new BinarySearchTree(key, value, this)
            }
        
        else {
            this.right.insert(key,value);
        }
    }
    }

    //average case is logarithmic 0(log(n)) - because splitting in half each time
    //worst case is 0(n) because time increases as nodes checked are increased
    //best is 0(1) because root is one looking for
    find(key) {
        if(this.key == key) {
            return this.value;
        }

        else if (key < this.key && this.left) {
            return this.left.find(key);
        }

        else if (key > this.key && this.right) {
            return this.right.find(key)
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if(this.key == key) {
            if(this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error')
        }
    }

    _replaceWith(node) {
        if(this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if(node) {
                node.parent = this.parent;
            }
        }
        else {
            if(node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _finMin() {
        if(!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

const tree = new BinarySearchTree();

tree.insert('E', 'E');
tree.insert('A', 'A');
tree.insert('S', 'S');
tree.insert('Y', 'Y');
tree.insert('Q', 'Q');
tree.insert('U', 'U');
tree.insert('E', 'E');
tree.insert('S', 'S');
tree.insert('T', 'T');
tree.insert('I', 'I');
tree.insert('O', 'O');
tree.insert('N', 'N');

console.log(tree);
console.log(tree.find("U"))


function findHeight(tree) {
    this.key = tree.key
    let rightCounter = 0;
    let leftCounter = 0;
    //just trying to keep track of how many node levels on each side and compare
    //not working yet
    while((this.key.right !== null) || (this.key.left !== null)) {
        if(this.key.left) {
            leftCounter++;
            this.key = this.key.left
        }
        else if(this.key.right) {
            rightCounter++;
            this.key = this.key.right
        }
    }
        if(rightCounter >= leftCounter) {
            return rightCounter
        }
        else {
            return leftCounter;
        }
    
}

