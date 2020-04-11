<?php

class ControllerDevice extends ControllerManager
{
	public function post($f3)
	{
		try {
			$stateValue = 0;
			if($_POST["state"]=="true")
				$stateValue = 1;

			$id = explode("_",$_POST["id"])[1];

			$data = array(1=>$stateValue,2=>$id);		
			$result = $this->db->exec("UPDATE Devices SET state=? WHERE id=?",$data);

			if($result==1)
				$out = ["response"=>true,"idDevice"=>"$id","state"=>$_POST["state"]];
			else
				$out = ["response"=>false,"msg"=>"Error modificando base de datos"];
		}
		catch(Exception $e)
		{
			$out = ["response"=>false,"msg"=>"Parametros incorrectos"];
		}
		
		echo(json_encode($out));
	}
}

?>
