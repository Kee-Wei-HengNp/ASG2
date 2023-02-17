function validateEmail(){
    var email = document.getElementById("email_add").value;
    email.trim();
    if(email.length > 0)
	{ //make sure it is not empty

        var regexp = /^([\w\.\-])+@([\w]+\.){1,3}([A-z]){2,3}$/;
        if(regexp.test(email))
		{
            return true;
        }
        else
		{
            alert("Email entered in wrong format.");
            return false;
        }
    }
	else
	{
    alert("Please fill in your email.");
	return false;
	}

}
function validatePassword(){
    var passw = document.getElementById("password").value;
    passw.trim();
    if(passw.length > 0)
	{ //make sure it is not empty
        var regexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(regexp.test(passw))
		{
            return true;
        }
        else
		{
            alert("Password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
            return false;
        }
    }
	else{
		alert("Please fill in your password.");
		return false;
	}
}

function validateRepeatPassword(){
    var passw = document.getElementById("password").value;
    var passw1 = document.getElementById("password1").value;
    if (passw != passw1){
        alert("Wrong password");
        return false;
    }
}