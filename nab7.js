function nab7(n){
  
    let left = 0;
    let right = 0;
    let diff = 0;
    let min = Number.MAX_VALUE;

    for(let i=0;i<n.length;i++){
        right += n[i];
    }

    for(let k=0;k<n.length;k++){    
        left += n[k];
        right -= n[k];   
        diff = Math.abs(left-right);
        if(diff < min) min = diff;
    }

    return min;
}

console.log(nab7([3,1,2,2]));