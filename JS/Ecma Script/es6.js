// ------------- let keyword - block scope -------------
let a1 = 'apple'
document.write(a1+"<br>")

// we cannot use saame name using let
// let a1 = 'banana'
// document.write(a1+"<br>")

//but it is possible with using var keyword
// --------- var keyword - global scope ------------
var b1 = 'cat'
document.write(b1+"<br>")

var b1 = 'dog'
document.write(b1+"<br>")


let str1 = 'Suma Teki'
document.write("My name is : "+str1+"<br>")

function fun1(){
    // we can use same name inside a func that we declared in outside scope
    let str1 = 'Chomu Kodavati'
    document.write("My Friend name is : "+str1+"<br>")

    // but taking saame name inside blockk is not possible -- thriws an error
    // let str1 = 'Sowji Manik'
    // document.write("My name is : "+str1+"<br>")
}
fun1()

//modifying data is possible with let
let dob = '14/02/2002'
dob = '2/08/1996' //taking this data only
document.write("My dob is : "+dob+"<br>")


//but modifying data is not that much of secure in some situations like sensitive data
//we can rectify this issue using CONST keyword

// ----------------- const keyword - block scope ---------------
const place = 'Andaluru'
// place = 'Hyderabad' // throws an error as it doesn't allows modofication
document.write('I live in '+place+"<br>")

function fun2(){
    const place = 'Andaluru'
    document.write('I live in '+place+"<br>")

    // also cannot use same name inside block
    // const place = 'Andaluru' 
    // document.write('I live in '+place+"<br>")
}
fun2()



// ---------------------- concatenation --------------------
//a bit complex way 
var emp_name = 'suma'
var emp_email = 'suma@gmail.com'
document.write('emp name is '+emp_name+ ' and email is '+emp_email+"<br>")

//simplest way using es6 -- backtick(``, ${})
let std_name = 'Sumasri'
let std_email = 'sumasri@gmail.com'
document.write(`<b>Student name is <i>${std_name}</i></b> <br> <b>Student email is <i>${std_email}</i></b><br>`)


//------------ task -------------
var submit = document.getElementById('btn_id')
submit.addEventListener("click",()=>{
    var text = document.getElementById('inp_id').value
    document.getElementById('div_demo').innerHTML += `<p>User name is : ${text}</P`

})



//------------------ HIGH ARRAY ORDER METHODS ------------------------
//map(element,index,main_array) -- using call back
let read_arr1 = (element,index)=>{
    document.write(`${index} :- ${element} <br>`)
}
let arr1 = [1,2,3,4,5,6,7]
arr1.map(read_arr1)

let ans1 = arr1.map((element)=>{
    return element * 5
})
console.log(ans1)
for(let n of ans1){
    document.write(`Multiplying elemnet  with 5 : ${n} <br>`)
}

// for-in ---- used for objects
// for-of ---- used for arrays only to get immediate results

var emp_info = [
    {
        name: 'john',
        email: 'john@gmail.com'
    },
    {
        name: 'tom',
        email: 'tom@gmail.com'
    }
]
var res = emp_info.map((element)=>{
    return element.name
})
document.write("<br>"+res+"<br><br>")



// filter() --  using call back
let arr2 = [1,2,3,4,5,6,7,8,9]
//getting even numbers
let ans2 = arr2.filter((element)=>{
    return element % 2 == 0
})
for( let n of ans2){
    document.write(n+"<br>")
}

//getting odd numbers
let ans3 = arr2.filter((element)=>{
    return element % 2 != 0
})
for(let n of ans3){
    document.write(n+"<br>")
}



//find() -- going to find only very frst entry based on condition
var arr3 = [12,22,13,4,5,6,7,8]
var ans4 = arr3.find((element)=>{
    return element % 2 != 0
})
console.log(ans4)


//findIndex() --- going to give u index for particuar data
var arr3 = [12,22,13,4,5,6,7,8]
var ans4 = arr3.findIndex((element)=>{
    return element % 2 != 0
})
console.log(ans4)


//reduce() --- reducing the code/ simplifying code
//for stepping into array without using loops
//with reduce we can simplify it nd crack it
//using vanilla js
var arr4 = [1,2,3,4,5]
var sum = 0
for(var j=0; j<arr4.length; j++){
    sum = sum + arr4[j]
}

document.write("sum of numbers "+sum+"<br>")

//shortcut method using reduce()
var arr5 = [1,2,3,4,5]
var ans5 = arr5.reduce((count, element)=>{
    return count = count + element

},0) //keeping 0 to targrting the count
document.write(`sum is ${ans5} <br>`)

