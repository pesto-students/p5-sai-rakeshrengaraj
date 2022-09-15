function hasDuplicates(arr){
    let mySet = new Set(arr); // Set function does not add duplicate value to its arry
    if (mySet.size !== arr.length){
        return true
    }else{
        return true
    }
}

// let hasDuplicate = (arr) => new Set(arr).size !== arr.length


hasDuplicates([1,5,-1,4])