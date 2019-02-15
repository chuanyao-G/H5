<?php

      require("./connect.php");
      
      $select_query = "SELECT * FROM user";
      $select_res = mysql_query($select_query);

      $res_array = array();
      while($row = mysql_fetch_array($select_res)){
            array_push($res_array,$row);
      }
      $res_json = json_encode($res_array);

      mysql_close($con);
      echo "fn($res_json)";
?>