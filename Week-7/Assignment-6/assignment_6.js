
class Queue {
    constructor() {
      this.stack_1 = []
      this.stack_2 = []
    }
  
    enqueue(ele) {
      this.stack_1.push(ele)
    }
  
    dequeue() {
      if (this.stack_2.length === 0) {
        while (this.stack_1.length > 0) {
          let val = this.stack_1.pop()
          this.stack_2.push(val)
        }
      }
          return this.stack_2.pop()
    }
  }

  
 
const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.dequeue())
q.enqueue(4)
q.enqueue(5)
console.log(q.dequeue())
console.log(q.dequeue())

