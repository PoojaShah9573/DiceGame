function myfunc()
{
//var randomNumber1=Math.floor(Math.random()*6)+1; //1-6
//var randomDiceImage= "dice" + randomNumber1 +".png";  //dice1-dice-6
//var randomImagesorce= "images/" + randomDiceImage;  //images/dice1-dice6.png
//var image1=document.querySelectorAll('img')[0];
//image1.setAttribute("src", randomImagesorce);
  
  
  
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImagesorce1="images/dice" + randomNumber2 +".png";
document.querySelectorAll('img')[0].setAttribute("src", randomImagesorce1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImagesorce2="images/dice" + randomNumber2 +".png";
document.querySelectorAll('img')[1].setAttribute("src", randomImagesorce2);




if(randomNumber1>randomNumber2){
document.querySelector('h2').innerHTML=" Player 1 wins :) ";
}
else if(randomNumber2>randomNumber1)
{
document.querySelector('h2').innerHTML=" Player 2 wins :) ";
}

else
{
  document.querySelector("h2").innerHTML=" Its a Draw ^-^ ";
}
}
