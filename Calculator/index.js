/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.addEventListener("DOMContentLoaded", init);

//get an id of a text box 
var textBar = document.getElementById("calculation");

function init() {
    
    //fetch id values of the calculator buttons
    
    var seven = document.getElementById("seven");
    
    var six = document.getElementById("six");
    
    var eight = document.getElementById("eight");
    
    var nine = document.getElementById("nine");
    
    var four = document.getElementById("four");
    
    var five = document.getElementById("five");
    
    var three = document.getElementById("three");
    
    var two = document.getElementById("two");
    
    var one = document.getElementById("one"); 
    
    
    var add = document.getElementById("plus");
    var multi = document.getElementById("multiply");
    var period = document.getElementById("dot");
    var subtract = document.getElementById("minus");
    
   
    // when calculator button is clicked append the button value into a text box 
    six.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += six.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    seven.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += seven.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    eight.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += eight.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    nine.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += nine.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    four.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += four.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    five.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += five.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    three.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += three.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    two.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += two.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    one.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += one.value; 
    });
    
    
   
    
    
    
    
   
    
    
     /* below are the calculator symbols button values that are determined to be 
      * used for calculating two numbers expect the '.' period symbol that is used for decimal numbers 
     */ 
    period.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += period.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    add.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += add.value; 
    });
    
    // when calculator button is clicked append the button value into a text box 
    multi.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += multi.value; 
    });
    
   
    // when calculator button is clicked append the button value into a text box 
    subtract.addEventListener("click", function(){
        
        var textBar = document.getElementById("calculation");
        textBar.value += subtract.value; 
    });
   
    
    
}    

