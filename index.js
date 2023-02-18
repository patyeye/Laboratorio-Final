function check(name)
{

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var passwd = document.getElementById('passwd');
    var passwd2 = document.getElementById('passwd2');

	if (name.value == "" && email.value == "" && passwd.value == "" && passwd2.value == "") {
		name.className = 'input-invalid';
    	document.querySelector(".username-error").innerHTML = "Rellene este campo";
    	document.querySelector(".username-error").style.display = "block";

    	email.className = 'input-invalid';
    	document.querySelector(".email-error").innerHTML = "Rellene este campo";
    	document.querySelector(".email-error").style.display = "block";

    	passwd.className = 'input-invalid';
    	document.querySelector(".password-error").innerHTML = "Rellene este campo";
    	document.querySelector(".password-error").style.display = "block";

    	passwd2.className = 'input-invalid';
    	document.querySelector(".password2-error").innerHTML = "Rellene este campo";
    	document.querySelector(".password2-error").style.display = "block";
    	return false;
	}    

    if (name.value == "") {
    	name.className = 'input-invalid';
    	document.querySelector(".username-error").innerHTML = "Rellene este campo";
    	document.querySelector(".username-error").style.display = "block";
    	return false;
    } else {
    	document.querySelector(".username-error").style.display = "none";
    }

    if (email.value == "") {
    	email.className = 'input-invalid';
    	document.querySelector(".email-error").innerHTML = "Rellene este campo";
    	document.querySelector(".email-error").style.display = "block";
    	return false;
    } else {
    	document.querySelector(".email-error").style.display = "none";
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){
    	document.querySelector(".email-error").style.display = "none";
    } else {
    	email.className = 'input-invalid';
    	document.querySelector(".email-error").innerHTML = "Email inválido";
    	document.querySelector(".email-error").style.display = "block";
    	return false;
    }

    if (passwd.value == "") {
    	passwd.className = 'input-invalid';
    	document.querySelector(".password-error").innerHTML = "Rellene este campo";
    	document.querySelector(".password-error").style.display = "block";
    	return false;
    } else {
    	document.querySelector(".password-error").style.display = "none";
    }

    if (passwd.value.length < 8) {
    	passwd.className = 'input-invalid';
    	document.querySelector(".password-error").innerHTML = "Debe tener al menos 8 caracteres";
    	document.querySelector(".password-error").style.display = "block";
    	return false;
    } else {
    	document.querySelector(".password-error").style.display = "none";
    }
    
    if (passwd2.value == "") {
    	passwd2.className = 'input-invalid';
    	document.querySelector(".password2-error").innerHTML = "Rellene este campo";
    	document.querySelector(".password2-error").style.display = "block";
    	return false;
    } else {
    	document.querySelector(".password2-error").style.display = "none";
    }

    if (passwd.value == passwd2.value && passwd.value != "" && passwd2.value != "") {
    	document.querySelector(".password2-error").style.display = "none";
    	mostrar();
    } else {
    	passwd2.className = 'input-invalid';
    	document.querySelector(".password2-error").innerHTML = "Las contraseñas no coinciden";
    	document.querySelector(".password2-error").style.display = "block";
    	return false;
    }

}


function mostrar ()
{
	alert("¡Inscripción correcta!");
	document.getElementById("form1").submit();

}