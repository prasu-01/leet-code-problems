const sel = (a) => {
    let len = a.length;

    for(let i=0;i<len;i++){
        let minInd = i;
        let minVal = a[i];

        for(let j=i+1;j<len;j++){
            if(a[j]< a[minInd]){
                minVal = a[j];
                minInd = j;
            }
        }

        let tmp = a[i];
        a[i] = minVal;
        a[minInd] = tmp;
    }
    return a;

}

console.log(sel([99,44,6,2,1,5,63,87,283,4,0]));