var i = 0;
// we will use "i" to be our question number - the starting number is always 0.


// we then use a FUNCTION, NextQu to update the questions, answers, etc.
function NextQu() {
i++;
document.getElementById("intro").style.display = "none";
document.getElementById("QuestionQuiz").innerHTML = "Question "+(i+1)+": "+Questions[i];
  document.getElementById("Answer1").style.display = "inline";
    document.getElementById("Answer2").style.display = "inline";
      document.getElementById("Answer3").style.display = "inline";
      document.getElementById("Solution").style.display = "none";
      document.getElementById("CurrentQuScore").style.display = "none";
      //we bring back any answers hidden after the previous answer and make the buttons show the next answer choices
document.getElementById("Answer1").innerHTML=Answers[i][0];
document.getElementById("Answer2").innerHTML=Answers[i][1];
document.getElementById("Answer3").innerHTML=Answers[i][2];
//We also enable all answer buttons again:
  document.getElementById("Answer1").disabled = false;
    document.getElementById("Answer2").disabled = false;
      document.getElementById("Answer3").disabled = false;
//We update the solution of the next question (note this will be hidden until the user has selected an answer)
document.getElementById("Solution").innerHTML=Solutions[i];
//we also hide the next question button again
document.getElementById("Next").style.display = "none";
}


//we need to leave the visitors with a nice message once they've finished the quiz and tell them their score - we hide the other content:
function FinishQu() {
  //show the final score:
  document.getElementById("Rolling Score").style.display="inline";
  //remove the questions and answers:
  document.getElementById("QuestionQuiz").style.display="none";
  document.getElementById("Answer1").style.display="none";
  document.getElementById("Answer2").style.display="none";
  document.getElementById("Answer3").style.display="none";
  document.getElementById("Solution").style.display="none";
  document.getElementById("CurrentQuScore").style.display="none";
  document.getElementById("Finish").style.display="none";
  }

var j;
//j is used to show which answer we selected, so we can pick the correct score

var ScoreTotal=[];



//We need to ensure when we select an answer, it does three things: 1. Highlight our selection 2. Grey out/delete the other answers but show "next question" 3. Show the score for that // QUESTION:
function Answer1Select() {
  if(i<Questions.length-1){
  j=0;
  document.getElementById("Next").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
  document.getElementById("Answer1").disabled = true;
  //this stops the user being able to select the correct answer multiple time to top up their score. We must then remember to enable it in the "NextQu" function.
  document.getElementById("Answer2").style.display = "none";
  document.getElementById("Answer3").style.display = "none";
  document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
  ScoreTotal.push(Score[i][j]);
  document.getElementById("Rolling Score").innerHTML="Hey! Bedankt voor het gebruik van de kennisquiz schadevaringen. Je hebt "+ScoreTotal.reduce(getSum)+" van de 10 vragen goed beantwoord.";
      }
      else{
//we don't bring "Next Question" back for the last answer, instead the Finish Quiz
  document.getElementById("Finish").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
        document.getElementById("Answer1").disabled = true;
        //this stops the user being able to select the correct answer multiple time to top up their score. We must then remember to enable it in the "NextQu" function.
        document.getElementById("Answer2").style.display = "none";
        document.getElementById("Answer3").style.display = "none";
        document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
        ScoreTotal.push(Score[i][j]);
        document.getElementById("Rolling Score").innerHTML="Hey! Bedankt voor het gebruik van de kennisquiz schadevaringen. Je hebt "+ScoreTotal.reduce(getSum)+" van de 10 vragen goed beantwoord.";


      }
    }
  function Answer2Select() {
    j=1;
    if(i<Questions.length-1){
    document.getElementById("Next").style.display = "inline";
    document.getElementById("Solution").style.display = "block";
    document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer2").disabled = true;
    document.getElementById("Answer1").style.display = "none";
    document.getElementById("Answer3").style.display = "none";
    document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
    ScoreTotal.push(Score[i][j]);
    document.getElementById("Rolling Score").innerHTML="Hey! Bedankt voor het gebruik van de kennisquiz schadevaringen. Je hebt "+ScoreTotal.reduce(getSum)+" van de 10 vragen goed beantwoord.";
  }
  else{
//we don't bring "Next Question" back for the last answer, instead the Finish Quiz
document.getElementById("Finish").style.display = "inline";
document.getElementById("Solution").style.display = "block";
document.getElementById("CurrentQuScore").style.display = "block";
    document.getElementById("Answer1").disabled = true;
    //this stops the user being able to select the correct answer multiple time to top up their score. We must then remember to enable it in the "NextQu" function.
    document.getElementById("Answer1").style.display = "none";
    document.getElementById("Answer3").style.display = "none";
    document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
    ScoreTotal.push(Score[i][j]);
    document.getElementById("Rolling Score").innerHTML="Hey! Bedankt voor het gebruik van de kennisquiz schadevaringen. Je hebt "+ScoreTotal.reduce(getSum)+" van de 10 vragen goed beantwoord.";


  }
    }
    function Answer3Select() {
      j=2;
      if(i<Questions.length-1){
      document.getElementById("Next").style.display = "inline";
      document.getElementById("Solution").style.display = "block";
      document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer3").disabled = true;
      document.getElementById("Answer1").style.display = "none";
      document.getElementById("Answer2").style.display = "none";
      document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
      ScoreTotal.push(Score[i][j]);
      document.getElementById("Rolling Score").innerHTML="Hey! Bedankt voor het gebruik van de kennisquiz schadevaringen. Je hebt "+ScoreTotal.reduce(getSum)+" van de 10 vragen goed beantwoord.";
    }
    else{
  //we don't bring "Next Question" back for the last answer, instead the Finish Quiz
  document.getElementById("Finish").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer1").disabled = true;
      //this stops the user being able to select the correct answer multiple time to top up their score. We must then remember to enable it in the "NextQu" function.
      document.getElementById("Answer1").style.display = "none";
      document.getElementById("Answer2").style.display = "none";
      document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
      ScoreTotal.push(Score[i][j]);
      document.getElementById("Rolling Score").innerHTML="Hey! Bedankt voor het gebruik van de kennisquiz schadevaringen. Je hebt "+ScoreTotal.reduce(getSum)+" van de 10 vragen goed beantwoord.";


    }
      }
