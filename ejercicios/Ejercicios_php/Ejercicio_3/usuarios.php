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

	function getJSONInfo()
	{
		$data = array("id"=>$this->id,"email"=>$this->email,"name"=>$this->name,"isLogged"=>$this->isLogged);
		return json_encode($data);
	}
}

$user = new User(39,"juanperez@gmail.com","Juan",true);
echo($user->getJSONInfo());


?>