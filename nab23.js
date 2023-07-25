function nab23(m,a){
 
    let cnt = 0;
    let s = new Set();

    for(let i=0;i<a.length-1;i++){
        if(s.has(a[i])) continue;
        s.add(a[i]);
        for(let k=i;k<a.length;k++){
            let set = new Set(a.slice(i,k+1));
            console.log(set);
            let max = Math.max(...set);
            if(set.size == k-i+1 && max <= m) {
                cnt++;
                console.log(max, set.size, k-i+1)
            }
            // console.log(i,k);
        }
    }
    return cnt;
}

console.log(nab23(6, [3,4,5,5,2]));