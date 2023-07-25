const pro = (a) => {
    let len = a.length;
    let res = new Array(len).fill(1);

    let pro = 1;

    for(let i=0;i<len;i++){
        res[i] *= pro;
        pro *= a[i];
    }

     pro = 1;

    for(let i=len-1;i>=0;i--){
        res[i] *= pro;
        pro *= a[i];

    }

    return res;
}

console.log(pro([-1,1,0,-3,3]))