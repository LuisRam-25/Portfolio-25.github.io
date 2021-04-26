////For expanding project information////
var newPar = "<p class=\'infoPara\'>I constructed the 2-D Side scrolling game by implementing Adobe Photoshop in order to design the 2D pixelated concepts for the characters, animation, and level environments. Then, I apply the 2D pixelated illustrations onto the software program Unreal Engie 4 which allow me to code, and test the character collision damage within the gameplay.</p>";

document.getElementById("Button").addEventListener ("click", function(){
  var byeButton = document.getElementById("Button");
  byeButton.remove();
  document.getElementById("addOn").innerHTML = newPar;
})
////Seperate pragraphs////
var newPar2 = "<p class=\'infoPara\'>I was involved to create a 3-D Third Person adventure game and organized the 3-D models to properly function the gameplay environment. This project also required consistent level designs that can allow the character to properly move through the platforms. I also needed to access the royalty free 3-D models to develop the technical skills for utilizing 3-D model reactions within gameplay.</p>";


document.getElementById("Button2").addEventListener ("click", function(){
  var byeButton = document.getElementById("Button2");
  byeButton.remove();
  document.getElementById("addOn2").innerHTML = newPar2;
})

var newPar3 = "<p class=\'infoPara\'>This was a team project which involved implementing the JavaScript software, “Processing”, to develop an interactive 2-D Side Scrolling game. I was involved to coordinate with the team in order to make sure there was fair participation and completing the project before the deadline. </p>";
var newPar4 = "<p class\'infoPara\'>In my role, I design many obstacles with Illustrator, and then applied them into Processing. This allowed me to increase my level design skills as I coded the obstacles’ movements, and boss battle.</p>";
var newPar5 = "<p class\'infoPara\'>I give credit to Arlyn Elopre for creating the user interface, health status, and background music. I also give credit to Jelani Kennedy for designing the space backgrounds and setting the level transitions in order. </p>";
document.getElementById("Button3").addEventListener ("click", function(){
  var byeButton = document.getElementById("Button3");
  byeButton.remove();
  document.getElementById("addOn3").innerHTML = newPar3 + newPar4 + newPar5;
})
