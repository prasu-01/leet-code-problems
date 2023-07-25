const bub = (a)=> {
    for(let k=0;k<a.length;k++){
        for(let j=0;j<a.length;j++){
            if(a[j] > a[j+1]){
                let tmp = a[j+1];
                a[j+1] = a[j];
                a[j] = tmp; 
            }
        }
    }
    return a;
}

console.log(bub([99,44,6,2,1,5,63,87,283,4,0]));