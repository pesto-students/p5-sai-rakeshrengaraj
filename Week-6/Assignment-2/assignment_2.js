// Spiral Order Matrix ||

// Time Complexity:- O(n*2)
// Space Complexity:- O(n)

function spiralOrder(matrix){
    const result = [];
    let top=0;
    let left=0;
    let right=matrix[0].length-1;
    let bottom=matrix.length-1;
    let direction = 'right';


    while(left<= right && top <= bottom){
        if(direction === 'right'){
            for(let i=left; i<= right; i++){
                result.push(matrix[top][i])
            }
            top++;
            direction = 'down';
        }

        
        if (direction === 'down'){
            for(let i = top; i<= bottom; i++){
                result.push(matrix[i][right])
            }
            right--;
            direction = 'left';
        }

        if (direction === 'left'){
            for(let i = right; i>= left; i--){
                result.push(matrix[bottom][i])
            }
            bottom--;
            direction = 'up';
        }

        if (direction === 'up'){
            for (let i = bottom; i>= top; i--){
                result.push(matrix[i][left])
            }
            left++;
            direction = 'right';
        }

    }

    return result
}

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])) 

// [
//   1, 2, 3, 6, 9,8, 7, 4, 5
// ]
  

  