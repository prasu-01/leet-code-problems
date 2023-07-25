const rotate = (a) => {
    let len = a.length;
    let left = 0;
    let right = len-1;

    if(len === 1) return a[0];

    // unrotated sorted array
    if(a[left] < a[right]) return a[left];    
    
    return binSearch(left, right, a);

}

const binSearch = (left, right, a) => {

    while(left <= right){

        let mid = Math.floor((right + left)/2);


        if(a[mid] < a[mid-1]) return a[mid];

        else if(a[mid] > a[mid+1])  return a[mid+1];


        else if(a[left] < a[mid]) {
            left = mid+1;
        }
        else if(a[left] > a[mid]){
            right = mid-1;
        }
    }

}

console.log(rotate([4,5,6,7,0,1,2]));