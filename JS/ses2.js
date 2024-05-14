// // var p_tag = document.getElementById('demo1') 
// // console.log(p_tag)

// // console.log(document.getElementById('demo1').innerHTML)
// // document.getElementById('demo1').innerHTML = 'para 2'  //update old data to newdata

// // var x= document.getElementById('demo2') //can take entire child tag (b tag, i tag and data)
// // console.log(x)

// // var y=document.getElementById('demo3').innerHTML //for reading tags too
// // alert(y)

// // var y=document.getElementById('demo3').innerText //for reading text only
// // alert(y)

// // numbers
// var num1=10
// var num2=20
// var final_ans= num1 + num2
// document.getElementById('ans1').innerHTML=final_ans

// //string

// var a="2"
// var b="14"
// var c= a + b
// document.getElementById('ans1').innerHTML=c



// //string doesn't concate with numbers.. 
// //it automatically takes val 1 nd 2 as strings as we're take frst val to display is string
// var val1=5
// var val2=7
// var val3= "hello"
// // var final_ans= val3 + val1 +val2
// document.getElementById('ans1').innerHTML=val3 + val1 +val2

// // it can calculate val 11 and 22 as we take first nubers
// var val11=5
// var val22=7
// var val32= "hello"
// // var final_ans= val11 +val22 +val32 
// document.getElementById('ans1').innerHTML=val11 +val22 +val32


// // prompts
// var data1=prompt('enter number 1')
// var data2=prompt('enter number 2')
// var ans= data1/data2
// document.getElementById('res').innerHTML=ans

// //button--- old btn to newbtn
// document.getElementById('btn1').innerHTML='new button'


// take img in html and replace that img using js code

// document.getElementById('img1').innerHTML= ''


//types of strings--- inbuilt func
var a= 'hello'
var b=5
var c="7"
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(a.length)
console.log(a[0])

// slice
var slc=a.slice(1) //get the string from pos 1
console.log(slc) //ello

var str= "hello Suma"
var res= str.slice(1,9) //from pos1 to pos 9-1
console.log(res)

//slicing with negative indexing
var str2= 'hello suma how are you?'
console.log(str2.slice(-14,-3))// from -3 pos to n-1(-13)

//substring
var str3= 'hello suma teki'
console.log(str3.substring(0,4)) //from pos 0 to n-1(3)
console.log(str3.substring(-4)) //neg indexing will not work in substring

//substr
var str4= 'hello suma teki'
console.log(str4.substr(0,4)) //from pos 0 to n-1(3)
console.log(str4.substr(-4)) //shows last 4 digits

//null and undefined
var s
console.log(s) //shows undefined as we are'nt initialized

var sa= null
console.log(sa) // assigning null to var



















