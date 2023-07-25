// const val = (s) => {
    
//     let stack = [];
//     for(let i=0;i<s.length;i++){
//         let ch = s.charAt(i);
//         if(ch === '(' || ch === '{' || ch === '['){
//             stack.push(ch);
//         }
//         else {
//             let top = stack[stack.length-1];
//             if( top=== '(' && ch===')' || top=== '{' && ch==='}' || top=== '[' && ch===']'){
//                 stack.pop();
//             }
//         }
//     }

//  return stack.length === 0;
    
// }



// other way of doing this

const val = (s) => {
    
    let stack = [];
    let hashMap = { "(" : ")", "{": "}", "[": "]"};

    for(let i=0;i<s.length;i++){
        let ch = s.charAt(i);
        if(hashMap[ch]){
            stack.push(ch);
        }
        else if(hashMap[stack.pop()] !== ch){
            return false;
        }
    }

    return stack.length === 0;
    
}

console.log(val('[(){}]'));