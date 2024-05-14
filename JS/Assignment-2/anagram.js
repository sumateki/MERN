
var str1= "Hello"
var revStr="olleH"
for(var i=str1.length-1; i>=0; i--)
{
    revStr += str1[i]
    if(str1==reverseString(revStr))
    {
        console.log(true)
    }
    else{
        console.log(false)
    }
}

// console.log(true)











