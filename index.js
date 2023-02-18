function check(name)
{

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var passwd = document.getElementById('passwd');
    var passwd2 = document.getElementById('passwd2');

    if (name.value == "") {
    	name.className = 'input-invalid';
    	//errorName();
    }

    if (email.value == "") {
    	email.className = 'input-invalid';
    	//errorMail();
    }

    if (passwd.value == "") {
    	passwd.className = 'input-invalid';
    }
    
    if (passwd2.value == "") {
    	passwd2.className = 'input-invalid';
    }

    if (passwd.value == passwd2.value && passwd.value != "" && passwd2.value != "") {
    	mostrar();
    } else {
    	passwd2.className = 'input-invalid';
    	errorPass();
    }

}

function errorName ()
{
	alert("¡Nombre vacío!");
}

function errorMail ()
{
	alert("¡Email vacío!");
}

function mostrar ()
{
	alert("¡Inscripción correcta!");
	document.getElementById("form1").submit();

}

function errorPass ()
{
	alert("¡Las contraseñas no son iguales o están vacías!");

}
