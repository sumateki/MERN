
//----------------- STACK ------------------
class Stack{
    constructor(){
        this.items =[]
        this.length = 0
        // for adding
        this.add = function(ele){
            this.items.push(ele)
            this.length += 1

        }
        //for removing
        this.del = function(){
            if(this.length == 0){
                return -1
            }
            this.length-- //len will be decremented
            return this.items.pop()
            
            // this.items.pop()
            // this.length -=1

        }
        // for peek
        this.peek = function(){
            if(this.length == 0){
                return -1
            }
            console.log(this.items[this.length-1]) 
        }
    }
    read(){
        console.log(this.items,this.length)
    }
}
let a = new Stack()
a.add(2)
a.add(6)
a.add("hello")
a.add("hi")
a.read()
a.del()
a.del()
a.read()
a.peek()
a.read()
// console.log(a)



//sort()
let arr = [1,4,3,22,44,11]
let res = arr.sort()
console.log(res)

//sort() -- ascending order
let arr1 = [1,4,3,22,44,11]
arr1.sort((a,b)=> a - b)
console.log(arr1)

//sort() -- descending order
let arr2 = [1,4,3,22,44,11]
arr2.sort((a,b)=> b - a)
console.log(arr2)

