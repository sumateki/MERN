function validate(){
    //getting input id's from html
    var name_inp = document.getElementById('name_inp').value
    var email_inp = document.getElementById('email_inp').value
    var pwd_inp = document.getElementById('pwd_inp').value
    var dob_inp = document.getElementById('dob_inp').value
    var phn_inp = document.getElementById('altph_inp').value
    var altph_inp = document.getElementById('altph_inp').value

    //assigning falg as true by default
    var flag = true

    //taking regex vlues for the above inputs
    var name_regex = /^[a-zA-Z]+$/    
    var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var pwd_regex = /^(?=.*\d).{4,8}$/
    var dob_regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/   
    var num_regex = /^[2-9]\d{2}-\d{3}-\d{4}$/   
    

    //validating the user entered data
    //username
    if(name_inp.trim()==""){
        alert('add ur name')
        // name_inp.style.border = "2px solid red"
        // document.getElementById('name_err').innerHTML = 'Add Your Name!!'
        flag = false
    }
    else if(!name_inp.match(name_regex)){
        document.getElementById('name_err').innerHTML = "Non-matches: Matches any string of only upper- and lower- case letters (no spaces)."
        flag = false
    }
    // else if(name_inp != ""){
    //     document.getElementById('name_err').innerHTML = ""
    //     name_inp.style.border = ""
    //     flag = false
    // }


    //email
    if(email_inp.trim()==""){
        alert('add email')
        // document.getElementById('email_err').innerHTML = 'Add Your Email!!'
        flag = false
    }
    else if(!email_inp.match(email_regex)){
        document.getElementById('email_err').innerHTML = "Non-matches:  Doesn't allow numbers in the domain name and doesn't allow for top level domains that are less than 2 or more than 3 letters (which is fine until they allow more). Doesn't handle multiple &quot;.&quot; in the domain (joe@abc.co.uk)."
        flag = false
    }


    //password
    if(pwd_inp.trim()==""){
        alert('add ur password')
        // document.getElementById('pwd_err').innerHTML = 'Add Your Password!!'
        flag = false
    }
    else if(!pwd_inp.match(pwd_regex)){
        document.getElementById('pwd_err').innerHTML = "Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit."
        flag = false
    }


    //date of birth
    if(dob_inp.trim()==""){
        alert('add your DOB')
        // document.getElementById('dob_err').innerHTML = 'Please add your DOB!!'
        flag = false
    }
    else if(!dob_inp.match(dob_regex)){
        document.getElementById('dob_err').innerHTML = "This regular expressions matches dates of the form XX/XX/YYYY where XX can be 1 or 2 digits long and YYYY is always 4 digits long."
        flag = false
    }


    //phone number
    if(phn_inp.trim()==""){
        alert("add phone number")
        // document.getElementById('phn_err').innerHTML = 'Please add your Phone Number!!'
        flag = false
    }
    else if(!phn_inp.match(num_regex)){
        document.getElementById('phn_err').innerHTML = "This expression matches a hyphen separated US phone number, of the form ANN-NNN-NNNN, where A is between 2 and 9 and N is between 0 and 9."
        flag = false
    }


    //alternate number
    if(altph_inp.trim()==""){
        alert('Add alternate phone number!!')
        // document.getElementById('altph_err').innerHTML = 'Please add your Alternate Number!!'
        flag = false
    }
    else if(!altph_inp.match(num_regex)){
        document.getElementById('altph_err').innerHTML = "This expression matches a hyphen separated US phone number, of the form ANN-NNN-NNNN, where A is between 2 and 9 and N is between 0 and 9."
        flag = false
    }

    // else if(phn_inp.value == altph_inp.value){
    //     alert('Make sure the num bers donot match. Please provide another num for alternate number!!')
    //     flag = false
    // }
    
   

    return flag
}














































































