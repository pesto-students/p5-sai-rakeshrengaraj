
// Best time to buy and sell stock


// Time Complexity:- O(n*2)
// Space Complexity:- O(1)


function stockBuyAndSell(arr){
    let max_profit = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for (let j = i+1; j<arr.length; j++){
            const current_profit = a[j] - a[i]

            if(current_profit > max_profit){
                max_profit = current_profit
            }
        }
    }
    return max_profit
}

console.log(stockBuyAndSell([7,6,4,3,1]));
console.log(stockBuyAndSell([7,1,5,3,6,4]));

