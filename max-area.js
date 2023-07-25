const area = (a) => {
    let max = 0;
    let l=0;
    let r=a.length-1;

    while(l<r){
        let area = (r-l) * Math.min(a[r], a[l]);
        max = Math.max(max, area);

        if(a[l] < a[r]) l++;
        else r--;
    }

    return max;
}

console.log(area([1,8,6,2,5,4,8,3,7]));
console.log(area([1,1]));