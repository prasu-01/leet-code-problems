// function nab15(s){
 
//     let stack = [];
//     for(let char of s){
//         let top = stack.length - 1;
//         if(char === '(' || char === '{' || char === '['){
//             stack.push(char);
//         }
//         else if((char === '}' && stack[top] === '{') || (char === ')' && stack[top] === '(') || (char === ']' && stack[top] === '[')){
//             stack.pop();
//         }
//         else return 0;
//     }
//     return stack.length === 0 ? 1 : 0;
// }


function nab15(s){
 
    let stack = [];
    for(let char of s){
        let top = stack.length - 1;
        if(char === '('){
            stack.push(char);
        }
        else if(char === ')' && stack[top] === '('){
            stack.pop();
        }
        else return 0;
    }
    return stack.length === 0 ? 1 : 0;
}

// console.log(nab15("{[(){}])]]()]}"));
console.log(nab15("(()(())())"));