var prdload= ()=>{
    var a= new XMLHttpRequest()
    a.open('GET','https://fakestoreapi.com/products',true)
    a.send()
    a.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            document.getElementById('img1').style.display = "none"
            // console.log(this.responseText) //to get data
            // console.log(typeof(this.responseText))
            var data= JSON.parse(this.responseText) //to get the data in a js obj
            // console.log(data)
            // document.write(data) //we donot getting data insted it shows objects
            // so use for loop to get the obj inside array
            for(var j=0; j<data.length; j++){ //reading one obj at a time
                // console.log(data[j])

                var div_tag= document.createElement('div')
                div_tag.className = 'prd_div'
                // console.log(div_tag)

                for(var i in data[j]) // redaing inside data
                {
                    if(i == 'image'){
                        var img_tag = document.createElement('img')
                        img_tag.src = data[j][i]
                        img_tag.className = 'img_style'
                        div_tag.appendChild(img_tag)
                    }
                    else if(i == 'rating'){
                        // console.log(data[j][i])
                        for(var  z in data[j][i]){
                            div_tag.innerHTML +='<br><br>'+ z + ": " + data[j][i][z] + '<br>'
                        }
                    }
                    // console.log(i) //getting all keys
                    // console.log(data[j][i]) //getting all values
                    else{
                        div_tag.innerHTML += "<br>"+ i+ " --- " +data[j][i]+"<br><br>"
                    }  
                }
                // console.log(div_tag)
                document.getElementById('main_div').appendChild(div_tag)

            }
        }
        else{
            document.getElementById('img1').style.display = "block"
        }
    }
}
prdload()

















