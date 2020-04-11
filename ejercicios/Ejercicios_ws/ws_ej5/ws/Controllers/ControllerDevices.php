<?php

class ControllerDevices extends ControllerManager
{

	public function get($f3)
	{
		$data = array();

		$data[] = array("id"=>"1","name"=>"Luces 1","description"=>"Luces living","state"=>true,"type"=>"0");
		$data[] = array("id"=>"2","name"=>"Luces 2","description"=>"Luces living","state"=>true,"type"=>"0");
		$data[] = array("id"=>"3","name"=>"Luces 3","description"=>"Luces living","state"=>true,"type"=>"0");

		echo(json_encode($data));
	}

}

?>
