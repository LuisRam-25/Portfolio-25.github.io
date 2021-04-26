/// Question stimulation for video game character names. Idea used from magic eight ball stimulation//////
var answer;
var question;

//get the question when we click submit
document.getElementById("submitIt").addEventListener("click", function(){
question = document.getElementById("askQ").value;
//clear the form once you get your answer
//allow to ask multiple questions in a row
if(question === "") {
  alert("please enter your name");
  } else {
document.getElementById("askQ").value = "";
answer = getAnswer(getRandNum());
//display the answer on the page
document.getElementById("answerPar").innerHTML = answer;
  }
});

//get random number
function getRandNum(){
  var rand = Math.round(Math.random()*15);
  return rand;
}

//determine answer for number
function getAnswer(rando){
  if(rando<3) {
    answer = "Mario (Mario Brothers Series)";
  } else if(rando<4) {
    answer = "Sonic (Sonic the Hedgehog Series)";
  } else if(rando<5){
    answer = "Ms. Pac-Man (Pacman Series)";
  } else if(rando<6) {
    answer = "Samus (Metriod Series)";
  } else if(rando<7) {
    answer = "Frank Woods (Call of Duty Black Ops Series)";
  } else if(rando<8) {
    answer = "Max Payne (Max Payne Series)";
  } else if(rando<9) {
    answer = "Gyarados (Pokemon Series)";
  } else if(rando<10) {
    answer = "Cuphead (Cuphead Series)";
  } else if(rando<11) {
    answer = "Ellie (Last of Us Series)";
  } else if(rando<12) {
    answer = "Solid Snake (Metal Gear Solid Series)";
  } else if(rando<13) {
    answer = "Sonya Blade (Mortal Kombat Series)";
  } else if(rando<14) {
    answer = "Nathon Drake (Uncharted Series)";
  } else if(rando<15) {
    answer = "Master Cheif (Halo Series)";
  } else if(rando<16) {
    answer = "Lara Croft (Tomb Raider Series)";
  } else {
    answer = "Please Try Again";
  }
  return answer;
}
