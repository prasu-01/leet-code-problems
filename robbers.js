// its a DP prob

// iterate over each house

// maxloot at a house is (maxloot of two houses before + loot of cur house) or max loot of prev house


const robbers = (a) => {
  
    if(a.length === 1) {
        return a[0];
    }
    if(a.length === 2) {
        return Math.max(a[0], a[1]);
    }
    let max = [a[0], Math.max(a[0],a[1])];

       for(let i=2; i<a.length; i++){
          max.push(Math.max(max[i-2]+a[i], max[i-1]));
       }

       return max.pop();
}


console.log(robbers([2,1,1,2]))