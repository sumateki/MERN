var std_data= {
    name: 'suma teki',
    age: 21,
    email: 'suma@gmail.com',
    contact: 7095497479
}
console.log(std_data)

//js obg to json string
var  std_JSON= JSON.stringify(std_data)
console.log(std_JSON)

//json string  to js obj
var std_obj= JSON.parse(std_JSON)
console.log(std_obj)

// -------------------------------------------------------------------------------
var fakeAPI =() =>{

    var a = new XMLHttpRequest()
    a.open('GET','https://jsonplaceholder.typicode.com/posts',true)
    a.send()
    a.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            // console.log(this.responseText)
            var data= JSON.parse(this.responseText)
            console.log(data)
            for(var i=0; i<10; i++){
                var div_tag= document.createElement('div')
                div_tag.className = 'prdlist'
                // document.write(data[i])
                for(var j in data[i]){
                    // document.write(data[i][j])
                    div_tag.innerHTML += "<b>"+j+"</b>"+ ': '  +data[i][j]+"<br>"
                }
                document.getElementById('main_div').appendChild(div_tag)
            }
        }
    }
}
fakeAPI()


// ------------------------------------------------------------------
var mObj ={
    fname: "John",
    lname: 'wick',
    getFullName: function(){
        console.log(this.fname+" "+this.lname)
    }
}
// console.log(mObj.toString())
// console.log(JSON.parse(mObj))
console.log(JSON.stringify(mObj))

// ------------------------------------------------------------



































