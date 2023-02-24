function validate(){
    const email_pattern = /[a-z]+[0-9]+?@[a-z]+.[a-z]+/;
    const email = document.getElementById("email-input").value;
    const name_pattern = /[a-z,A-Z]+/
    const name = document.getElementById("name-input").value;
    const password_req = /[#!@$%^&*]/;
    const password = document.getElementById("password-input").value;
    const re_password = document.getElementById("re-password-input").value;
    let result = name_pattern.test(name);
    let validate = 0;
    if(!result){
        document.getElementById("name-input").style="border: red 3px solid";
        alert("Enter a valid name");
        validate++;
    }
    else{
        document.getElementById("name-input").style="border: none";
    }
    result = email_pattern.test(email);
    if(!result || email == null){
        document.getElementById("email-input").style="border: red 3px solid";
        alert("Enter a valid email");
        validate++;
    }
    else{
        document.getElementById("email-input").style="border: none";
    }
    result = password_req.test(password);
    if(!result || password == null){
        document.getElementById("password-input").style="border: red 3px solid";
        alert("Password must contain at least one special character");
        validate++;
    }
    else{
        document.getElementById("password-input").style="border: none";
    }
    if(re_password == null || re_password != password){
        document.getElementById("re-password-input").style="border: red 3px solid";
        validate++;
        alert("Passwords do not match");
    }
    else{
        document.getElementById("re-password-input").style="border: none";
    }
    if(!(document.getElementById("male").checked == true || document.getElementById("female").checked == true)){
        alert("Select gender");
        validate++;
    }
    if(validate == 0){
        window.location.href="validated.html";
    }
    console.log(validate);
    
}