
// o(n^2)
// const jmp = (n) => {
//     let dp = new Array(n.length).fill(false);
//     dp[0] = true;

//     for(let j=1;j<n.length;j++){
//         for(let i=0;i<j;i++){
//             if(dp[i] &&  i+n[i] >= j){
//                 dp[j] = true;
//                 break;
//             }
//         }
//     }

//   return dp.pop();
// }


// o(n)


const jmp = (n) => {
    
    let maxInd = 0;

    for(let i=0;i<n.length;i++){

        if(maxInd >= i){
            let max = i + n[i];

            if(max >= n.length -1) return true;

            if(max > maxInd)  maxInd = max;
        }
    }
    return false;
}


console.log(jmp([3,2,1,0,4]))