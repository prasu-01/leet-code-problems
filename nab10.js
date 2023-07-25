function nab10(a) {
   
    let sum = 0;
    for(let i=0;i<a.length;i++){
        sum += a[i];
    }

    let total = 0;

    for(let k=0;k<a.length;k++){
        if(a[k] === 0) {
            total += sum;
        }
        else {
            sum--;
        }

        if(total > 1000000000) return -1;
    }

    return total;
}

console.log(nab10([0,1,0,1,1]));