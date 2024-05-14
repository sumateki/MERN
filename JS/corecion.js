/* corecion means conversion which can change datatype
There are 2 types of coercion in JS

1. Implicit Coercion: Type conversioin is done by js 
2. Explicit Coercion: Type conversion is done in code using the inbuilt functions
   like Number(), String(), Boolean(), etc... 

*/
// var num1= prompt('enter num1')
// var num2= prompt('enter num2')
// var res1= num1 + num2
// console.log(res1) //displays 57 becuse it takesit as string

// var res2= Number(num1) + Number(num2) //converts to number
// console.log(res2)


var k = 12 + "" //output is 12 as num 12 is converted to string
console.log(k, typeof(k))

var m = 12+13+""
console.log(m, typeof(m))

var n = "15"*2 //output is 30 s str 15 is converted to num
console.log(n, typeof(n))

var a="hello" + null //its output is null as null is converted to string
console.log(a, typeof(a))

var b=5 + null //output is 5 as null is converted to 0
console.log(b, typeof(b))

var c= 12+ undefined //output is NaN as the undefined cnnot be converted to num
console.log(c, typeof(c))

var c= "hello"+ undefined 
console.log(c, typeof(c))


var c= true + true // 1 + 1 =2, output is 2
console.log(c, typeof(c))


var c= true - false // 1 - 0 =1, output is 1
console.log(c, typeof(c))

var c= false + false // 0 + 0 =0, output is 0
console.log(c, typeof(c))

var c=  false + 10// 0 + 10 =10, output is 10
console.log(c, typeof(c))

var c=  false + "10" //false10 string
console.log(c, typeof(c))

var c=  false - 10// 0 - 10 = -10, output is -10
console.log(c, typeof(c))

var k= 12=="12"  //true boolean---- dat should be eq no need to check datatype
console.log(k, typeof(k))


var k= 12==="12"  //false boolean---- data is same but dtatype is diff
console.log(k, typeof(k))

var k= "true" == true //false boolean ---- string and boolean cannot be same
console.log(k, typeof(k))



//----------------------explicit conversin---------------------------------------
var k= "20"
var ans1= Number(k)
console.log(ans1, typeof(ans1)) //20 number

var k= Number("")
console.log(k,typeof(k))  //0 number

var k= Number(null)
console.log(k,typeof(k)) //0 -------null rep 0

var k= Number(true)
console.log(k,typeof(k))// 1 number

var k= Number(false)
console.log(k,typeof(k))// 0 number

var k= Number(undefined)
console.log(k,typeof(k)) //NaN number

var k= String(25) //25 string
console.log(k, typeof(k))

var k= String(false) //false strig
console.log(k, typeof(k))

var k= String(true) //true string
console.log(k, typeof(k))

var k= String(0) // 0  string
console.log(k, typeof(k))

var k= String(null) //null string
console.log(k, typeof(k))

var k= String(undefined) //undefined string
console.log(k, typeof(k))


var k= Boolean(0) //false boolean
console.log(k, typeof(k))

var k= Boolean(1)
console.log(k, typeof(k))//true boolean 

var k= Boolean(25)
console.log(k, typeof(k)) //true boolean 

var k= Boolean(-25)
console.log(k, typeof(k)) //true boolean 

var k= Boolean(null)
console.log(k, typeof(k)) //false boolean

var k= Boolean("hello")
console.log(k, typeof(k)) //true boolean

console.log(String(undefined))

var inp=7
console.log(out1= ++inp + ++inp + ++inp )
console.log(out1= inp++ + inp++ + inp++ )
console.log(out1= inp++ + ++inp + inp++ )






























