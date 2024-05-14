// //creating our own mistakes
// //when user didn't enter any data and click on submit it'll generate an error that u r submitting without entering data

// function validation(){
//     var name_inp= document.getElementById('name_inp')
//     var pwd_inp = document.getElementById('pwd_inp')
//     //flag helps us to understand where we make mistakes
//     var flag = true  //asumes that user enters crct data
//     if(name_inp.value.trim()==""){
//         // alert('add ur name')//because user submitted without entering name
//         document.getElementById('name_err').innerHTML = "Enter ur name"
//         name_inp.style.border = "2px solid red"
//         flag = false  //rep that user entered wrong data 
//     }
//     else if(name_inp.value != ""){
//         document.getElementById('name_err').innerHTML = ""
//         name_inp.style.border ="none"
//     }

//     // else if(pwd_inp.value.trim()==""){ //donot use else if. 
//     // it'll not work when if block also not hsving any data.
//     //  at that time only if block will work not else if
//     if(pwd_inp.value.trim()==""){
//         // alert('add password')
//         document.getElementById('pwd_err').innerHTML = 'Enter Password'
//        pwd_inp.style.border = "2px solid red"
//         flag = false
//     }
//     else if(pwd_inp.value != ""){
//         document.getElementById('pwd_err').innerHTML = ""
//         pwd_inp.style.border = "none"
//     }


//     return flag
// }



// ------------------------- REGEX --------------------------
//email and password validation
function validation2(){
    var email_inp = document.getElementById('email_inp').value
    var flag = true
    var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var pwd_inp2 = document.getElementById('pwd_inp2').value
    var pwd_regex = /^(?=.*\d).{4,8}$/

    if(email_inp.trim()==""){
        alert('add email')
        flag = false
    }
    else if(!email_inp.match(email_regex)){
        document.getElementById('email_err').innerHTML = "Non-matches:  Doesn't allow numbers in the domain name and doesn't allow for top level domains that are less than 2 or more than 3 letters (which is fine until they allow more). Doesn't handle multiple &quot;.&quot; in the domain (joe@abc.co.uk)."
        flag = false
    }
    else if(email_inp.match(email_regex)){
        document.getElementById('email_crct').innerHTML += "yes good job"
        flag= true
    }
    if(pwd_inp2.trim()==''){
        alert('add ur password')
        flag = false
    }
    else if(!pwd_inp2.match(pwd_regex)){
        document.getElementById('pwd_err2').innerHTML = 'Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit.'
        flag= false
    }

    return flag
}


















