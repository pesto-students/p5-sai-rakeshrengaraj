// Sort array of 0's,1's and 2's

// Time Complexity:- O(n*2)
// Space Complexity:- O(n)


function sortArray(arr, size) {
    if (arr.length !== size) {
      console.log('Array length does not match size')
    }
    else{
      for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
          if (arr[i] >= arr[j]){ 
            let temp = arr[j];   
            arr[j] = arr[i]   
            arr[i] = temp
          }
        }
       
      }    
       return(arr)
    }
  
  
  }
  console.log(sortArray([1, 2, 3, 4, 5], 5))
  console.log(sortArray([0, 2, 1, 2, 0], 5))
  console.log(sortArray([0,1,0], 3))


  