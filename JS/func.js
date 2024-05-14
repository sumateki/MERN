//why we have a pre-defined func??
//to reduce the code the developers create func's
//declare it once and use it many times


//function declaration with func keyword
function myFunc()
{
    document.write("hello how r u?? <br><br>")
}
myFunc()  //func calling


//adding
function add(x, y, z){
    var ans= x+y+z
    document.write("Addition of x,y,z is: "+ans+"<br><br>")
}
add(5,12,2)


//default arg
function sum(x=2, y=3, z=5)
{
    res = x+y+z
    document.write('Sum of x, y, z is: '+res+"<br><br>")
}
sum()
sum(1,1,1)


//multiplication -- taking inp from user

// function multiply(x,y)
// {
//     res= x*y
//     document.write('Multiplication of x and y is: '+res+"<br><br>")
// }
// a= prompt("enter a value")
// b= prompt("enter b value")
// multiply(a,b)


//crct way for abv code
// function mul()
// {
//     // var a= prompt("Enter a value")
//     // var b= prompt("Enter b value")
//     var ans= a*b
//     document.write('Multiplication of a and b is: '+ans+"<br><br>")
// }
// mul()
// mul()



//function expression or anonymous func
//storing func in variable
//here func doesn't have any name 
//so hoisting will not work
var y= function(uname)
{
    document.write("hey " +uname +"<br><br>")
}
y('Suma Teki')



//func with arrays
//u dont have to write final priting st multiple times
//with just single console u can print multiple function array data
var python_cls= ['Surya',"Suma"]
var node_cls= ['Suma','Chomu']
var java_cls= ['Pooja', 'Vicky', 'Kiran']
var std_id= [1,2,3]
var std_data= {
    std1: "Suma Teki",
    std2: "Chomu Kodavati"
}

function fun1(main_arr)
{
    console.log(main_arr)
}
fun1(python_cls)
fun1(node_cls)
fun1(java_cls)
fun1(std_id)
fun1(std_data)


//func with loops
// u dont have to write loops multple times
//with single loop u can access that to multiplpe arrays
//if condition and way of printing is same then u can use this method
var python_mrks= [40,19,90,28,88,16,69]
var node_mrks= [50,33,67,53,31,83,27]
var java_mrks= [66,33,59,30,32,78,89]

function fun2(main_arr1)
{
    for(var i=0; i<main_arr1.length; i++)
    {
        if(main_arr1[i]>35)
        {
            document.write(main_arr1[i]+"<br>")
        }
    }
    document.write("----------------------<br>")
}
fun2(python_mrks)
fun2(node_mrks)
fun2(java_mrks)





//with for-in loop read obj in func

var emp1= {
    uname: 'John',
    uemail: 'john@gmail.com',
    unum: 23456
}

var emp2= {
    uname: 'Alex',
    uemail: 'alex@gmail.com',
    unum: 23456
}

var emp3= {
    uname: 'King',
    uemail: 'king@gmail.com',
    unum: 23456
}

function fun3(main_arr2){
    
    for(var x in main_arr2){
        document.write(main_arr2[x]+"<br>")
    }
    document.write("----------------------<br>")
}
fun3(emp1)
fun3(emp2)
fun3(emp3)

// ------------------------------------------------------------------------------------
//return keyword
//we are expecting something in return
//shortcut to optimise  the code
//with single return func name we can use it in many other func

function func(a,b) //wee can use this in other func's
{
    var ans= a+b
    return ans
}
// var res= func(3,4)
// console.log(res)


//taking from prompt
// function num_prompt()
// {
//     // var num1= Number(prompt('Enter Number1'))
//     // var num2= Number(prompt('Enter Number2'))
//     var res1= func(num1,num2)
//     document.write('The ans is: '+res1+"<br>")
// }
// num_prompt()


//taking as var
function num_var()
{
    var num1= 2
    var num2= 3
    var res2= func(num1,num2)
    document.write('The ans is: '+res2+"<br>")
}
num_var()


//add num if equal
function num_equal()
{
    var num1= 2
    var num2= 2
    var res3= func(num1,num2)
    if(num1 == num2){
        document.write('both are equal: '+res3+"<br>")
    }
    else{
        document.write('both are not equal: '+"<br>")
    }
    
}
num_equal()












