
// Pair With Given Differenc

// Time Complexity:- O(n*2)
// Space Complexity:- O(1)


function pairDiff(numArr, target){
    let arr = numArr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length ; i++){
        for(let j=i+1; j< arr.length; j++){
            if ((arr[i] - arr[j] === target) || (arr[j] - arr[i]  === target))
                return 1
        }
    }
    return 0
}


console.log(pairDiff([5, 10, 3, 2, 50, 80], 78)) // 1
console.log(pairDiff([-10, 20], 30)) // 1


