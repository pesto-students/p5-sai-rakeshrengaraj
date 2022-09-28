// Kadane's Algorithm

// Iterate through each element in an array with initial sum and max value as 0
// Check if sum value is less than zero then reset counter 
// If max value is less than sum value then assigne sum value to max value
// If all the elements in an array are negartive return 0


// Time Complexity:- O(n)
// Space Complexity:- O(1)


const kadaneAlgo = function(arr){
    let curr_val = 0; 
    let max_val = 0;

    for(let i=0; i< arr.length; i++){
        curr_val = curr_val + arr[i];
        if (curr_val < 0){
            curr_val =  0
        }

        if (max_val < curr_val){
            max_val = curr_val
        }
    }
    return max_val
}


let arr = [1, 2, 3, 4, -10];
let arr_1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(kadaneAlgo(arr)) // 10
console.log(kadaneAlgo(arr_1))//6



