function validar(){

	var dni, matri, km, any_mat, model, marca;
	dni = document.getElementById("dni").value;
	matri = document.getElementById("mat").value;
	km = document.getElementById("km").value;
	any_mat = document.getElementById("any_mat").value;
	model = document.getElementById("model").value;
	marca = document.getElementById("marca").value;

	if (isNaN(dni)){
		alert("dni erroni");
		return false;
	}

	else if(isNaN(matri[0] || matri[1] || matri[2] || matri[3])){
		alert("matricula incorrecte");
	}
}
