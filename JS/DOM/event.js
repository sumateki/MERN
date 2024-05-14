function fun1(){
    // document.getElementById('demo1').style.backgroundColor= 'hotpink'
    document.getElementById('demo1').style.backgroundImage = 'url(Ice-cream.jpg)'
    document.getElementById('demo1').style.backgroundSize = 'cover'
   
}

function fun2(){
    // document.getElementById('demo1').style.backgroundColor= 'lightblue'
    document.getElementById('demo1').style.backgroundImage = 'url(Cake.jpg)'
    document.getElementById('demo1').style.backgroundSize = 'cover'
    
}

function fun3(){
    document.getElementById('demo2').style.background= 'lightblue'
}

function fun4(){
    document.getElementById('demo2').style.background= 'lightpink'
}

function fun5()
{
    document.getElementById('demo3').style.background = 'maroon'
}

function fun6(){
    document.getElementById('demo4').style.background= 'lightyellow'
    //when u copy the text it'll display the below msg
    // document.getElementById('para_demo').innerHTML = 'Text Copied!!'
    document.getElementById('para_demo').style.display= 'block'
}


// when u paste the content it'll automatically applies bg clr
function fun7(){
    document.getElementById('txtarea').style.background = 'pink'
}

function fun8(){
    document.getElementById('inp_id').style.color= 'green'
    var a = document.getElementById('inp_id').value
    document.getElementById('para_id').innerHTML =a
}

function fun9(){
    document.getElementById('inp_id2').style.outline = '2px solid darkgreen'
    document.getElementById('inp_id2').style.borderRadius = '2px'
    // it removes the  inner black border which comes by default
    document.getElementById('inp_id2').style.border = 'none'
}

function fun10(){
    document.getElementById('inp_id2').style.outline = ''
    document.getElementById('inp_id2').style.borderRadius = ''
    document.getElementById('inp_id2').style.border = '2px solid black '
}

function fun11(){
    var a= document.getElementById('slct').value
    document.getElementById('p1').innerHTML += a

    // document.getElementsByTagName('b')[0].style.color = 'maroon'
    
}

function fun12()
{
    // alert('Hey Suma')
    document.getElementById('txtarea2').style.background = 'green'
    document.getElementById('txtarea2').style.color = 'maroon'
}








