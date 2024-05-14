// 0 - request not initialized
// 1 - server connection established
// 2 - request received
// 3 - processing request
// 4 - req finished and response is ready

// 200 - ok (getting everything is ok)
// 201 - successful msg (making post req)
// 403 - forbidden (cannot access to page)
// 404 - page not found

//getting from server  -- $.get(url,function()=>{})
var cartLoad = ()=>{
    $(document).ready(function(){
        $.get('https://fakestoreapi.com/carts',function(data,status){
        // console.log(data)
        // console.log(status)
        data.map((Element)=>{
            // console.log(Element)
            var div_tag = document.createElement('div')
            div_tag.className = 'div_style'
            for(var i in Element){
                // document.write(i+"<br>")
                // document.write(i+" :- "+Element[i] +"<br>")
                
                if(i === 'products'){
                    div_tag.innerHTML += i + " : <br>"
                    Element[i].map((a)=>{
                        console.log(a)
                        for(var j in a){
                            div_tag.innerHTML += j+" :- "+a[j] +"<br>"
                        }
                    })
                }
                else{
                    div_tag.innerHTML += i+" :- "+Element[i] +"<br>"
                }
            }
            document.getElementById('demo1').appendChild(div_tag)
        })
    })
    })
    
}
cartLoad()



//posting to server  --  $.post(url,varname,function()=>{})
var new_prd = {
    id : 1,
    title : "red dress",
    image : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTnivTEO2a6ehokUjgHD2Yw3b8EPCFOk7w8WoQ014mVsjcIR6HapjuX-nlkjo6xnQfR703GDK04WinSIcvDUi97uxRsYyyoiEeVP6bBuUd21SVMespOn1Ob',
    description : 'Women Red Fit And Flare Gorgette Dress',
    price : 1199

}

$.post('https://fakestoreapi.com/products',new_prd,function(data, status){

    // console.log(data)
    // console.log(status)
    for(var m in data){
        // console.log(data[m])
        if(m == 'image'){
            //document.getElementById('img1').src = data[m]
            var a=document.getElementById('img1')
            a.src = data[m]
            a.alt = 'Women Red & WhiteGeometric Printed'
            
        }
        else{
            document.getElementById('demo2').innerHTML += "<br>" +m+" : "+data[m]+"<br>"
        }
    }

})




































