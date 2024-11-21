function bienvenida(){
	alert("Bienvenido usuario!!")
}

function enviar(){
	const name = document.getElementById("nombre").value;
	const email = document.getElementById("email").value;
	if (name === '' || email === ''){
		alert("Por favor, complete los campos");
	} else {
		alert("Formulario enviado con exito");
	}
}