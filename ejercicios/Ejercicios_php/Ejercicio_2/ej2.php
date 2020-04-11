<?php
class User {
	private $id;
	private $email;
	private $name;
	private $isLogged;
	
	public function __construct($id,$email,$name,$isLogged)	
	{
		$this->id=$id;
		$this->email=$email;
		$this->name=$name;
		$this->isLogged=$isLogged;
	}

	function printInfo()
	{
		echo($this->id." ".$this->email." ".$this->name." {$this->isLogged} </br>");
	}
}

$lista = array();
$lista[] = new User(39,"juanperez1@gmail.com","Juan",true);
$lista[] = new User(25,"juanperez2@gmail.com","Carlos",false);
$lista[] = new User(11,"juanperez3@gmail.com","Pepe",true);

foreach($lista as $o)
{
	$o->printInfo();
}




?>