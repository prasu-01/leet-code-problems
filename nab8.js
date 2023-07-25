function nab8(a){

    if(a.length === 0) return 0;
   
    let m = new Set(a);
    let cnt = 1;
    while(cnt<=a.length){
        if(!m.has(cnt)) return 0;
        cnt++;
    }

    return 1;
}

console.log(nab8([]));