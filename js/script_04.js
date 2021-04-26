///Contact stimulation//////
var answer;
var question;

//Fill in blank
document.getElementById("sendIt").addEventListener("click", function(){
question = document.getElementById("name").value;
//clear the form once you get your answer
//allow to ask multiple questions in a row
if(question === "") {
  alert("Please Fill in the Blanks");
  } else {
document.getElementById("name").value = "";
answer = getAnswer(getRandNum());
//display the answer on the page
document.getElementById("answerPar").innerHTML = answer;
  }
});

document.getElementById("sendIt").addEventListener("click", function(){
question = document.getElementById("email").value;
//clear the form once you get your answer
//allow to ask multiple questions in a row
if(question === "") {
  alert("Please Fill in the Blanks");
  } else {
document.getElementById("email").value = "";
answer = getAnswer(getRandNum());
//display the answer on the page
document.getElementById("answerPar").innerHTML = answer;
  }
});

document.getElementById("sendIt").addEventListener("click", function(){
question = document.getElementById("message").value;
//clear the form once you get your answer
//allow to ask multiple questions in a row
if(question === "") {
  alert("Please Fill in the Blanks");
  } else {
document.getElementById("message").value = "";
answer = getAnswer(getRandNum());
//display the answer on the page
document.getElementById("answerPar").innerHTML = answer;
  }
});

//get random number
function getRandNum(){
  var rand = Math.round(Math.random()*5);
  return rand;
}

//determine answer for number
function getAnswer(rando){
  if(rando<3) {
    answer = "Thank you for your time.";
  } else {
    answer = "Please Try Again";
  } return answer;
}
