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

  levelOrder(root) {
    let result = [];
    let queue = [root];

    if (!root){
        return []
    }
    while (queue.length != 0) {
      let subArr = []  
      let n = queue.length 
      for(let i=0 ; i < n; i++){
        let node = queue.pop()
        subArr.push(node.value)
        if(node.left){
            queue.unshift(node.left)
        }
        if(node.right){
            queue.unshift(node.right)
        }
      }
      result.push(subArr)
    }
    return result
  }
}


const t = new Node(3);
t.left = new Node(9);
t.right = new Node(20);
t.right.left = new Node(15);
t.right.right = new Node(7);
const t1 = new Tree();
t1.root = t;
console.log(t1.levelOrder(t));
