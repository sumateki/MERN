// creating html element via js
//using createElement
function fun1(){
    var li_tag= document.createElement('li')
    var li_txt= document.createTextNode('xyz')
    // console.log(li_tag,li_txt)
    // to add nwely created txt to newly created tag
    li_tag.appendChild(li_txt)
    // console.log(li_tag)
    document.getElementById('list1').appendChild(li_tag)
}

// by clicking on btn 1 single time we're  getting 'n' no.of images at a time
//not adding manually
function fun2(){

    for(var j=1; j<=3; j++){
        var img_tag= document.createElement('img')
        // console.log(img_tag)
        img_tag.src = 'Cake.jpg'
        img_tag.className= 'img_style'
        // console.log(img_tag)
        document.getElementById('img_div').appendChild(img_tag)
    }
}
// we can do this without adding addling btn also
// fun2()
// just by calling this automatically the images will displayed


//adding data manually
function fun3(){
    var img_data= ['Ice-cream.jpg','Cake.jpg','Ice-cream.jpg']
    for( var i=0; i<img_data.length; i++){
        var img_tag= document.createElement('img')
        img_tag.src= img_data[i]
        document.getElementById('img_div2').appendChild(img_tag)
    }
}
fun3()

// removechild() can only removes only 1 child at a time
function fun4(){
    var ul= document.getElementById('list2')
    var temp_var= ul.childNodes[0]
    // var temp_var= ul.childNodes
    // console.log(temp_var)
    ul.removeChild(temp_var)

    // to remove entire list just use
    // ul.remove()
}



function fun5(x){
    document.getElementById(x).remove()
}

// remove child(row) via parent
function rem_row(){
    var x= document.getElementById('child_btn')
    // console.log(x.parentNode.parentNode)
    var row= x.parentNode.parentNode
    // console.log(row.parentNode)
    row.parentNode.removeChild(row)
}







