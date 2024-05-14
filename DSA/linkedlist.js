// //single linked list  
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }


// class Linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0

//     }
//     // insertion
//     add(data){
//         var node = new Node(data)
//         console.log(node)

//         var current
//         if(this.head == null){
//             this.head = node
//         }
//         else{
//             current = this.head 
//             console.log(current)
//             while(current.next){
//                 current = current.next
//             }
//             current.next = node
//         }
//         this.size++
//     }
//     // deletion
//     deleteNode(key){
//         var temp = this.head, prev = null
//         if(temp != null && temp.data != key)
//         {
//             prev = temp
//             temp = temp.next

//         }
//         // if key is not  present
//         if(temp == null)
//             return
//         // unlink the node from linked list
//         prev.next = temp.next

//         this.size--
//     }
//     // size/length of  list
//     sizeOfList(){
//         return this.size
//     }
//     // searching
//     search(x){
//         var current = this.head
//         while(current != null){
//             if(current.data == x){
//                 console.log('Element found')
//                 break
//             }
//             current = current.next //going to next 
//         }
//         console.log('Element not found')
//     }
//     // traversing
//     printList(){
//         var current = this.head
//         while(current != null){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// // creating object
// var list = new Linkedlist()
// // inserting
// list.add(10)
// list.add(20)
// list.add(30)
// list.add(40)
// list.add(50)

// // deleting
// list.deleteNode(40) 

// // length of list
// console.log(list.sizeOfList())

// //searaching for an elemnt
// list.search(30)

// //traverse and print the list
// list.printList()


// //merging to linked list
// function merge(l1,l2){
//     var l3 = new Node(null)
//     var prev = l3

//     while(l1 != null && l2 != null){
//         if(l1.data <= l2.data){
//             prev.next = l1
//             l1 = l1.next
//         }
//         else{
//             prev.next = l2
//             l2= l2.next
//         }
//         prev = prev.next
       
//     }
//     if(l1 == null){
//         prev.next = l2
//     }
//     if(l2 == null){
//         prev.next = l1
//     }

//     return l3.next

// }

// var list2 = new Linkedlist()

// list2.add(1)
// list2.add(4)
// list2.add(6)
// list2.add(3)

// var listData = merge(list.head, list2.head)
// console.log(listData)

// while(listData.next){
//     console.log(listData.next.data)
//     listData = listData.next
// }


//task --- sorting  of linked list



// constructor -- used to access that data all over the 

// hlps tocreate no.of nodes
class Node2{
    constructor(ele){
        this.element = ele
        this.nxt = null
    }
}

// to attach the nodes
class LL{
    constructor(){
        this.head = null
        this.size = 0
    }
    // inserting
    insert(ele){
        let node2 = new Node2(ele)
        // console.log(node2)
        let curr
        if(this.head == null){
            this.head = node2
        }
        else{
            curr = this.head
            // console.log(curr)
            while(curr.nxt){
                curr = curr.nxt
                // console.log(curr)
            }
            curr.nxt = node2
        }
        this.size++
    }
    //inserting at some position
    insertAt(ele, index){
        if(index < 0 || index > this.size){
            console.log('Wrong index')
        }
        else{
            let node2 = new Node2(ele)
            let curr, prev

            curr = this.head
            if(index == 0){  //adding at head position
                node2.nxt = this.head
                this.head = node2
            }
            else{
                curr = this.head
                var itr = 0
                while(itr < index){
                    itr++
                    // console.log(curr.nxt)
                    prev = curr
                    // console.log(prev)
                    curr = curr.nxt
                    console.log(curr)
                    
                }
                
                prev.nxt = node2  // 15 nxt will be node2 => 16
                node2.nxt = curr  // 16 next will be curr => 17
            }
        }

    }
    //travsering
    printLst(){
        let curr2 = this.head
        let str = ""
        while(curr2){
            str += curr2.element + " "
            curr2 = curr2.nxt
        }
        console.log(str)
    }

    


}

let ll = new LL()
ll.insert(12)
ll.insert(14)
ll.insert(15)
ll.insert(17)

ll.insertAt(16,3) //(ele -- 16, pos/index -- 3)

ll.printLst()
console.log(ll)










































