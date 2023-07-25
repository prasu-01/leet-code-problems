// function d1(s){

//  let set = new Set();
//  let res = '';
//      for(let i=0;i<s.length;i++){
//         let a = s.charAt(i)
//         if(!set.has(a)){
//             set.add(a);
//             res += a;
//         }
//      }
//      return [...set].join('');
//     //  return Array.from(set).join('');
//     // return res;
// }

function d1(s) {
    let set = new Set(s.split(''));
    return [...set].join('')
}


console.log(d1("prasanna"))