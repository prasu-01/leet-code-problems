function nab18(a){

    let sum = [];
     let hash = new Map();
     for(let i=0;i<a.length;i++){
        if(!hash.has(a[i])){
           let res = getCnt(a[i], a);
           sum[i] = res;
           hash.set(a[i], res);
        }
        else {
            sum[i] = hash.get(a[i]);
        }
     }

     return sum;
}


function getCnt(n, a){
    let cnt = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] != 0 &&  n/a[i] >= 1 && n%a[i] == 0){
            cnt++;
        }
    }
    return a.length - cnt;
}


console.log(nab18([3,1,2,3,6]));