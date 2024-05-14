var x
function fun1(){
    x = setTimeout(callback_fun, 2000)
}

function callback_fun(){
    // document.write("Hey suma, How arev you??")
    document.getElementById('demo1').innerHTML = "Hey suma, How arev you??"
}

function clr_msg(){
    clearTimeout(x)
}



function fun2(){
    setInterval(function(){
        alert('hello')
    },3000)
}



function main_fun(){
    setInterval(()=>{
       var z =  document.getElementById('inp1').value
       document.getElementById('demo2').innerHTML += z
    },3000)
}



function fun3(){
    setTimeout(function(){
        var img_tag = document.createElement('img')
        img_tag.src = 'Cake.jpg'
        img_tag.className ='img_style'
        document.getElementById('demo3').appendChild(img_tag)
        // document.getElementById('demo3').innerHTML=img_tag
    },3000)
}

// function fun3(){
//     setTimeout(()=>{
//         var img_tag = document.createElement('img')
//         img_tag.src = 'Cake.jpg'
//         img_tag.className ='img_style'
//         document.getElementById('demo3').appendChild(img_tag)
//     },3000)
// }

function fun4(m,x){  //m rep btn, x rep div
    // console.log(x)
    // ------to add bgclr to btn-------
    // console.log(m)
    // m.style.background = 'pink' //by using this single line it'll give clr to all the btns
    //instead at a time only one btn can get the clr-- to do that
    var btn_tags = document.getElementsByTagName('button')
    for(var y=0; y<btn_tags.length;y++){
        btn_tags[y].style.backgroundColor = ''
    }
    m.style.backgroundColor = 'pink'

    //
    var div_tags = document.getElementsByClassName('btn-box')
    for(var j=0; j<div_tags.length; j++){
        div_tags[j].style.display = 'none'
    }
    document.getElementById(x).style.display = 'block'
    
}




// setTimeout() -- will not effect rest code
//when u add any timer, from callback queueit'll go to the bom[web APIs], that will check and keep the timer
// aftr the time is complete then it'll goes to callback queue
//event loop acts as an mediator b/w callstack and callback queue
//then goto callsatck
function frst(){
    console.log('first')
}
function scnd(){
    console.log('second')
}
function thrd(){
    console.log('third')
}

frst() //1
setTimeout(scnd, 1000) //3 
thrd() //2

// output is  first third second




