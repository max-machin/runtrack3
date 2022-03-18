<?php
   if(isset($_POST['nom']))
   {
       $var = $_POST['nom'].'modification';
       echo json_encode($var);
   }
   else
   {
       echo json_encode($_POST);
   }
