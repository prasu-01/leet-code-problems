function nab14(a){

    if(a.length < 3) return 0;

    a.sort((a,b) => a-b);

    for(let i=0;i<a.length;i++){
        if(a[i] >= 0 && a[i] + a[i+1] > a[i+2]) return 1;
    }

    return 0;
}

console.log(nab14([10,2,5,1,8,20]))
console.log(nab14([10,50,5,1]))