const coins = (a, sum) => {
    let dp = new Array(sum+1).fill(Infinity);
    dp[0] = 0;
    for(let i=1;i<sum+1;i++){
        for(let j=0;j<a.length;j++){
            if(a[j] <= i){
                dp[i] = Math.min(dp[i], dp[i-a[j]] + 1);
            }
        }
    }
    let ans = dp.pop();
    return ans === Infinity ? -1 : ans
}

console.log(coins([1,2,5], 11));