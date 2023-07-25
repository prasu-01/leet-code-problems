const pro = (a) => {
    let curMax = [a[0]];
    let globalmax = a[0];
    let curMin = [a[0]];

    for(let i=1;i<a.length;i++){
       curMax[i] = Math.max(curMax[i-1] * a[i], a[i], curMin[i-1] * a[i]);
       curMin[i] = Math.min(curMin[i-1] * a[i], a[i], curMax[i-1] * a[i]);
       globalmax = Math.max(curMax[i], globalmax);
    }
    return globalmax;
}


console.log(pro([2,3,-2,4]));

console.log(pro([-2,3,-4]));