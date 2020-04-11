<?php

class Controller {
	protected $idUser;
	public function __construct() {
		$this->idUser = $_GET["idUser"];
	}
}

class ControllerMainPage extends Controller {

	public function __construct() {
		parent::__construct();
	}
	
	public function get(){
		echo("Pagina ppal. id de user:".$this->idUser);		
	}
}

class ControllerSecondaryPage extends Controller {

	public function __construct() {
		parent::__construct();
	}
	
	public function get(){
		echo("Pagina secundaria. id de user:".$this->idUser);		
	}
}


// ruteo segun pagina
switch($_GET["page"])
{
	case 0:
		$controller = new ControllerMainPage();
		$controller->get();
		break;
	case 1:
		$controller = new ControllerSecondaryPage();
		$controller->get();
		break;	
}




?>