function isPeak(a, num, i,  j)
{  
    if (a[i] > num || a[i+1] > num)
        return false;

    else if (a[j] > num ||  a[j-1] > num)
        return false;

    return true;
}
 

 
function printPeaks( arr, n)
{
 
    let result = [];
    for (var i = 0; i < n; i++) {
        if (isPeak(arr, arr[i], i - 2, i + 2))
            result.push(arr[i])
    }

  return result;
}
var arr=[16,1,6,3,2,11,5,1,10];
 
console.log(printPeaks(arr, 9));