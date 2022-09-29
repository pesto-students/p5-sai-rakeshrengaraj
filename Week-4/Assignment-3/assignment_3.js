// Fibonacci series with Iterators
const fibonacci = {
    [Symbol.iterator](){
        let n1=0,n2=1,newValue,i=0
        return{
            next(){
                newValue = n1;
                n1 = n2;
                n2 = n1 + newValue
                i++
                return { value: newValue, done: i > 10}
            }
        }
    }
}

for (const num of fibonacci){
    console.log(num)
}
