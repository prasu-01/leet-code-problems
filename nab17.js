function nab17(a) {
    let n = a.length;

    if(n == 1) return 0;

    let max;

    if(n%2 == 0){
        max = n/2;
    }
    else {
        max = n/2 + 1;
    }
    let hash = new Map();
    for(let i=0;i<a.length;i++){
        if(hash.has(a[i])){
            let val = hash.get(a[i]);
            hash.set(a[i], val+1);
            if(val+1 > max) return i;
        }
        else {
            hash.set(a[i], 1);
        }
    }

  return -1;
}

console.log(nab17([3,4,3,2,3,-1,3,3]));