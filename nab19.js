function nab19(n,m) {

    // let map = new Map();

    // for(let k=0;k<n;k++){
    //     map.set(k,1);
    // }

    // let i = 0;
    // let cnt = 0;
    // while(map.has(i) && map.get(i) != 0){
    //     map.set(i,0);
    //     cnt++;
    //     i = (i+m)%n;
    // }
    // return cnt;

    if(n==1) return n;
    if(n==m) return 1;

    let a = n; 
    let b = m;

    let tmp;
    while(b != 0){
        tmp = b;
        b = a % b;
        a = tmp;
    }

    return n/a;
}

console.log(nab19(10,4));