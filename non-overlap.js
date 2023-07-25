const overlap = (a) => {

    a.sort((a,b) => {
        return a[0]-b[0];
    });

    let i=1;
    let j=0;

    while(i< a.length){
        if(a[i][0] < a[j][1]){
           let remove = a[i][1] > a[j][1] ? a[i] : a[j];
            
        }
    }
}

console.log(overlap([[1,100], [1,2], [3,4], [2,3]]));