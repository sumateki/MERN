//access "p" from html
var a= document.getElementById('demo1')
// console.log(a)
// // alert(a) // it cannot take html data

//so to take html tag use '.innerHTML'
var a= document.getElementById('demo1').innerHTML
// alert(a)

//to take only data use '.innerText'
var a= document.getElementById('demo1').innerText
// alert(a)

//chnge innerhtml  oldpara to newpra using EVENT HANDLING (onclick)
function fun1()
{
    //purpose is to assign data. so, use assign(=) operator
    document.getElementById('demo2').innerHTML= '<b>New_Para</b>'
}

//read input and display in alert
function fun2()
{
    //input tag has no closing tag so cannot use innetHTML
    // instead use value property to get only value from input
    //if u donot use value then it'll display entire input tag
    var b= document.getElementById('inp1').value
    // alert(b)
    // to get the user entered name along with 'username is' text use '+='
    document.getElementById('demo3').innerHTML += b
}

//when u click on btn img will be displayed
function fun3()
{
    document.getElementById('div1').innerHTML += "<img src='../../HTML & CSS/img/tick-blue.png' class='img_style'>"
    
}

//getting ele by class name
function fun4()
{
    var x= document.getElementsByClassName('heading_style')
    console.log(x)
    // //style used to styling  
    // use it only for individual element styling 
    // x[0].style.color = 'blue'
    // x[0].style.backgroundColor= 'yellow'
    // x[1].style.color = 'pink'
    // x[2].style.color = 'olive'

    //for multiple data styling u can use for-loop
    // to apply same styling  for all data of same cls
    for(var i=0; i<x.length; i++)
    {
        x[i].className += " new_style"  //using += to access heading_style and new_style classes with space
    }

}








