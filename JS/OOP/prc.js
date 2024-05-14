//class 


class Person{
    eat(){
        console.log('likes starters, desserts')
    }
    sleep(){
        console.log('always sleepy')
    }
    walk(){
        console.log('walk 30min/day is good for health')
    }
}
var suma= new Person()
suma.eat()
suma.sleep()
suma.walk()

var janu = new Person()
janu.eat()
janu.sleep()


//constructor()
class Employee{
    constructor(name,age){
        console.log("She is "+name+" and she is "+age+" years old."+" Always be on time")
    }
    role(){
        // var a= prompt('Enter your role')
        // console.log(a)
    }
}

var emp1 = new Employee('Suma Teki', 21)
emp1.role()

var emp2 = new Employee('Jahnavi Velagala', 21)
emp2.role()


//map()   -- work with operations
//using callback func
var arr1= [1,2,3,4,5,6,7,8]
arr1.map(fun1) //callback func
function fun1(x){
    console.log(x)
}

//using anonymous func
var arr2 = ['a', 'e' ,'i', 'o', 'u']
arr2.map((z)=>{
    console.log(z)
})

//using return
var arr3 = [2,4,1,6,2,7,8,1,4,5,9,10]
var ans1 = arr3.map((y)=>{
    return y + 3
})
console.log("The original array: "+arr3)
console.log("The mapped array: "+ans1)


//filter()  -- work wth conditions/expressions
var arr4 = [11,12,13,14,15,16]
var ans2 = arr4.filter((m)=>{
    return m % 2 == 0
})
console.log(ans2)


var arr5 = [1,2,3,4,5,6,12,14,13,15]
class Hof{
    constructor(x){
        // console.log(x)
        this.val = x
    }
    even_num(){
        var ans3 = this.val.filter((a)=>{
            return a % 2 == 0
        })
        console.log("Even Numbers are: "+ans3)
    }
    odd_num(){
        var ans3 = this.val.filter((a)=>{
            return a % 2 != 0
        })
        console.log("Odd Numbers are: "+ans3)
    }
    mul(){
        var ans3 = this.val.map((a)=>{
            return a * 4
        })
        console.log("Multiplication of arr5 with 4: "+ans3)
    }
    sub(){
        var ans3 = this.val.map((a)=>{
            return a / 3
        })
        console.log("Division of arr5 by 3: "+ ans3)
    }
}

var result = new Hof(arr5)
result.even_num()
result.odd_num()
result.mul()
result.sub()
























