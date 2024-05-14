// --------- map -------------
const arr = [1,2,25,76,14,90,55,6,2,18,67,3,4,5,6,7,8,9,10]
const res = []
// very lengthy process by using for loop
for(let i=0; i<arr.length; i++){
    res.push(arr[i]*2)
}
console.log('result is: ',res)

//so we can reduce the code using map
//it'll create a res array
// values(exact number)  index(array index)  array(whole array)
const mapRes = arr.map((data)=> data * 3)
console.log('Result with Map ',mapRes)

// using all 3 params --
//1st param indicates - value
//2nd param indicates - index
//3rd param indicates - array
const mapRes1 = arr.map((values,index,array)=> {
    console.log('value is ',values, 'index is ',index, 'array is ',array)
    return values * 2
})
console.log('Result with map ',mapRes1)



// ------------ filter ------------
//conditional based
// with array n obj
const details = [{id: 101, name: 'suma'},{id: 102, name: 'pooja'},{id: 103, name: 'chomu'}]
const result = details.filter((value)=> value['name'] == 'suma')
// with array
// const result = arr.filter((value)=> value % 2 == 0)
console.log('Filtered data is ', result)



// ------------- reduce ----------------
// An alternate option for for loop
// reduce(prev_val,curr_val) //taking 2 args nd 3rd arg will be value

// const reduce_res = arr.reduce((x,y)=> x+y)
const reduce_res = arr.reduce((x,y)=> {
    console.log("previous value(x): ",x,"current value(y): ",y)
    return x + y
})

console.log('Result using reduce(): ',reduce_res)



//we can also use 2 funcs in single array
const evennum = arr.filter((value,index,array)=>{
    return value % 2 == 0
})
console.log('Even numbers ',evennum)

const result1 = evennum.reduce((result1,x,y) => {
    return result1 + x
})
console.log('Result is: ',result1)



// ----------------- find ---------------
// if we have multiple occurings of a value in an arrayy
// when we find for that repeted val
//it'll only travel to the frst appeared given val
const res1 = arr.find((data)=> data == 73)
console.log(`The data  u've searched for is: ${res1}`) //gives undefined if the val is not present

const res2 = arr.find((data,index)=>{
    console.log('data', data,'index',index)
    return data == 6
})
console.log('result with find ',res2)



// ------------- findIndex ---------------
const det = [{id: 101, name: 'suma'},{id: 102, name: 'pooja'},{id: 103, name: 'chomu'}]
const res3 = det.findIndex((data)=>{
    return data['id'] == 102
})
console.log("result with findIndex ",res3) //if the given id is not present it'll return -1



//-------- Promises -------------
const a = 10
const rslt = a.Promise((data) => {
    if(a == 10){
        return data.resolve
    }
    else{
        return data.reject
    }
})
console.log(rslt)