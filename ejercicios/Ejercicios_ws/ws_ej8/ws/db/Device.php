<?php
class Device {

    private $name;
    private $description;
    private $type;
    private $state;

    public function __construct($name,$description,$type,$state) {
        $this->name = $name;
        $this->description = $description;
        $this->type = $type;
        $this->state = $state;
    }

    public function getName(){
        return $this->name;
    }

    public function getDescription(){
        return $this->description;
    }

    public function geType(){
        return $this->type;
    }

    public function getState(){
        return $this->state;
    }
} 

?>
