<?php
$f3 = require('lib/base.php');

$f3->set('AUTOLOAD','Controllers/;db/');

$f3->map('/devices','ControllerDevices');
$f3->map('/device','ControllerDevice');

$f3->run();
?>
