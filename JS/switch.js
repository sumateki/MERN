var data= prompt("enter data")
switch(data)
{
    case "a":
        document.write("inside case a <br>")
        break
    case "b":
        document.write("inside case b <br>")
        break
    case "c":
        document.write("inside case c <br>")
        break

    default:
        document.write('Invalid data entered <br>')
}


//take 2 input from user
//if both input are equal do addition
//if both input are not equal do subtraction

var num1= Number(prompt('enter number1'))
var num2= Number(prompt('enter number2'))
var num3 = num1==num2
switch(num3)
{
    case true:{
        document.write('the addition of 2 numbers is :',num1+num2, '<br>')
        break
    }
    case false:{
        document.write('the subtraction of 2 numbers is :',num1-num2, '<br>')
        break
    }
    default:
        document.write('hello')
}



//check if letter is vowel or not

var letter= prompt('Enter any letter')
// var vowels= ['a', 'e', 'i', 'o', 'u']
var res = letter=='a'|| letter=='e' || letter=='i' || letter=='o' || letter=='u'
switch(res){
    case true:
        document.write('Entered letter is VOWEL <br>')
        break
    case false:
        document.write('Entered letter is not VOWEL <br>')
        break
}














