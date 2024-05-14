//collection of data
//always use curly braces
//use key:value pair
//cannot repeat keys

var data={
    name: 'Suma',
    age: 21,
    city: ['bvrm','hyd'],  //array obj
    ph_num:{ 
        num1: 7095497479,
        num2: 8328401910,
    },
}
data.name= 'Suma Teki' //has more priority --- we can re-assign the value
document.write(data.name,"<br>",data.age,"<br>",data.city,"<br>",data.ph_num.num1,"<br>",data.ph_num.num2,"<br><br>")
console.log(data)
// document.write(data)


//find vowels in ur name
var name= 'Suma Teki'
for(var i=0; i<name.length; i++)
{
    if(name[i]=='a' || name[i]=='e' || name[i]=='i'  || name[i]=='o' || name[i]=='u'){
        document.write(name[i]+'<br>')
    }
    
}



//object literal
var std_data= {}
std_data.name= 'Suma'
std_data.age= 21
std_data.email= 'suma@gmail.com'
console.log(std_data)
document.write("student name is: "+std_data.name+"<br>")
document.write("student age is: "+std_data.age+"<br>")
document.write("student email is: "+std_data.email+"<br>")



//using new() keyword to create objects
var emp_info= new Object()
emp_info.ename= 'Surya'
emp_info.eemail= 'Suryadev96@gmail.com'
console.log(emp_info)
// document.write(emp_info.ename)
//object.entries are pre-defined which will 
//Object.entries is the method to fetch ll the entries of emp
document.write(Object.entries(emp_info)+"<br>")
document.write(Object.keys(emp_info)+"<br>")//return only keys
document.write(Object.values(emp_info)+"<br><br>")//return only values


//for in loop -- used to read obj
var my_data={
    name: "suma",
    age: 21,
    email: 'Suma@gmail.com'
}
for(var i in my_data){
    console.log(i) //only give keys
    console.log(my_data[i])//only give values
    console.log(i+" : "+my_data[i]+"<br><br>")//both key n values
}

//obj inside obj
var emp_data= {
    emp1:{
        name : 'Suma Teki',
        age: 21,
        email: 'suma@gmail.com'
    },
    emp2:{
        name : 'Durga Kodavati',
        age: 21,
        email : 'durga@gmail.com'
    },
    emp3:{
        name : 'Pooja Bunga',
        age: 22,
        email: 'pooja@gmail.com'
    }
}
//using nested for loop as we take nested obj
for(var x in emp_data){  
    // console.log(emp_data[x]) -- emp1 data, emp2 data, emp3 data
    for(var y in emp_data[x]){
        document.write(y+" : "+emp_data[x][y]+"<br>")
    }
    document.write('------------------------------<br>')
}



//
var car_obj= {
    name: 'Suma',
    age: 21,
    car_list: {
        most_fav_car: ['Audi', 'BMW', 'Benz', 'Lamborgini']
    }
}

for(var x in car_obj.car_list){
    // document.write(car_obj.car_list[x]+"<br>")
    for(var k=0; k<car_obj.car_list[x].length; k++){
        document.write(car_obj.car_list[x][k]+"<br>")
    }
}
























