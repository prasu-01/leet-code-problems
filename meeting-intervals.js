const meet = (a) => {

    let start = [];
    let end = [];

    for(let i=0;i<a.length;i++){
        start.push(a[i][0]);
        end.push(a[i][1]);
    }

    start.sort((a,b) => a-b);
    end.sort((a,b) => a-b);

    let i=1;
    let j=0;

    while(i < a.length){
        if(start[i] < end[j]) return false;
        else{
            i++;
            j++;
        }
    }
    return true;
}

console.log(meet([[25,30], [5,10], [15,20]]))