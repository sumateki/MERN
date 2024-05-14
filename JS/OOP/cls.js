//we can take any no.of methids inside class
//we can use any of the created method in obj as per ur need 

// ----------------------user created methods
class Apple{
    config1(){
        console.log('m2 512gb')
    }
    config2(){
        console.log('m1 256gb')
    }
    color(prd_clr){
        console.log(prd_clr)
    }
    inch(prd_inch){
        // console.log(prd_inch)
        // var a = prompt('enter inch')
        // console.log(a)
    }
}
var apl_con = new Apple()
apl_con.config1()
apl_con.color('grey')
// apl_con.inch(prompt('enter inch for prd1'))
apl_con.inch()

var apl_con2 = new Apple()
apl_con2.config2()
apl_con2.color('black')
// apl_con2.inch(prompt('enter inch for prd2'))
apl_con2.inch()




// ---------------------------- PREDEFINED METHOD-------------------
// -----CONSTRUCTOR------------
// it is a preedfined method of a cls
//automaticlly execuuted when u create any new obj u dont need to create any seperate obj to cll it

class Human{
    constructor(name){
        console.log(name+' can eat sleep walk')
    }
    dance(name){
        console.log(name+' is dancing')
    }
    swim(name){
        console.log(name+' will swim')
    }
}

var suma = new Human('Suma')
suma.dance('Suma')

var janu = new Human('Janu')
janu.dance('Janu')
janu.swim('Janu')



class Student{
    constructor(name,age){
        console.log("std name is "+name+" std age is "+age)
    }
    test_marks(maths){
        console.log('maths marks '+maths)
    }
}
 
var std1 = new Student('Suma',21) //name and age is passed here
std1.test_marks(88) 

var std2 = new Student("Janu", 20)
std2.test_marks(80)


//------------------------- HIGH ORDER FUNCTIONS -----------------------
//Map() -- automatically go into an array
//         alternate option for for-loop
//         will not harm original array
//         performing with  operations 
//         cannot perform expression/condition
//         used to perform mathemtical operation

//Filter() -- alternate option for for-loop and array
//            performing with conditions
//            based on condition it'll filter out smtng
//            cannot perform operation
//            part of array not a string
//            used to perform mathemtical expression


//array.forEach


//----- Map() ------
// using callback
var arr1 = [11,12,13,14,15]
arr1.map(fun1) //callback fun1

function fun1(x){
    console.log(x)
}

//using anonymous fat arrow
var arr2 = ["a", "b", "c"]
arr2.map((y)=>{
    console.log(y)
})


var arr3 =[0,1,2,3,4,5,6,7,8,9]
var ans = arr3.map((z)=>{
    return z*10
})
console.log(arr3)
console.log(ans) // will gve new array



//----- Filter() ------
var arr4 = [1,2,3,4,5,6,7,8,9,10]
var ans1 = arr4.filter((z)=>{
    return z % 2 == 0
})
console.log(ans1)


var arr5 = [1,2,3,4,5,6,7,8,9,10]

class read_arr{
    constructor(x){
        // console.log(x)
        this.val = x //this rep constructor and val is property
    }
    even_num(){
        // we need filter()
        // console.log('arr5 from even_num '+this.val)
        var ans2 = this.val.filter((z)=>{
            return z % 2 == 0
        })
        console.log(ans2)
    }
    odd_num(){
        // we need filter
        // console.log('arr5 from odd_num '+this.val)
        var ans2 = this.val.filter((z)=>{
            return z % 2 != 0
        })
        console.log(ans2)
    }
    mul(){
        // we need map()
        // console.log('arr5 from mul '+this.val)
        var ans2 = this.val.map((z)=>{
            return z * 5
        })
        console.log(ans2)

    }
}
var m = new read_arr(arr5) //will accessing the arr5
m.even_num()
m.odd_num()
m.mul()












