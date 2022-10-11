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
        return this.size
    }

    hasCycle(head){
        let set = new Set()
        let curr = head

        while(curr != null){
            if (set.has(curr)){
                return true
            }else{
                set.add(curr)
            }
            curr = curr.next
        }

        return false
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

let list = new LinkedList()
list.circularList(10,0)
// list.circularList(20,1)
// list.circularList(30,2)
list.print()