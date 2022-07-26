 const cap = (w) => {
    let cnt = 0;
    let z = 'Z';
    console.log([...w])
    for(let c in [...w]){
        if(z.charCodeAt(0) - w.charCodeAt(c) >= 0){
            cnt++;
        }
    }
    if(cnt === 0 || cnt === [...w].length || (cnt === 1 && z.charCodeAt(0) - w.charCodeAt(0) >= 0)){
        return true;
    }
    return false;
 }


 console.log(cap('USa'))