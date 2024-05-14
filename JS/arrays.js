//an array is a collection of data
//it is a homogenous type of data(store same type of data)
//size--- 0 to n-1

var std_data= Array('Suma', 'Chomu', 'Abhi', 'Madhu', 'Vamsi')
// document.write(std_data,'<br>', typeof(std_data))
document.write(std_data[0],'<br>')
document.write(std_data[1],'<br>')
document.write(std_data[2],'<br>')
document.write(std_data[3],'<br>')
document.write(std_data[4],'<br>')


var data= ['a', 'b', 'c',['xyz','pqr'],'d','e']
document.write(data[5],'<br>')
document.write(data[3][1],'<br>')


//array inside an array
//60
//a
// javascript
//python
//yth
var z=[10,20,30,['a', 'b', 'c',[40,50,['Javascript','Python']],'d'],60,70]
document.write(z[4],'<br>')
document.write(z[3][0],'<br>')
document.write(z[3][3][2][0],'<br>')
document.write(z[3][3][2][1],'<br>')
document.write(z[3][3][2][1].slice(1,4),'<br>')


//some func
var arr1= ['abc', 'cde','pqr','mno','xyz']
// var res= arr1.reverse()
// var res= arr1.join(" ")
// var res= arr1.join("*")
// var res= arr1.pop() //want to remove very last entry
// document.write(res+"<br>")
// arr1.shift() //wnt to remove very frst entry
// arr1.push('hello') //addnew data at the end of the array
// arr1.unshift('Hi') //add new data at very frst
// document.write(arr1+"<br>")

//concat()
 var a=[1,2]
 var b=[3,4]
 var c= arr1.concat(a,b)
//  document.write(c+"<br>")

//slice array
var res1 = arr1.slice(1)
var res1 = arr1.slice(1,4)
// document.write(res1+"<br>")


//splice -- used to add data at a particular position
// splice(pos,enter any pos,data)
// enter any pos(0 to n)
//0 rep the old data which is at thta pos to make it remains same
//1 to n rep it can remove data
var res1 = arr1.splice(2,3,"hw r u")
document.write(res1+"<br>")





















