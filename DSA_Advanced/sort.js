// --------- BUBBLE SORT -----------
function BubbleSort(arr){
    var n = arr.length;
    for(var i=0; i<n; i++){
        for(var j=0; j<n-1; j++){
            if(arr[j] > arr[j+1]){
                //we need to swap data
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                console.log("Sorting the elements: ",arr)
            }
        }
    }
    console.log("Bubble sort: ",arr)
}

BubbleSort([64, 25, 55, 34, 6])



// -------------- SELECTION SORT ---------------

function SelectionSort(arr){
    var n= arr.length
    for(var i=0; i<n; i++){
        var min = i // very frst char considered as min
        for(var j=i+1; j<n; j++){  //j= i+1 --> j will not consider the 0th value
            if(arr[j] < arr[min]){
                min = j
                // console.log('sorted ele: ', min)
            }
        }
        var temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
        console.log('sorted ele: ', arr)
    }
    console.log('Selection Sort: ', arr)
            
}

SelectionSort([3,5,1,6,7,2,13,9,8,4,11])




// -------------- INSERTION SORT -----------------
function InsertionSort(arr){
    var n= arr.length
    for(var i=1; i<n; i++){
        var key = arr[i]
        var j = i - 1
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]  //1 becomes 4
            j = j - 1
        }
        arr[j+1] = key  // 
    }
    console.log('Insertion Sort: ',arr)
}
var arr = [4,1,6,2,7,23,11,3,9,8]
InsertionSort(arr)

// i = 1
// arr[i] = 1
// key = arr[i]

// j = i - 1  --> 1-1=0  --> j=0
// arr[j] = 4

// arr[j] > key
// 4 > 1  -->true
// swap it
// 1 4


// -------------- QUICK SORT ----------------
function QuickSort(arr){
    //base condition if array has only 1 ele
    if(arr.length < 2){
        return arr
    }
    //some data in array
    var pivot_ele = arr[arr.length-1]  //taking last ele as pivot ele in arr
    var left_arr = []
    var rgt_arr = []
    for(var i=0; i<arr.length-1; i++){ //i<arr.len-1 ---> no need to count pivot
        if(arr[i] < pivot_ele){
            left_arr.push(arr[i])
        }
        else if(arr[i] > pivot_ele){
            rgt_arr.push(arr[i])
        }

    }
    return QuickSort(left_arr).concat(pivot_ele, QuickSort(rgt_arr))
    // console.log('Quick Sort: ',arr)
}

console.log('Quick Sort: ', QuickSort([9,1,8,2,7,3,5,6,4]))

// console.log('Quick Sort: ', QuickSort([9])) //if cond in 81th line



//------------ BUCKET SORT -------------
function BucketSort(arr,n){
    if(n<=0){
        return
    }
    //creating buckets---> emptyb buckets
    var buckets = new Array(n)
    for(var i=0; i<n; i++){
        buckets[i] = []
    }

    //adding data into empty bckets
    for(var i=0; i<n; i++){
        var index = arr[i] * n  //curr ele * length of arr  --gives index of bucket to put the ele into it
        var floor_index = Math.floor(index)
        buckets[floor_index].push(arr[i])
    }

    //sort the indivdual buckets  -- use any sorting method
    for(var i=0; i<n; i++){  
        buckets[i].sort(function(a,b){return a-b})
    }

    //merge them
    var final_index = 0
    for(var i=0; i<n; i++){  //-- go inside loop
        for(var j=0; j<buckets[i].length; j++){  //-- individual
            arr[final_index++] = buckets[i][j]   //final_index++  --> initially final_index is 0 so we inc it
            
        }
    }
    console.log("Sorting the elements: ",arr)
}

var arr = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.12, 0.44]
var n = arr.length
// console.log('Bucket Sort: ',BucketSort(arr,n))
BucketSort(arr,n)









