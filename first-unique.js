// const uni = (s) => {
//     let set = new Set();
//     let set2 = new Set();

//    for(let k in [...s]) {
//     console.log(set.has(s.charAt(k)))
//       if(!set.has(s.charAt(k))){
//          set.add(s.charAt(k));
//       } 
//       else {
//          set2.add(s.charAt(k));
//       }
//    }

//    console.log(set, set2)
//    set.forEach((e) => {
//      if(set2.has(e)) return e;
//    })
//    return -1;
// }


// const uni = (s) => {
//     let fre = [];
//     for(let t=0;t<26;t++){
//         fre[t] = 0;
//     }
//     let a = 'a';
//     for(let k in [...s]){
//         fre[s.charCodeAt(k) - a.charCodeAt(0)]++;
//     }
//     for(let p in [...s]){
//        if(fre[s.charCodeAt(p) - a.charCodeAt(0)] == 1){
//          return p;
//        }
//     }
// }

const uni = (s) => {
    let seen = new Set();
    let repeated = new Set();

    for(let k in [...s]){
        if(seen.has(s.charAt(k))){
            repeated.add(s.charAt(k));
        }
        else if(!seen.has(s.charAt(k))){
            seen.add(s.charAt(k))
        }
    }
    console.log(seen, repeated, [...seen])
    return [...seen][0];
}

console.log(uni('lleetcode'))


