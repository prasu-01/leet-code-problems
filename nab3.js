function nab3(a, k) {

    if(a.length === 0 || a.length === 1) return a;

    while(a.length < k){
        k = k - a.length;
    }
    let n = a.length - k;

    let res = [];
    let cnt =0;
   for(let i=n;i<a.length;i++){
      res[cnt] = a[i];
      cnt++;
   }

   for(let j=0;j<n;j++){
      res[cnt] = a[j];
      cnt++; 
   }

   return res;
}


console.log(nab3([3, 8, 9, 7, 6], 3));
console.log(nab3([1], 5));
console.log(nab3([3, 8, 9, 7, 6], 5));
console.log(nab3([3, 8, 9, 7, 6], 103));