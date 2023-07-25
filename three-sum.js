const three = (a) => {
    a.sort((a,b) => a-b);
    let res = [];

    for(let i=0;i<a.length;i++){
        let l=i+1; 
        let r=a.length-1;
        let target = 0 - a[i];

        if(i>0 && a[i] === a[i-1]){
            continue;
        }
        while(l < r){
            let subSum = a[l] + a[r];
            if(subSum === target){
                res.push([a[i], a[l], a[r]]);
                l++;
                while(a[l] === a[l-1]) l++;
            } 
            else if(subSum < target) l++;
            else r--;
        }

    }

    return res;
}

// console.log(three([-1,0,1,2,-1,-4]));

// console.log(three([0,1,1]));

console.log(three([-1,0,1,2,-1,-4,-2,-3,3,0,4]));