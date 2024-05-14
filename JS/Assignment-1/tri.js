var a= Number(prompt('Enter a value'))
var b= Number(prompt('Enter b value'))
var c= Number(prompt('Enter c value'))

if((a==b) && (b==c) && (a==c))
{
    console.log(`Entered sides are ${a}, ${b}, ${c} . All of its sides are equal. So, It is an Equilateral Triangle. `)
}
else if(a == b || a == c || b==c)
{
    console.log(`Entered sides are ${a}, ${b}, ${c}. Two of its sides are equal. So, It is an Isosceles Triangle.`)
}
else
{
    console.log(`Entered sides are ${a}, ${b}, ${c}. None of its sides are equal. So, it is a Scalene Triangle.`)
}























