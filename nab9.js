// function nab9(n,a) {

//     let cnt = Array(n).fill(0);

//     // let cnt = [];

//     // for(let i=0;i<n;i++){
//     //     cnt[i] = 0;
//     // }

//     let max = 0;
//     for(let k=0;k<a.length;k++){
//         if(a[k] <= n) {
//             cnt[a[k]-1]++;
//             if(max < cnt[a[k]-1]) max = cnt[a[k]-1];
//         }
//         else if(a[k] === n+1) {
//             for(let j=0;j<n;j++){
//                 cnt[j] = max;
//             }
//         }
//     }

//     return cnt;
// }


function nab9(N, A) {
    var j;
    var i;
    var len = A.length;
    var lastMax = 0;
    var max = 0; 
    var counters = new Array (N);
    for(j = 0; j < N; j++) counters[j] = 0;
    var n1 = N + 1;
    
    for(j=0; j < len; j++){
        if(A[j] < n1){
            i = A[j] - 1;
            if (counters[i] < lastMax) counters[i] = lastMax;
            counters[i]++;
            if (max < counters[i]) max = counters[i];
        } else {
            lastMax = max;
        }
    }
    
    for(j = 0; j < N; j++){
      if (counters[j] < lastMax) counters[j] = lastMax;
    }
    
    return counters;
}

console.log(nab9(5, [3,4,4,6,1,4,4]));