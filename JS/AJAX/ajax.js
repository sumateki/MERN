var demoData= {
    name: "suma",
    email: "sumateki5@gmail.com",
    age: 21 
}
console.log(demoData, typeof(demoData))

// to convert JS obg into JSON string ---- use JSON.stringify()
var finalJSON = JSON.stringify(demoData)
console.log(finalJSON, typeof(finalJSON))

// convert JSON.string ------- JS obj  --- use JSON.parse
var final_obj= JSON.parse(finalJSON)
console.log(final_obj, typeof(final_obj))



//this keyword rep entire obj
function fun1(x){
    // console.log(x)
    x.style.color = 'blue'
}

//--------this keyword will rep current entire obj-----------
// this keyword using obj --- here this rep person obj
// to access keys within the obj
var person={
    per_name: 'suma',
    per_age: 21,
    per_email: 'suma@gmai.com',
    read_data: function(){
        return this.per_name + ' ' + this.per_age
    }
}
document.write(person.read_data()+'<br><br>')


//making asynchronous req
function read_post(){
    // XMLHttpRequest() is a ajax predefined obj
    var a= new XMLHttpRequest()
    // open(method(get/post), url(live API), async(true)/sync(false))
    a.open('GET','https://jsonplaceholder.typicode.com/posts',true)
    // to send this data use send()
    a.send()
    a.onreadystatechange = function(){
        console.log(this.readyState)
        // console.log(this.status)
        if(this.status==200 && this.readyState==4){
            // console.log(this.responseText)
            // console.log(typeof(this.responseText))
            // document.write(this.responseText)
            var final_data= JSON.parse(this.responseText)
            console.log(final_data)
        }
    }
}
read_post()











