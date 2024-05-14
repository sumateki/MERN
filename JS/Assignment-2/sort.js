
var arr=[3, 2, 1, 4, 5, 45]
document.write(arr.sort())

document.write('<br><br>')


var arr1=[3, 2, 1, 4, 5, 45]
arr1.sort((a,b)=> a-b)
document.write(arr1)

document.write('<br><br>')

var arr2=[3, 2, 1, 4, 5, 45]
var res
for(var i=0; i<arr2.length-1; i++)
{
    if(arr2[i]>arr2[i+1])
    {
        var temp= arr2[i]
        arr2[i] = arr2[i+1]
        arr2[i+1] = temp
    }
}
document.write(arr2)


