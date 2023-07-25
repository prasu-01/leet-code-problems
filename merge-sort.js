const mergeSort = (a) => {
    const len = a.length;
    if(len === 1){
        return a;
    }

    const mid = Math.floor(len/2);
    const left = a.slice(0, mid);
    const right = a.slice(mid);

    // console.log(left, right)
    return Merge(mergeSort(left), mergeSort(right));
}

const Merge = (left, right) => {
    const res = [];
    let l = 0;
    let r = 0;
    while(l< left.length && r< right.length){
        if(left[l] < right[r]){
            res.push(left[l]);
            l++;
        }
        else{
            res.push(right[r]);
            r++;
        }
    }

    return res.concat(left.slice(l)).concat(right.slice(r));

}

console.log(mergeSort([99,44,6,2,1,5,63,87,283,4,0]));