<?php
class Load{


public static function contact()
{
    $conn = database::get_connection();
    if(basename($_SERVER['PHP_SELF'],".php")=='contact'){
        $name='contact_form';
    }elseif(basename($_SERVER['PHP_SELF'],".php")=='download'){
        $name='download';
    }else{
        $name='newsletter';
    }
    $quer="SELECT * FROM `$name` ORDER BY `id` DESC LIMIT 50";
    $result = $conn->query($quer);
    $num = $result->num_rows;
    if ($num >= 1) {

        $row = $result;
        return $row;
    }else {
        throw new exception("please check the user credential");

     }

     database::$conn->close();


}


}







?>