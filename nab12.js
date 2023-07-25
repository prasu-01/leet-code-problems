function nab12(A){
        // Implement your solution here
         let minAvg = parseInt(A[0] + A[1]) / 2;
           let  minAvgIndex = 0;
            let n = A.length;
            for (let i = 0; i < n-1; i++) {
                if (parseInt(A[i] + A[i+1]) / 2.0 < minAvg) {
                    minAvg = parseInt(A[i] + A[i+1]) / 2.0;
                    minAvgIndex = i;
                }
                if (i < n-2 && parseInt(A[i] + A[i+1] + A[i+2]) / 3.0 < minAvg) {
                    minAvg = parseInt(A[i] + A[i+1] + A[i+2]) / 3.0;
                    minAvgIndex = i;
                }
            }
            return minAvgIndex;
    }
