const path = (m,n) => {
    let dp = [];

  for(let row=0;row<m;row++){
    dp.push([]);
  }

  for(let row=0;row<m;row++){
    dp[row][0] = 1;
  }

  for(let col=0;col<n;col++){
    dp[0][col] = 1;
  }

  for(let row=1;row<m;row++){
    for(let col=1;col<n;col++){
        dp[row][col] = dp[row-1][col] + dp[row][col-1];
    }
  }

  return dp[m-1][n-1];
}

console.log(path(3,7));