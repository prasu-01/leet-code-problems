function nab6(a){
    let b = new Set(a);
    let cnt = 1;
    while(b.has(cnt)){
       cnt++;
    }
    return cnt;
}

console.log(nab6([2,1,5,4]))