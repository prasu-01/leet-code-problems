function dup(a) {

    let s = new Set();
    for(let i=0;i<a.length;i++){
        if(s.has(a[i])){
            console.log(a[i]);
        } else {
            s.add(a[i]);
        }
    }
}

dup([1,2,3,4,5,3,2,1])