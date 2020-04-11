<?php

class ControllerDevice extends ControllerManager
{

	public function post($f3)
	{
		echo("Llego post. Datos:");
		print_r($_POST);
	}
}

?>
