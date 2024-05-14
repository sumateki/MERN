// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1


var arr=[1,2,3,4,2,4,1,5]
var searchEle =4
let pos=[] //empty array to store  search ele pos

for(var i=0; i<arr.length; i++){
    if(arr[i] === searchEle) 
    {
        pos.push(i) //found ele pushed into pos array
    }
}
if(pos.length > 0) //pos array has some elemnts which were found in arry
{
    document.write(pos) //pos array is not empty, then we print it on the console
}
else{
    document.write(-1) //search ele was not found in the array
}






















