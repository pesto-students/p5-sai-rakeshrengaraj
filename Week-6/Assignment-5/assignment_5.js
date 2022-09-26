


function pairDiff(numArr, target){
    let arr = numArr.sort((a, b) => a - b);
    for(let i = 0; i <= arr.length ; i++){
        for(let j=i+1; j<=arr.length; j++){
            sum = arr[i] - arr[j]
            if (Math.abs(sum) === target){
                return 1
            }
        }
    }
    return 0
}


console.log(pairDiff([5, 10, 3, 2, 50, 80], 78)) // 1
console.log(pairDiff([-10, 20], 30)) // 1