
function nab2(a){
    let b={};
    for(let i=0;i<a.length;i++){
        b[a[i]] = b[a[i]]+1 || 1;
    }

    for(let j=0;j<a.length;j++){
        if(b[a[j]]%2 != 0){
            return a[j];
        }
    }
}

console.log(nab2([9,3,9,3,9,7,9]))