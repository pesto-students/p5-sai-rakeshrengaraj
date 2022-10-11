class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    insert(value, index){
        const node = new Node(value)
        if (index < 0 || index > this.size){
            return null
        }
        if (index === 0){
            // Prepend method
            if (this.isEmpty()){
                this.head = node        
            }else{
                node.next = this.head
                this.head = node
            }
        } else {
            let prev = this.head;
            for (let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }

        this.size ++
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr != null){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr =next
        }
        this.head = prev
    }

    print(){
        let curr = this.head
        let listValues = '';
        while(curr != null){
            listValues = listValues + ` ${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
}


let list = new linkedList()
list.insert(10,0)
list.print()

list.insert(20,0)
list.print()

list.insert(30,1)
list.print()

list.reverse()
list.print()

