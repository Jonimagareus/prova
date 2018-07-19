function validar(){
	var dni, matri, km, any_mat, model, marca;
	var result = true;


	if(!validateDNI(document.getElementById("dni").value)) {
		alert('dni incorrecte');
    	result = false;
	}
	if(!validatePlaque(document.getElementById("matricula").value)) {
		alert('matricula incorrecte');
       result = false;
    }
    // km = document.getElementById("km").value;
	// any_mat = document.getElementById("any_mat").value;
	// model = document.getElementById("model").value;
	// marca = document.getElementById("marca").value;
    return result;
  }

	function validateDNI(DNI){
		var dniNum = Number(dni.substr(0,8));
		var dniKey = dni.slice(-1);
		var keyArray = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

		var calculatedRest = dniNum % 23;

		return dni.length == 9 && dniKey == keyArray[calculatedRest];
	}

  function validatePlaque(plaque){
    var numericValue = parseInt(plaquesubstr(0,4));
    var lettersValue = plaque.substr(4);
    var vowels = lettersValue.match(/[aeiou]/gi);
    return vowels == null && !isNaN(numericValue);
  }
