
// Time Complexity:- O(n*2)
// Space Complexity:- O(n)


function threeSumClosest (nums, target) {
    if (nums === null || nums.length <= 2) return null;
    if (nums.length === 3) return nums[0] + nums[1] + nums[2];
    // sort array first
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let res = null;
    let closest = Infinity;
    for (let i = 0; i < n; i++) {
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            let diff = sum - target;
            if (diff === 0) {
                return sum;
            } else if (diff > 0) {
                k--;
            } else {
                diff = target - sum;
                j++;
            }
            if (diff < closest) {
                closest = diff;
                res = sum;
            }
        }
    }
    return res;
} 


console.log(threeSumClosest([-1,2,1,-4], 1))
