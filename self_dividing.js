const self = (n) => {
    let k = n;
   while(k != 0){
      let div = k % 10;
      if(k === 0 || n % div !== 0){
        return false;
      }
      k = parseInt(k/10);
   }
   return true;
}


console.log(self(128))