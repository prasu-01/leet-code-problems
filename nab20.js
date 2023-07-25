function nab20(a){

    let set = new Set();
    for(let i=0;i<a.length;i++){
        set.add(Math.abs(a[i]));
    }

    return set.size;
}

console.log(nab20([-5,-3,-1,0,3,6]))