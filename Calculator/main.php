<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* @var $_POST type */
$eq = $_POST['equal'];
$textBox = strval($_POST['calculation']);


//using regular expressions patern to validate calculation input in a format were it must be a number/decimal of any size
//followed by a ' + ' sign and ending with another number/decimal of any size 
$plus = "/^\-?\d*(\.\d+)?\+{1}\d*(\.\d+)?$/";

//using regular expressions patern to validate calculation input in a format were it must be a number/decimal of any size
//followed by a ' * ' sign and ending with another number/decimal of any size 
$multi = "/^\-?\d*(\.\d+)?\*{1}\d*(\.\d+)?$/";

//using regular expressions patern to validate calculation input in a format were it must be a number/decimal of any size
//followed by a ' - ' sign and ending with another number/decimal of any size 
$subtract = "/^\-?\d*(\.\d+)?\-{1}\d*(\.\d+)?$/";


$total = 0;

if(preg_match_all($plus, $textBox)){
   
   //when coorect pattern is found split the numbers and store in two variables  
   $tokenFirst = strtok($textBox, "+");
   $tokenSecond = strtok("+");
    
   //when numbers stored add numbers together and determine the total amount
   $total = $tokenFirst + $tokenSecond;
   
    
} elseif (preg_match_all($multi, $textBox)) {
   
   //when coorect pattern is found split the numbers and store in two variables 
   $tokenFirst = strtok($textBox, "*");
   $tokenSecond = strtok("*"); 
   
   //when numbers stored multiply numbers together and determine the total amount
   $total = $tokenFirst * $tokenSecond;
  
    
}elseif(preg_match_all($subtract, $textBox)){
    
   //when coorect pattern is found split the numbers and store in two variables  
   $tokenFirst = strtok($textBox, "-");
   $tokenSecond = strtok("-");
   
   //when numbers stored subtract numbers together and determine the total amount
   $total = $tokenFirst - $tokenSecond;
    
}else{
    
    echo "Match not found.";
    
}

//display total amount on the browser 
echo $total;

?>

