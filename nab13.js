function nab13(a){
    if(a.length === 3) {
        let p = a[0] * a[1] * a[2];
        return p === -0 ? 0 : p;
    }
    
    a.sort((a,b) => a-b);
    
    let n = a.length - 1;

    let pro = a[0] * a[1] * a[n];

    let pro1 = a[n] * a[n-1] * a[n-2];

    let max = Math.max(pro, pro1);


    return max === -0 ? 0 : max;



    // if(a.length === 3) return a[0] * a[1] * a[2];
    // let pos = [];
    // let neg = [];
    // for(let i=0;i<a.length;i++){
    //     if(a[i] < 0) neg.push(a[i]);
    //     else pos.push(a[i]); 
    // }

    // let max = Number.MIN_VALUE;

    // pos.sort((a,b) => a-b);

    // if(neg.length === 2) {
    //     let pro = neg[0] * neg[1] * pos[pos.length-1];
    //     if(max < pro) max = pro;
    // }

    // let posLen = pos.length;
    // let pro = pos[posLen-1] * pos[posLen-2] * pos[posLen-3];
    // if(max < pro) max = pro;

    // return max;
}

console.log(nab13([-3,1,2,-2,5,6]));
console.log(nab13([-3,0,6]));
console.log(nab13([-3,1,0,-2,6]));