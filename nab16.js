// function nab16(a,b){

//    let stack = [];

//    stack.push([b[0], a[0]]);

//    for(let i=0;i<b.length;i++){
//       if(b[i] ===  1){
//          stack.push([b[i], a[i]]);
//       } 
//       else {
//         let n = stack.length-1;
//         while(stack[n][0] === 1){
//             console.log(stack[n][1], a[i])
//             if(stack[n][1] < a[i]){
//                 stack.pop();
//                 stack.push([b[i], a[i]]);
//             }
//             n--;
//         }
//       }

//    }


//   return stack.length;
// }


function nab16(a,b){

    let down = [];
    let up = [];
    let dir;

    for(let i=0;i<a.length;i++){

        dir = b[i];

        if(dir === 0) {

            while(down.length > 0){
                let d = down.pop();

                if(d > a[i]) {
                    down.push(d);
                    break;
                }
            }

            if(down.length === 0){
                up.push(a[i]);
            }
        }
        else {
            down.push(a[i]);
        }
    }

    return down.length + up.length;
}

console.log(nab16([4,3,2,1,5], [0,1,0,0,0]));