


function pairDiff(arr, target){
    let sum = 0;
    for(let i = arr.length-1; i >=0 ; i--){
        for(let j=i-1; j>=0; j--){
            sum = arr[i] - arr[j]
            if (sum === target){
                return 1
            }
        }
    }
    return 0
}


console.log(pairDiff([5, 10, 3, 2, 50, 80], 78)) // 1
console.log(pairDiff([-10, 20], 30)) // 1