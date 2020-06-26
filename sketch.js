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
  document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 10";
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
        document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 10";


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
    document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 10";
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
    document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 10";


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
      document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 10";
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
      document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 10";


    }
      }
//with this function, we set the answer selectors to 0,1 or 2, which means the score will be set to the relevant item in the score array for question i, Score[i][j]



//Questions are set up in an "array", the square brackets with Q1, Q2 being the questions which we can amend each time.
var Q1 = "Who won the 1990 world cup?";
var Q2 = "Who scored the first goal in the 1986 World Cup Final?";
var Q3 = "Who is the all time top goal scorer in World Cups?";
var Q4 = "When was Pele's first world cup?";
var Q5 = "Who did Argentina beat when Maradona did his famous 'hand of god' goal in 1986?";
var Q6 = "Who missed a penalty for France in the dramatic 1986 shoot out against Brazil?";
var Q7 = "What was the name of the German goalkeeper who assaulted Battiston in the 1982 world cup but was not booked?";
var Q8 = "Who was sent off for Brazil in their 4 July match against USA in World Cup 1994?";
var Q9 = "Which team did Belgium play twice in the 2018 world cup - neither game affecting their overall chances to win the world cup?";
var Q10 = "Which world cup minnows team did Dimbi Tubilandu keep goal for, albeit briefly and without much success?";
var Questions = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];
//In a very similar way, we will include our answers


var A1 = ["Brazil", "West Germany", "Italy"];
var A2 = ["Jose Luis Brown", "Maradona", "Brehme"];
var A3 = ["Fontaine", "Klose", "Beckham"];
var A4 = ["1958", "1954", "1962"];
var A5 = ["Italy", "West Germany", "England"];
var A6 = ["Tigana", "Fernandez", "Platini"];
var A7 = ["Schumacher", "Illgner", "Maier"];
var A8 = ["Leonardo", "Romario", "Bebeto"];
var A9 = ["Brazil", "England", "Denmark"];
var A10 = ["Honduras", "Zaire", "El Salvador"];
var Answers = [A1,A2,A3,A4,A5,A6,A7,A8,A9,A10];
//...and solutions

var S1 = "It was West Germany - they beat Argentina 1-0 in the final";
var S2 = "Jose Luis Brown scored a header to make it 1-0 in the final - the final score was 3-2 to Argentina.";
var S3 = "Miroslav Klose has the world cup record for goals scored with 16 goals in total";
var S4 = "Pele's first world cup (aged 17) was in 1958 - which Brazil won!";
var S5 = "England saw the hand of god as well as one of the best individual goals of all time to lose 2-1 to Argentina";
var S6 = "Platini missed the 4th French penalty on his 31st Birthday - France went on to win the shootout 4-3";
var S7 = "Schumacher was the guilty party and seemingly had little remorse for his actions";
var S8 = "Leonardo elbowed a US player on the half-way line to get a straight red in USA 94";
var S9 = "England played Belgium once in the group when they were both already through and again in the 3rd/4th place play-off.";
var S10= "Poor Dimbi Tubilandu was Zaire's goalkeeper subbed on after 21 minutes when they were 3-0 down - sadly, the goals kept coming and Yugoslavia won 9-0.";
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

    
