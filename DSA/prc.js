
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    // insertion
    insert(data){
        var node = new Node(data)
        console.log(node)

        var current
        if(this.head == null){
            this.head = node
        }
        else{
            
            current = this.head
            console.log(current)
            while(current.next){
                current = current.next
            }
            current.next =node
        }

        this.size++
    }
    // deletion
    delete(key){
        var temp = this.head
        var prev = null

        if(temp != null && temp.data != key){
            prev = temp
            temp = temp.next
        }

        if(temp == null)
            return

        prev.next = temp.next

        this.size--

    }
    // size
    sizeOfList(){
        return this.size
    }

    // search
    search(x){
        var current = this.head
        while(current != null){
            if( current.data == x){
                console.log('Element found')
                break
            }
            current = current.next
            // break
        }
        
        console.log('elemnt not found')
    }

    //traverse
    printList(){
        var current = this.head
        if(current != null){
            console.log(current)
            current= current.next
        }
    }
    
}

var link = new Linkedlist()

link.insert(30)
link.insert(25)
link.insert(10)
link.insert(39)

link.delete(1)

console.log(link.sizeOfList())

link.search(10)

link.printList()












