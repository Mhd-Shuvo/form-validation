document.getElementById('infoSubmit').onclick = function(){
    var userName = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if(userName.value=='' )
    {
        document.getElementById('userName_msg').innerHTML="*this field is required";
    }
    else if(userName.value.length < 8){
        document.getElementById('userName_msg').innerHTML="*user name must be 8 charachters";
    }
    if(email.value=='') {
        document.getElementById('email_msg').innerHTML="*this field is required";
    }
    else if(!(email.value.includes('@') && email.value.includes('.'))) 
    {
        document.getElementById('email_msg').innerHTML="*invalid email"; 
    }
    if(password.value=='' )
    {
        document.getElementById('password_msg').innerHTML="*this field is required";
    }
    else if(!(password.value.includes('$') || password.value.includes('_'))) 
    {
        document.getElementById('password_msg').innerHTML="*atleast one super charachter needed";
    }
};
    





