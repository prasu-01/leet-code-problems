

function move(a){
    let j = 0;
   for(let i = 0; i< a.length; i++) {
      if(a[i] !== 0){
        console.log("before", a)

        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
        j++;
        console.log( "after",a)

      }
   }
   return a;
}

console.log(move([0,1,0,3,12]));

// [1,3,0,12,0,2]