const pivot = (a) => {
    let right = 0;
    for(let k=0; k<a.length; k++){
        right += a[k]
    }

    let left = a[0];

    for(let p=1;p<a.length;p++){
        if(right - a[p] - left === left){
            return p;
        }
        left += a[p];
    }
    return -1;
}


console.log(pivot([1,7,3,6,5,6]))