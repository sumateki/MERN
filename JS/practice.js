document.write(parseInt('123abc'))
document.write(Number('123abc'))
document.write("----------------------<br>")

var num1= 123.4567
document.write(typeof num1.toFixed(2))

document.write("----------------------<br><br>")

document.write(parseFloat(10))

document.write("----------------------<br><br>")

var str= ' hello world '
str.trim()
document.write(str)

document.write("----------------------<br><br>")
var str1= 'mo tu  we th fr sa su'
console.log(str1.slice(6,10))

console.log(undefined==null)
console.log(undefined===null)

console.log(!!"false"== !!"true2")


//count no.of 3's in the givn arry
var count= 0
var arr1= [1,2,3,3,4,2,5,4,6,3,4,3,2,1,4,3,2,4]
for(var j=0; j<arr1.length; j++)
{
    // document.write(arr1[j]+'<br>')
    if(arr1[j]==3)
    {
        // document.write(arr1[j]+'<br>')
        count++
    }
    
}
document.write("Count is: "+count+"<br><br>")


//read array n trim it
var str_data= [" abc "," def "," ghi "]
for(var i=0; i<str_data.length; i++)
{
    document.write(str_data[i].trim()+"<br><br>")
}


//pattern prgrm
for(var i=10; i>=2; i--){
    // document.write(i+"<br>")
    var str=''
    for(var j=1; j<=i; j++)
    {
        // document.write(j+"<br>")
        str=str+j   
    }
    document.write(str+"<br>")
}
document.write('<br>')
// i     j     i
//i=10  j=1 to 10   i--
//i=9   j=1 to 9    i--
//i=8   j=1 to 8    i--
//i=7   j=1 to 7    i--
//i=6   j=1 to 6    i--
//i=5   j=1 to 5    i--
//i=4   j=1 to 4    i--
//i=3   j=1 to 3    i--
//i=2   j=1 to 2    i--



////count no.of vowels 
//2func   --- 1 func- prompt using
//        --- 2 func- return vowels count

// function vowelfunc(str){
//     var vwl_count=0
//     for(var j=0; j<str.length; j++)
//     {
//         if(str[j]=='a'|| str[j]=='e'|| str[j]=='i'|| str[j]=='o'|| str[j]=='u')
//         {
//             vwl_count++
//         }
//     }
//     return vwl_count
// }

// function promptVowel(){
//     var userdata= prompt("Enter any word")
//     var result= vowelfunc(userdata.toLowerCase())
//     document.write("No.of vowels are: "+result+"<br>")
// }
// promptVowel()



//array inside obj inside array
//from arr1 print the sq of even num
//from arr2 print cube  of odd num
//from arr3 find prd of all ele present in that array
//from strings print the string which is not a vowel
//-------------HINT---------------
//for {} -- use for-in loop
//for [] -- use nrml for loop

var numbers=[
    {
        'array1' : [1,2,3,4,5,6,7,8,9,10]
    },
    {
        'array2' : [1,2,3,4,5,6,7,8,9,10]
    },
    {
        'array3' : [1,2,3,4,5,6,7,8,9,10]
    },
    {
        'strings' : ['a','b','c','i','o','u']
    }
]
//from arr1 print the sq of even num
for(var keys in numbers[0]){
    // document.write(numbers[0][keys])
    if(keys === 'array1')
    {
        for(var k=0; k<numbers[0][keys].length; k++){
            if(numbers[0][keys][k] % 2 === 0)
            {
                document.write(numbers[0][keys][k] * numbers[0][keys][k] +' ')
            }    
        }
    }
}
document.write('<br><br>')

//from arr2 print cube  of odd num
for(var keys in numbers[1]){
    // document.write(numbers[1][keys])
    if(keys === 'array2')
    {
        for(var k=0; k<numbers[1][keys].length; k++){
            if(numbers[1][keys][k] % 2 != 0)
            {
                document.write(numbers[1][keys][k] * numbers[1][keys][k] * numbers[1][keys][k] +' ')
            }    
        }
    }
}
document.write('<br><br>')

//from arr3 find prd of all ele present in that array
for(var keys in numbers[2]){
    // document.write(numbers[2][keys])
    if(keys === 'array3')
    {
        var prd=1
        for(var k=0; k<numbers[2][keys].length; k++){
             prd *=  numbers[2][keys][k]
        }
        document.write(prd +' ') 
    }
}
document.write('<br><br>')

//from strings print the string which is not a vowel
for(var keys in numbers[3])
{
    if(keys === 'strings')
    {
        for(var k=0; k<numbers[3][keys].length; k++){
            var enteredString= numbers[3][keys][k].toLowerCase()
            if(enteredString !== 'a' && enteredString !== 'e' && enteredString !== 'i' && enteredString !== 'o' && enteredString !== 'u')
            {
                document.write(numbers[3][keys][k] + ' ')
            }
        }
    }
}




var marr= [1,2,3,4,5]
console.log(marr.toString())


var output= function(x)
{
    delete x
    return x
};
console.log(output(9))

var dummy= true
console.log(dummy+0)
console.log(dummy+ "xyz")
console.log(dummy+true)
console.log(dummy+false)


// for( var i=0; i<5; i++){
//     setTimeout(function()
//     {
//         console.log(i)
//         document.write(i)
//     },1000)
// }


var marr1= [1,2,3]
var marr2= [4,5,6]
marr1.concat(marr2)
console.log(marr1)


var marr3= [10, 11, 22, 33, 13]
var pos= 5
console.log(marr3[pos])



//1. Create live alert btn
var a= document.getElementById('div1')
var b= document.getElementById('span_id')
//funcyion to show alert box
function toOpen(){  
    a.style.display= 'block'  
}
//funcyion to hide alert box
function toClose(){
    a.style.display= 'none'
}
//add a click event listener to alert btn
b.addEventListener('click', toClose)



//2. create an accordion with js
var btn= document.querySelectorAll('.acr_btn')
var cnt= document.querySelectorAll('.acr_cls')

btn.forEach(function(button, index){
    button.addEventListener('click', function(){
        if(cnt[index].style.display === 'block'){
            cnt[index].style.display = 'none'
        }
        else{
            //close all other opn sections
            cnt.forEach((content, contentIndex)=>{
                if(contentIndex !== index){
                    content.style.display = 'none'
                }
            })
            //open the clicked section
            cnt[index].style.display = 'block'
        }
    })
})

//3. convert month name to a no.of days i.e, January : 31 days



//4. Take 3 sides of the  triangle as i/p from user and check the trainagleis which triangle.
function fun4(){
    var a= document.getElementById('text1').value
    var b= document.getElementById('text2').value
    var c= document.getElementById('text3').value

    document.getElementsByClassName('inptxt')
    if(a==b && b==c && a==c){
        document.getElementById('demo4').innerHTML += ' Equilateral Triangle'

    }
    else if(a==b || b==c || a==c){
        document.getElementById('demo4').innerHTML += ' Isosceles Triangle'
    }
    else{
        document.getElementById('demo4').innerHTML += ' Scalene Triangle'
    }
}

























