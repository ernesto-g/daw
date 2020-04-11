<?php

class ControllerDevices extends ControllerManager
{
	public function get($f3)
	{
		//$result = $this->db->exec('SELECT * FROM Devices ORDER BY name');
		$devDAO = new DeviceDAO($this->db);
		$result = $devDAO->getAll();
		echo(json_encode($result));
	}
}

?>