//with this function, we set the answer selectors to 0,1 or 2, which means the score will be set to the relevant item in the score array for question i, Score[i][j]



//Questions are set up in an "array", the square brackets with Q1, Q2 being the questions which we can amend each time.
//I really want that the program picks up the questions from a container
var Q1 = "Vraag 1?";
var Q2 = "Vraag 2?";
var Q3 = "Vraag 3?";
var Q4 = "Vraag 4?";
var Q5 = "Vraag 5?";
var Q6 = "Vraag 6?";
var Q7 = "Vraag 7?";
var Q8 = "Vraag 8?";
var Q9 = "Vraag 9?";
var Q10 = "Vraag 10?";
var Questions = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];
//In a very similar way, we will include our answers


var A1 = ["Optie 1", "Optie 2", "Optie 3"];
var A2 = ["Optie 1", "Optie 2", "Optie 3"];
var A3 = ["Optie 1", "Optie 2", "Optie 3"];
var A4 = ["Optie 1", "Optie 2", "Optie 3"];
var A5 = ["Optie 1", "Optie 2", "Optie 3"];
var A6 = ["Optie 1", "Optie 2", "Optie 3"];
var A7 = ["Optie 1", "Optie 2", "Optie 3"];
var A8 = ["Optie 1", "Optie 2", "Optie 3"];
var A9 = ["Optie 1", "Optie 2", "Optie 3"];
var A10 = ["Optie 1", "Optie 2", "Optie 3"];
var Answers = [A1,A2,A3,A4,A5,A6,A7,A8,A9,A10];
//...and solutions

var S1 = "Het goede antwoord is optie 2.";
var S2 = "Het goede antwoord is optie 1.";
var S3 = "Het goede antwoord is optie 2.";
var S4 = "Het goede antwoord is optie 1.";
var S5 = "Het goede antwoord is optie 3.";
var S6 = "Het goede antwoord is optie 3.";
var S7 = "Het goede antwoord is optie 1.";
var S8 = "Het goede antwoord is optie 1.";
var S9 = "Het goede antwoord is optie 2.";
var S10= "Het goede antwoord is optie 2.";
var Solutions = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
//...and points scored for each answer - we will keep it to 1s and 0s but you can be creative!

var SC1 = [0,1,0];
var SC2 = [1,0,0];
var SC3 = [0,1,0];
var SC4 = [1,0,0];
var SC5 = [0,0,1];
var SC6 = [0,0,1];
var SC7 = [1,0,0];
var SC8 = [1,0,0];
var SC9 = [0,1,0];
var SC10 = [0,1,0];
var Score = [SC1,SC2,SC3,SC4,SC5,SC6,SC7,SC8,SC9,SC10];

//We will set our first questions, answers etc. up to appear when the page loads
document.getElementById("QuestionQuiz").innerHTML = "Question 1:"+Questions[i];
document.getElementById("Answer1").innerHTML=Answers[i][0];
document.getElementById("Answer2").innerHTML=Answers[i][1];
document.getElementById("Answer3").innerHTML=Answers[i][2];
document.getElementById("Solution").innerHTML=Solutions[i];


function getSum(a, b) {
    return a + b;
}

    
