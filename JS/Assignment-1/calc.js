//----------------easy method--------------------\
var number1= 5
var number2= 7
var operator = '+'
switch(operator)
{
    case '+' :
        document.write(number1 + number2)
        break
    case '-' :
        document.write(number1 - number2)
        break
    case '*' :
        document.write(number1 * number2)
        break
    case '/' :
        document.write(number1 / number2)
        break
}


//------------long method---------------------

console.log("Menu:")
console.log('1. Addition(+)')
console.log('2. Subtraction(-)')
console.log('3. Multiplication(*)')
console.log('4. Division(/)')
console.log('5. Exit')

const choice= Number(prompt('Enter Your Choice(1/2/3/4/5)'))
if(choice===5){
    console.log("Exit")
}
else if(choice<1 && choice>5)
{
    console.log('Invlaid choice')
}
else{
    var num1= Number(prompt('Enter first number'))
    var num2= Number(prompt('Enter second number'))

    switch(choice)
    {
        case 1:
            console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`)
            break
        case 2:
            console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`)
            break
        case 3:
            console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`)
            break
        case 4:
            if(num2 === 0){
                console.log('cannot Divided by zero ')
            }
            console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`)
            break
        default:
            console.log('Invalid choice')





    }
}

































