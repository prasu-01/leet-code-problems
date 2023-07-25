const grp = (a) =>{
    let grp = {};

    for(let i=0;i<a.length;i++){
        let tmp = a[i].split('').sort().join('');
        if(!grp[tmp]) {
            grp[tmp] = [];
        }
        grp[tmp].push(a[i]);
    }
    return Object.values(grp);
}

console.log(grp(['eat','ate','time','mite']))