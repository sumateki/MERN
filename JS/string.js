//alphanumeric string
var x=12345
var y='Suma'
alert(x+y)

//concatenation
var str1="hello "
var str2="suma teki "
var str3= 1402
var res= str1.concat(str2, str3)
alert(res)

//startswith
var str4= "suma teki"
var res2= str4.startsWith('S') //gettung false as it is case-sensitive
alert(res2)

//endswith
var res3= str4.endsWith('ki')
alert(res3)

//trim() --- only leading space and tailing space
var res4= str1.trim() + str2.trim()
alert(res4)

var uname= prompt('enter ur name')
console.log(uname.trim())

//string replace
var str5= "a blue  bottle with the blue liquid is on blue table"
// var res5= str5.replace(/blue/,"green") //replace frst one word only
// var res5= str5.replace('blue',"green") //replace frst one word only
// var res5= str5.replace(/blue/i,"green") //replace even if it is in sensitive
// var res5= str5.replace(/blue/gi,"green") //global replacement and replace even if it is in sensitive
var res5= str5.replace(/blue/g,"green") //global replacement it replaces all blue with green
alert(res5)

//indexOf() and  lastIndexOf()
// var res6=str5.indexOf('t')
var res6=str5.lastIndexOf('x') //shows  -1 when the given char is not in string
alert(res6)


//upper and lower case
var res7= str1.toLowerCase()
var res7= str1.toUpperCase()
alert(res7)

//charAt()
var res8= str1.charAt(2)
alert(res8)

//prompt--- covert lowercase data to uppercase
var data= prompt('Enter any data')
console.log(data.toUpperCase())









