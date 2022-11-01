
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    maxDepth(root){
        if (root === null){
            return 0;
        }
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    }
}


const t = new Node(3);
t.left = new Node(9);
t.right = new Node(20);
t.right.left = new Node(15);
t.right.right = new Node(7);
const t1 = new BinaryTree();
t1.root = t;
// console.log(t1)
console.log(t1.maxDepth(t))


const n = new Node(1);
n.right = new Node(2);
const t2 = new BinaryTree();
t2.root = n;
console.log(t2.maxDepth(n))
