//if
var x=5
if(x==5){
   document.write("x is 10 <br>")
}


//if-else
var num = prompt('enter your number')
if(num>100)
{
   document.write("number is greater than 100 <br>")
}
else if(num<100){
   document.write('number is less than 100 <br>')
}
else{
   document.write('sry u hvae entered wrong num <br>')
}




//else-if else
//take input from user check if it is positive, negative and zero
var number= prompt('Enter number')
if(number>0){
   document.write(`You've entered positive number <br>`)
}
else if(number<0){
   document.write(` You've entered negative number <br>`)
}
else if(number==0){
   document.write(` You've entered 0 number <br>`)
}
else{
   document.write(' sry u hvae entered wrong num <br>')
}


//number should be 5,6,7,8,9,10
var num1 = 16
if(num1>=5 && num1<=10)
{
   document.write('the num is in between 5 to 10 <br>')
}
else if(num1>=5 || num1<=20){
   document.write('the num is '+num1)
}





//voter eligibility
var age= prompt('Enter your age')
if(age >= 18){
   console.log(alert('You are eligible to vote <br>'))
}
else{
   console.log(alert('You are not eligible to vote <br>'))
}


















