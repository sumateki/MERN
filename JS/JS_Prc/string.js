//Extracting string methods
var text = 'Sai Suma Sri Teki'
document.getElementById('demo').innerHTML = text.charAt(2)
document.getElementById('demo1').innerHTML = text.charCodeAt(7)
document.getElementById('demo2').innerHTML = text.at(5)
document.getElementById('demo3').innerHTML = text[6]


//extracting string parts
let myList = 'Kalyani, Suma, Lohith, Thanu, Hanshu'

// SLICE()  ---- slice(start, end)
// let extractList = myList.slice(8,15)
// document.getElementById('part1').innerHTML =  extractList
document.getElementById('part1').innerHTML =  myList.slice(8,15)
document.getElementById('part1').innerHTML =  myList.slice(8)  //prints rest of the elemts from 8th position

//If a parameter is negative, the position is counted from the end of the string:
document.getElementById('part1').innerHTML = myList.slice(-14)

//This example slices out a portion of a string from position -12 to position -6:
document.getElementById('part1').innerHTML = myList.slice(-14, -8)


// SUBSTRING() ---- substring(start, end)
//substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring()
document.getElementById('part2').innerHTML = myList.substring(9, 13)
document.getElementById('part2').innerHTML = myList.substring(9) // will slice out the rest of the string


// SUBSTR() ----- substr(start, length)
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
document.getElementById('part3').innerHTML = myList.substr(15, 22)
document.getElementById('part3').innerHTML = myList.substr(15) // will slice out the rest of the string

//If the first parameter is negative, the position counts from the end of the string.
document.getElementById('part3').innerHTML = myList.substr(-3)


