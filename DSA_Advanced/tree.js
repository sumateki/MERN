
class Node{
    constructor(val){
        this.key = val
        this.left = null
        this.right = null
    }
}

var root = null

function insert(root, val){
    //if root is null then insert data into it
    if(root == null){
        var node = new Node(val)
        root = node
        return root
    }
    if(val<root.key){
        root.left = insert(root.left, val)
    }
    if(val>root.key){
        root.right = insert(root.right, val)
    }

    return root
}

root = insert(root, 8)
root = insert(root, 9)
root = insert(root, 3)
root = insert(root, 10)
root = insert(root, 1)
root = insert(root, 5)
root = insert(root, 13)
console.log(root)


















































