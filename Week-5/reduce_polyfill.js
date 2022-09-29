const arr = [1,2,3,4]

const reducer = arr.reduce((acc, currentValue) => {
    return acc +currentValue
},0)

Array.prototype.myReduce = function(fn,initialValue = 0){
    let acc = initialValue;
    for(i=0; i<this.length; i++){
        acc = fn(acc,this[i])
    }
    return acc

}

const newReducer = arr.myReduce((acc,currentValue) => {
    return acc + currentValue
},0)

console.log(reducer)
console.log(newReducer)

