function subtract(a, b, c){
    var sub= a-b
    c(sub)

}
subtract(5, 2, function(x){
    console.log(x)
})


//setTimeout()
window.setTimeout(function(){
    console.log("hello")
}, 2000)

//setInterval()
window.setInterval(function(){
    var d= new Date()
    // console.log(d)
    document.getElementById('display-clk').innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
})
console.log('world')


//task
// practice timing events in js setInterval(), setTimeout()
// fetch the index.html part of the url of current  page using bom
// revise bom and dom methods
// display modal box aftr 3sec of website loaded


// function fun1(){
//     alert(12345)
// }


var x= document.getElementById('demo1')
//-------anonymous method----------
// //x.addEventListener(x,y)
x.addEventListener('click', function(){
    x.style.background = 'pink'
})
x.addEventListener('mouseover', function(){
        x.style.border = '3px dotted maroon'
})

//----------callback method--------------
//calling a func as an arg of another func
function fun2(){
    x.style.background = 'green'
}
x.addEventListener('click', fun2)

function fun3(){
    x.style.border = '3px dashed yellow'
}
x.addEventListener('mouseout',fun3)


//anonymous fat arrow
var a= document.getElementById('demo2')
a.addEventListener('click',()=>{
    a.style.background = 'hotpink'
    a.style.color= 'white'
})

//calback func fat arrow
var fun4 = ()=>{
    a.style.border ='2px solid blue'
}
a.addEventListener('mouseover',fun4)










