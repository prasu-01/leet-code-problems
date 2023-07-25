const lis = (a) => {
     let dp = new Array(a.length).fill(1);
     let max = 1;

     for(let j=1;j<a.length;j++){
        for(let i=0;i<j;i++){
            if(a[i] < a[j]){
              dp[j] = Math.max((dp[i]+1), dp[j]);
            }
            max = Math.max(max, dp[j]);
        }
     }
     console.log(dp)
     return max;
}

console.log(lis([0,1,0,3,2,3]))