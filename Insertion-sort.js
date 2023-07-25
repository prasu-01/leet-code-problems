const inst = (a) => {
    let len = a.length;
    for(let i=0;i<len; i++){
        if(a[i] <a[0]){
            a.unshift(a.splice(i,1)[0]);
        }
        else{
            for(let j=1; j<i ;j++){
                if(a[i] < a[j] && a[i] > a[j-1]){
                    a.splice(j,0,a.splice(i,1)[0])
                }
            }
        }
    }
    return a;
}

console.log(inst([99,44,6,2,1,5,63,87,283,4,0]));