// muliplication
var arr6 = [1,2,3,4,5]
var ans6 = arr6.reduce((x,y)=>{
    return x = x * y
},1) //x becomes 1 as we are doing multiplication
document.write(`Multiplication is ${ans6} <br>`)


//sum of salary
var emp_info = [
    {
        name: 'john',
        email: 'john@gmail.com',
        salary: 60000
    },
    {
        name: 'tom',
        email: 'tom@gmail.com',
        salary: 95000
    }
]

var res2= emp_info.reduce((count, element)=>{
    return count = count + element.salary
},0)
document.write(`Sum of salaries is ${res2} <br>`)




//forEach() -- an alternate option for forloop
// we cannot perforn return in it
var arr7 = ['abc', 'mno', 'xyz',5,7,2,4,91,34]
arr7.forEach((element)=>{
    // console.log(arr7)
    // return element * 5 //it is not worked
    if(element % 2 == 0){
        document.write(element+"<br>")
    }
})




//------------ TASK 1 -  using map and filter -----------
let data1 = [
    {
        //print sq.of even number
        'array1' : [1,2,3,4,5,6,7,8,9,10] 
    },
    {
        'array2' : [1,2,3,4,5,6,7,8,9,10]
    },
    {
        'array3' : [1,2,3,4,5,6,7,8,9,10]
    },
    {
        'strings' : ['a','b','c','i','o','u']
    }
]

for(let i in data1[0]){
    console.log(i)
    if(i === 'array1'){
        let arr1 = data1[0][i].filter((element)=>{
            return element % 2 == 0
        }).map((element)=>{
            return element * element
        })
        document.write(`square of even numbers ${arr1}`)        
    }        
}


// ----------- Task 2 ---- when click on btn img will be dusplayed in div --------------
// var submit = document.getElementById('btn_id2')
// submit.addEventListener('click',()=>{
//     document.getElementById('demo').innerHTML = "<img src = 'Cake.jpg' class='img_style'>"
// })

// 2nd way -----
var add_img = ()=>{
    document.getElementById('demo').innerHTML = `<img src = 'Cake.jpg' class='img_style'>`
}




// rest(...)

//using Vanilla JS ---- Parameter Dependent
function add(x ,y, z){
    var  ans1 = x + y + z
    document.write("<br><br>"+"The ans is :"+ans1+"<br>")
}
add(2,3,4) //depending on parameter
//if any parameter val is not takem them ans will not be displayed


//using ES6 ----make it as Parameter Independent
//there is no restriction to pass parameters 
//u can pass N no.of params

let add_num = (...nums)=>{
    // document.write(nums)
    let ans2 = nums.reduce((count, element)=>{
        return count = count + element
    },0)
    document.write(`the final ans is : ${ans2} <br><br>`)
}
add_num(1,2,3,4,5,6,2,43,5)
add_num(14,2,2002,1996)

//if std have more than one contact number so use ...bfr the contact
//but remember that rest parameter must be the last parameter in the parameter list
//and there will be only one rest parameter in the one func
let std_info = (name,subject,email,...contact)=>{
    document.write(`${name} , ${subject} , ${email} , ${contact} <br>`)
}
std_info('suma','Node.js','suma@gmail.com',7095497479)
std_info('Surya','Python','surya@gmail.com',1234,97345,8283687)


// spread operator ---(...) an alternate option for array push
// we can use anywhere in b/w the array just like inserting or pushing the array into new array
let arr8 = [1,2,3,4]
let arr9 = [8,9,10]
let arr10 = [11,12]
let final_arr = ['a','b',...arr8,'d','e',...arr9,'f','g',...arr10]
document.write(final_arr+"<br>")


//------destructuring------------
//object destructuring
let obj1 = {
    name: 'suma',
    email: 'suma@gmail.com',
    contact: 123456
    
}
//calling method by create method
//instead writing obj1.name, obj1.email we can write let{name,email}=obj1
//it destructuring the object
let{name, email, contact} = obj1
document.write(`${name} ${email} ${contact} <br>`)


// destructuring with nested obj
let obj2 = {
    e_name: 'suma',
    e_email: 'suma@gmail.com',
    e_contact: {
        num1 : 1235456,
        num2 : 3257247
    }
}
let{e_name, e_email, e_contact} = obj2
let{num1,num2} = obj2.e_contact
document.write(`${e_name} ${e_email} ${num1} ${num2} <br>`)



//array destructuring with rest opperator(...)
let arr_data = [11,12,13,14,15,123,4223,5453,654,234]
//instead detsructing all the data we can use rest operator for tkig rest of the elements
let[x,y,z,i,o,...new_nums] = arr_data

document.write(`${x} ${y} ${z} ${i} ${o} ${new_nums} <br>`)




