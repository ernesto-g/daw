<?php

class DeviceDAO {

    private $db;

    public function __construct($db){
        $this->db = $db;
    }

    public function getAll(){
        $result = $this->db->exec('SELECT * FROM Devices ORDER BY name');
        return $result;
    }

    public function updateDeviceState($id,$stateValue) {
        if(is_int($id) && is_int($stateValue))
        {
            $data = array(1=>$stateValue,2=>$id);		
            $result = $this->db->exec("UPDATE Devices SET state=? WHERE id=?",$data);
            return $result;
        }
        return false;
    }

}

?>