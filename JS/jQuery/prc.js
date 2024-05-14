// // what will be the jquery equivalent of the following
// var para = document.createElement('p')
// var textNode = document.createTextNode('Hello World')
// para.appendChild(textNode)

// // options:
// 1. $('<p>').elem('Hello World')
// 2. $('p').html('Hello World')
// 3. $('<p>').html('Hello World')
// 4. $('<p>').text('Hello World')



// // what will be the jquery equivalent of the following
// parentElem.appendChild(childOne)
// parentElem.appendChild(childTwo)
// parentElem.appendChild(childThree)

// // options:
// 1. parentElem.appendChild(childOne, childTwo, childThree)
// 2. parentElem.appendChild(childOne); parentElem.appendChild(childTwo); parentElem.appendChild(childThree); 
// 3. parentElem.append(childOne, childTwo, childThree)
// 4. parentElem.append(childOne); parentElem.append(childTwo); parentElem.append(childThree); 




// // HTML Code
// <p>First Para</p>
// <p>Second Para</p>
// <p>Third Para</p>
// <p>Fourth Para</p>

// //jQueryCode
// $('p').html("New Para")

// What will be the above code do?
// // options:
// 1. replace first paragraph content to "New Para"
// 2. replace last paragraph content to "New Para"
// 3. replace all paragraphs to "New Para"
// 4. throw an error

// // HTML Code
// <p>First Para</p>
// <p>Second Para</p>
// <p>Third Para</p>
// <p>Fourth Para</p>

// //jQueryCode
// $('p').click(function(){
//     alert('clicked')
// })

// what will the above coe do?
// 1. add click event to the frst paragraph
// 2. add click event to all the paragraphs
// 3. add click event to lat paragraph
// 4. throw an error

// //how do u handle error in GET request usiing jQuery
// 1. $.get(URL,callback).fail(callback)
// 2. $.get(URL,callback).catch(callback)
// 3. $.get(URL,callback).throw(callback)
// 4. none of the above


var div1= document.getElementById('div1')
div1.innerHTML = "Image-slider : -"

var div2 = document.createElement('div')
div2.id= 'div2'

// var backward= document.getElementById('bckwrd')
// var forward= document.getElementById('frwrd')
function  back_btn(){
    
}
var img_tag = document.createElement('img')
img_tag.src = 'nature-1.jpeg'
img_tag.alt = 'nature-1'
img_tag.id = 'img_style'

// div2.appendChild(backward,img_tag,forward)
div2.appendChild(img_tag)

div1.appendChild(div2)


























