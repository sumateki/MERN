//getElementsByTagName ----- used to call all the tags(which is passed)

//for immediate action use this
// var x= document.getElementsByTagName('p')
// console.log(x)
// for(var j=0; j<x.length; j++){
//     x[j].style.color= 'blue'
// }

//for event handling action usw  this
function fun1(){
    var x= document.getElementsByTagName('p')
    console.log(x)
    for(var j=0; j<x.length; j++){
        // x[j].style.color= 'blue'
        x[j].style.backgroundColor= 'olive'
        x[j].style.padding= '10px'
    }
    x[0].style.color= 'pink'
    x[1].style.color= 'brown'
    x[2].style.color= 'blue'
}



function fun2(){
    // to call everything means child n grand child and all use spce in b/w (.box b)
    // var y= document.querySelectorAll('.box b') //descendant selector( )
    
    // to call only direct childs(<b>) for that use '>' which rep direct child
    var y= document.querySelectorAll('.box > b') //child selector(>)
    console.log(y)
    for(var h=0; h<y.length; h++){
        y[h].style.color= 'red'
    }
    // we can also apply styling
    document.querySelector('.box').style.backgroundColor= 'yellow'
}


// querySelector --- will select only one entry at a time
//               --- style only applies to frst h1
// document.querySelector('h1').style.color= 'yellowgreen'

//querySelectoreAll ---- applies to all h1
//                  ---- select all entries 
//                  ---- must use for loop
var n= document.querySelectorAll('h1')
for(var m=0; m<n.length; m++){
    n[m].style.color= 'yellowgreen'
}


//getAtrribute() and setAttribute()

//getAttribute() -- already present in html we are getting it
function fun3(){
    // to get href use getAttribute()
    // var a= document.getElementById('demo1').getAttribute('href')
    // alert(a)

    //Link1 changes to given color
    // var a= document.getElementById('demo1').getAttribute('clr')
    // document.getElementById('demo1').style.color= a

    var a_tag= document.getElementById('demo1').getAttribute('class')
    document.getElementById('demo2').className += " "+a_tag
}

//setAttribute(attribute,value) --- we are setting it
function fun4(){

    // document.getElementById('img_id1').setAttribute("src","../../HTML & CSS/img/tick-blue.png")
    
    //u can also add img with clsname but u hve to use indexing
    document.getElementsByClassName('img_style')[0].setAttribute("src","../../HTML & CSS/img/tick-blue.png")
}

function fun5(){
    var z= document.querySelectorAll('.link_div a')
    var b=[]
    for(var i=0; i<z.length; i++)
    {
        z[i].setAttribute('href','https://fontawesome.com/')
        b.push(z[i].getAttribute('title'))
    }
    // document.write(b)
   document.getElementById('para').innerHTML=b
    
    

    // document.getElementsByClassName('anchr')[0].setAttribute('href','https://fontawesome.com/')
    // document.getElementsByClassName('anchr')[1].setAttribute('href','https://fontawesome.com/')
    // document.getElementsByClassName('anchr')[2].setAttribute('href','https://fontawesome.com/')
}









