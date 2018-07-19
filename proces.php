<?php
	$dni = $_POST[dni];
	$Mat = $_POST[matricula];
	$kms = $_POST[kms];
	$any = $_POST[any_mat];
	$model = $_POST[model];
	$marca = $_POST[marca];






	echo "Dades de l'usuari:"."<br>";
	echo "<br>";
	echo "DNI: ".$dni."<br>";
	echo "Matricula: ".$Mat."<br>";
	echo "Kilometres del vehicle: ".$kms."<br>";
	echo "Any de matriculacio: ".$any."<br>";
	echo "Model del vehicle: ".$model."<br>";
	echo "Marca del vehicle: ".$marca;
?>
