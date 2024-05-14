
// ----------------- QUEUE -----------------------------
class Queue{
    constructor(){
        this.items = []
        this.length = 0
        // inserting -- enqueue
        this.enqueue = function(ele){
            this.items.push(ele)
            this.length += 1
        }
        //removing -- dequeue
        this.dequeue = function(){
            if(this.length == 0){
                return -1
            }
            this.length--
            return this.items.shift()
        }
        //frontmost
        this.front = function(){
            if(this.length == 0){
                return -1
            }
            // console.log(this.items[0])
            return this.items[0]
        }

    }
    read(){
        console.log(this.items, this.length)
    }
}

let x =  new Queue()
x.enqueue('John')
x.enqueue('tom')
x.enqueue('alex')
x.enqueue(12)
x.read()

x.dequeue()
x.read()

// x.front()
console.log(x.front())





































