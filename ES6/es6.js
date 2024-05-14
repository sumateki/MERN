// let  -- block scope
let a = 10
console.log(a)
if(a == 10){
    let a = 50  //only accessible to this block only
    console.log('value of a inside block', a)
}
console.log(a) // accessing initially assigning val


// const
const b = 20
console.log(b)

if(b == 20){
    //  b = 30 // if iam not assigning to nay keyword it'll generate an error
    const b = 30 // it'll work 
    console.log('value of b inisde block ',b)
}
console.log(b)


// types of functions
//normal function
function test(){
    console.log('Normal func')
    return 'Hello'
}
console.log(test())

//arrow function
const res = (a,b) => a*b //no need to write return if it has only single line
console.log(res(2,3))

const res2 = (x,y) =>{
    return x+y
}
console.log(res2(10,20))


//anonymous function -- a func without funname
let result = (function (){
    console.log( "Anonymous function")
})
//along with iFFe function
// (function (){
//     console.log( "iFFe function")
// })()


//--------spread operator-----------
let arr = [1,2,3,4]
let arr2 = [5,6,7,8]

//using spread op
let arr3 = [...arr, ...arr2] //can add multiple arrays

console.log(arr3)


//--------- rest operator ------------
//takins as rest only when u r  dealing with parameter
// it'll work under the arguments only
function add(...args){
    console.log(args)
    
}
add(2,5,3,7,1,5,22,3,7,8,9,10,4,12,10)



//--------- destructuring -----------
// array destructing
let ar = [10,20,30,40]
let [m,n,o,p] = ar
console.log(m,n,o,p)
// console.log(ar[0], ar[1], ar[2], ar[3]) //lengthy process

// object destructuring
let obj = {
    name  : 'suma',
    age : 21,
    email : 'suma@gmail.com'
}
// console.log(obj.name, obj.age, obj.email) //lengthy process
//we can simplify it by using destructuring
let {name,age,email} = obj
console.log(name,age,email)



//--------reference and primitive types-------
//primitve datatype (values)
//takes seperate memory for s and t
let s = 10
let t = s
s =20
console.log(s,t)   // s will be 20   t will be 10

//non-primitive datatype (reference) --> object and array
//takes same memory for both obj1 and obj2 so use deep copying
let obj1 = {name : 'suma'}
// let obj2 = obj1 //taking reference -- will give 'teki' to both
//so instead that use deep copying -- will give both nmes
let obj2 = JSON.parse(JSON.stringify(obj1)) //will create seperatae memory
obj1.name = 'Teki' //will reflect on obj1 and obj2
console.log('Obj1',obj1,'Obj2',obj2)




// ------------- template strings -----------------
let myName = 'onkar'
let city = 'Bvrm'

// console.log("my name is "+name+" and iam from "+city) //lengthy process for concatinating
//so use (`${}`)
console.log(`My name is ${name} and Iam from ${city}`)


