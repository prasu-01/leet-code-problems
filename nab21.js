function nab21(a) {

    if(a.length < 3) return 0;

    a.sort((a,b) => a-b);
    let cnt = 0;

    for(let i=0;i<a.length-2;i++){
       for(let k=i+1;k<a.length-1;k++){ 
         for(let j=k+1;j<a.length;j++){
            if(a[i] + a[k] > a[j]){
                cnt++;
            }
        }
       }
    }   
    return cnt;
}

console.log(nab21([10,2,5,1,8,12]))