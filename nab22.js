function nab22(a){

    let n = a.length;
    a.sort((a,b) => a-b);

    let head = 0;
    let tail = n-1;

    let min = Math.abs(a[head]+[tail]);

    while(tail >= head){
        let sum = a[tail] + a[head];
        min = Math.min(min, Math.abs(sum));

        if(sum > 0){
            tail--;
        } else {
            head++;
        }
    }

    return min;
}

console.log(nab22([1,4,-3]))
console.log(nab22([-8,4,5,-10,3]))