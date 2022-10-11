class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size.length
    }

    insert(value, index){
        const node = new Node (value)

        if (index < 0 || index > this.getSize()){
            return null
        }

        if (index === 0 ){
            if (this.isEmpty()){
                this.head = node
            }else{
                node.next = this.head
                this.head = node    
            }
        }else{
            let prev = this.head
            for (let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    print(){
        let current = this.head
        let nodeValues = '';
        while(current != null){
            nodeValues = nodeValues + ` ${current.value} `
            current = current.next
        }
        console.log(nodeValues)
    }

    rotate(k){
        if (k==0){
            return 
        }

        let curr = this.head;

        for(let i=0; i < k && curr != null; i++){
            curr = curr.next
        }

        if (curr === null){
            return
        }

        let kthNode = curr
        
        while(curr != null){
            curr = curr.next
        }

        curr.next = this.head
        this.head = kthNode.next
        kthNode.next = null
    }
}



const list = new LinkedList()
list.insert(2, 0)
list.insert(4, 1)
list.insert(7, 2)
list.insert(8, 3)
list.insert(9, 4)

list.print() //  2  4  7  8  9 

list.rotate(3)
list.print() //  8  9  2  4  7 

