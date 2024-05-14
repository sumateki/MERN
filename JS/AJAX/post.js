var postObj = {
    id:1,
    title : "hello js",
    body : 'we are doing ajax in js',
    img : 'loading.gif'
}
// console.log(postObj)
var posting = JSON.stringify(postObj)
// console.log(post)


var url = 'https://jsonplaceholder.typicode.com/posts'
var a = new XMLHttpRequest()
a.open('POST',url,true)
// to set the req to server
a.setRequestHeader('content-type','application/json')
//we are posting the data to server. thats y we should take var-name inside send(var-name)
a.send(posting)
a.onreadystatechange = function(){
    // 201 -- returns successful sign
    if(this.status == 201 && this.readyState == 4 ){
        console.log('Successfully created POST!!')
        console.log(this.responseText)
    }
}







