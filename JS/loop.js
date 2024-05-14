// while-loop
var name= "Suma"
var i=1
while(i<=5)
{
    console.log(name+' '+i)
    i++
}
console.log("Loop ended <br><br>")

//candies
var cand= prompt('How many candies do you want?')
var i=1
var av_cand=5
while(i<=cand)
{
    if(i>av_cand)
    {
        document.write('Sorry out of stock <br>')
        break
    }
    document.write('Candy '+i+"<br>")
    i++
}
document.write('<br>')


//get the numbers lessthn 15
var arr1= [11,12,13,14,15,16,,12,10,2,6,45,32,87,14,16,17,18]
for(var i=0; i<arr1.length; i++)
{
    if(arr1[j]<15)
    {
        document.write(arr1[i]+"<br>")
    }
    else{
        // document.write("Sorry")
        // break
        continue
    }
}

//do-while loop
var j=1
do{
    document.write("hey "+j+"<br>")
    j++
}
while(j<9)
document.write('<br>')



//for-loop
for(var i=0; i<5; i++)
{
    document.write(i+" hello suma teki <br>")
}
document.write("Loop ended<br><br>")

for(var i=5; i>0; i--){
    document.write(i+' Suma<br>')
}
document.write('<br>')



//table-10
var  i=10
for(var n=1; n<=10; n++){
    var res=i*n
    document.write(res+'<br>')
}
document.write('<br>')

//shortcut
for(var n=1; n<=10; n++){
    document.write(25*n+'<br>')
}
document.write('<br>')


// for some data
var data= 'hello javascript'
for(var j=0; j<=15; j++){
    document.write(data[j]+"<br>")
}
document.write('<br>')



//for  more  data use (string.length) property
var data= 'hello javascript'
for(var j=0; j<data.length; j++){
    document.write(data[j]+"<br>")
}
document.write('<br>')


//take prompt and enter ur name.. that name will come like above
// var name= prompt('enter ur name')
for(var j=0; j<name.length; j++)
{
    document.write(name[j]+"<br>")
}
document.write('<br>')


//array-loop
var arr = ['abc', 'def', 'suma', 'sowji', 1402, 1996, 2002, 'hello']
for(var j=0; j<arr.length; j++)
{
    document.write(arr[j]+"<br>")
}
document.write('<br>')



//even or odd
var arr2= [0,1,2,3,4,5,6,7,8,9,10,11,12]
for(var j=0; j<arr2.length; j++){
    if(arr2[j] % 2 == 0){
        document.write(arr2[j]+"<br>")
    }
}
document.write('<br>')
var arr2= [0,1,2,3,4,5,6,7,8,9,10,11,12]
for(var j=0; j<arr2.length; j++){
    if(arr2[j] % 2 != 0){
        document.write(arr2[j]+"<br>")
    }
}
document.write('<br>')



//div by 3
var arr3= [11,12,13,14,15,16,17,18,19,20]
for(var j=0; j<arr2.length; j++){
    if(arr3[j] % 3 == 0){
        document.write('The num is divivsible by 3 is '+arr3[j]+"<br>")
    }
}
document.write('<br>')

//div by 5
var arr3= [11,12,13,14,15,16,17,18,19,20]
for(var j=0; j<arr2.length; j++){
    if(arr3[j] % 5 == 0){
        document.write('The num is divivsible by 5 is '+arr3[j]+"<br>")
    }
}
document.write('<br>')


//div by 3 and 5
var arr3= [11,12,13,14,15,16,17,18,19,20]
for(var j=0; j<arr2.length; j++){
    if(arr3[j] % 3 == 0 && arr3[j] % 5 == 0){
        document.write('The num is divivsible by both 3 and 5 is '+arr3[j]+"<br>")
    }   
}
document.write('<br>')

//another way
var arr3= [11,12,13,14,15,16,17,18,19,20]
for(var j=0; j<arr2.length; j++){
    if(arr3[j] % 3 == 0 && arr3[j] % 5 == 0){
        document.write('The num is divivsible by both 3 and 5 is '+arr3[j]+"<br>")
    }  
    else if(arr3[j] % 5 == 0){
        document.write('The num is divivsible by 5 is '+arr3[j]+"<br>")
    }
    else if(arr3[j] % 3 == 0){
        document.write('The num is divivsible by 3 is '+arr3[j]+"<br>")
    }
}
document.write('<br>')




































