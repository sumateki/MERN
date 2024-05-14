//--------- LINEAR SEARCH ------------

function LinearSearch(arr, key){
    var n = arr.length
    for(var i=0; i<n; i++){
        if(arr[i] === key){
            return `Element is ${arr[i]} at ${i}th index`
        }
    }
    return -1 //if ele is not found
}
var a = [11,12,13,14,15,16,17,18,19,20]
var b = 16
console.log(LinearSearch(a,b))



// ---------- BINARY SEARCH ----------
// with recursive methd
function BinarySearch(arr, key, start, end){
    if(start > end){
        return false
    }
    
    var mid = Math.floor((start+end)/2) 

    if(arr[mid] == key){
        return true
    }
    else if(arr[mid] < key){
        return BinarySearch(arr, key, mid+1,end)

    }
    else if(arr[mid] > key){
        return BinarySearch(arr, key, start, mid-1)
    }
    

}

var main_arr =[14, 23, 11, 27, 34, 12, 5, 3, 10]
// main_arr.sort()
// var main_arr = [1,3,5,6,7,8,9]
var key = 27
if(BinarySearch(main_arr, key, 0, main_arr.length-1)){
    console.log("Element found : ",key)
}

else{
    
console.log('element not found')
}



// with iterative method
function ItertiveFunction(arr, y){
    var start = 0
    var end = arr.length-1

    //loop
    while(start <= end){
        var mid = Math.floor((start+end)/2)
        //condition
        if(arr[mid] == y){
            return true
        }
        else if(y > arr[mid]){
           start = mid + 1
        }
        else if(y < arr[mid]){
            end = mid - 1
        }
    }
    return false
}

var arr = [2,3,4,9,11,24]
var y = 101;

if(ItertiveFunction(arr, y,0, arr.length-1)){
    console.log("Element is:- ",y)
}
else{
    console.log("Element not found ")
}
