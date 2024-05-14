//50 ------- .50    50
//100 ------ .75   150
//100 ----- 1.20   250
// >250 ------ 1.5 + 20%

//ex: unit =260
//50 ----     50 * 0.5
//51-150 --- 100 * 0.75
//151-230 -- 80 * 1.20
var unit=200
var bill
if(unit<=50)
{
    bill= unit * 0.5
    //    get frst 50    
}
else if(unit<=150)
{
    bill = (50 * 0.5) + (unit-50) * 0.75
    //    get frst 50    get scnd 100
}
else if(unit<=250){
    bill= (50 * 0.50) + (100 * 0.75) + (unit - 150) * 1.20
    //    get frst 50    get scnd 100    get third 100
}
else if(unit > 250){
    bill= (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + (unit - 250) * 1.5
    //    get frst 50    get scnd 100   get third 100   abv 250
    bill= bill + bill * 0.2
}
console.log(bill)




