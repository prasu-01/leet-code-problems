
// O(n) solution - for dp array

// const subarr = (a) => {
//     let max = a[0];
//     let dp = new Array(a.length).fill(0);
//     dp[0] = a[0];
//     for(let i=1;i<a.length;i++){
//         dp[i] = Math.max((a[i] + dp[i-1]), a[i]);
//         max = Math.max(dp[i], max);
//     }
//     return max;
// }


// O(1) - no storing in array

const subarr = (a) => {
    let curMax = globalmax = a[0];

    for(i=1;i<a.length;i++){
        curMax = Math.max(a[i], curMax + a[i]);
        globalmax = Math.max(globalmax, curMax);
    }
    return globalmax;
}
console.log(subarr([-2,1,-3,4,-1,2,1,-5,4]));
console.log(subarr([5,4,-1,7,8]));