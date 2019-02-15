<?php

      $con = mysql_connect("localhost:3306","root","root");   
      if(!$con){
            die('{"state":"error","errorType":"数据库错误","stateCode":"3"}');
      }
      mysql_select_db("mylist");

?>