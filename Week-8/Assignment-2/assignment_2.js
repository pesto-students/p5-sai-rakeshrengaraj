class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isValidBST(root) {
    if (root){
        if(root.left && (root.left.value > root.value || !this.isValidBST(root.left))){
            return false
        }
        if (root.right && (root.right.value < root.value || !this.isValidBST(root.right))){
            return false
        }
    }
    return true
  }
}

const t = new Node(5);
t.left = new Node(1);
t.right = new Node(4);
t.right.left = new Node(3);
t.right.right = new Node(6);
const t1 = new Tree();
t1.root = t;
console.log(t1.isValidBST(t));


// const t = new Node(2);
// t.left = new Node(1);
// t.right = new Node(3);
// const t1 = new Tree();
// t1.root = t;
// console.log(t1.isValidBST(t));