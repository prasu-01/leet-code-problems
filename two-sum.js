const two = (a,t) => {
    let hashMap = new Map();
    for(let i=0;i<a.length;i++){
        if(hashMap.has(a[i]))  return [hashMap.get(a[i]), i];
        else {
            hashMap.set(t-a[i], i);
        }
    }
    return false;
}

console.log(two([2,7,11,15], 9));
console.log(two([3,2,4], 6));