<?php
	$dni = $_POST[dni];
	$Mat = $_POST[matricula];
	$kms = $_POST[kms];
	$any = $_POST[any_mat];
	$model = $_POST[model];
	$marca = $_POST[marca];



function lletraDNI($dni){
	$lletres = array("T","W","A","G","M","Y","F","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","F");
	$resta = $dni % 23-2;
	$lletra = $lletres[$resta];
	return $lletra;
}


	echo "Dades de l'usuari:"."<br>";
	echo "<br>";
	echo "DNI: ".$dni.lletraDNI($_POST['dni'])."<br>";
	echo "Matricula: ".$Mat."<br>";
	echo "Kilometres del vehicle: ".$kms."<br>";
	echo "Any de matriculacio: ".$any."<br>";
	echo "Model del vehicle: ".$model."<br>";
	echo "Marca del vehicle: ".$marca;
?>
