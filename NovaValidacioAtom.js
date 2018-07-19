function validar(){
	var dni, matri;
	var result = true;

	if(!validateDNI(document.getElementById("dni").value)) {
		alert('dni incorrecte');
    	result = false;
	}
	if(!validatePlaque(document.getElementById("matricula").value)) {
		alert('matricula incorrecte');
       result = false;
    }
      
    return result;
  }

	function validateDNI(dni){
		var dniNum = Number(dni.substr(0,8));
		var dniKey = dni.slice(-1);
		var keyArray = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

		var calculatedRest = dniNum % 23;

		return dni.length == 9 && dniKey == keyArray[calculatedRest];
	}

  function validatePlaque(plaque){
    var numericValue = parseInt(plaque.substr(0,4));
    var lettersValue = plaque.substr(4);
    var vowels = lettersValue.match(/[aeiou]/gi);
    return vowels == null && !isNaN(numericValue);
  }
