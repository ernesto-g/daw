<?php

class ControllerManager
{
	public function beforeRoute($f3)
    {
		$this->db=new DB\SQL(
		    'mysql:host=localhost;port=3306;dbname=smart_home',
		    'root',
		    '235711');
	}



}

?>
