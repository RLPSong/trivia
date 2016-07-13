




// function numberOfQuestions(){

// denotes total number of question.
// var p = prompt("Please enter number of questions", 10);
// console.log(p);
// return p;
// }
  //q = numberOfQuestions();
  var q = 15;
  document.getElementsByClassName('status')[0].innerHTML = "Player1 starts first, Let's Go!";
  var player1;
  var player2;
  var player1score = 0;
  var player2score = 0;
  var playerturn = "player1";
  var CnQn = null;
  var Gamecounter = 0;
  var TempCnQn = null;
  var QnIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var QnSq = [];
  var ArrQn = ["Newton(N) is the SI unit for Forces.",

  "Gravity on the Moon is 6 times that on Earth",

  "Electrical Power is calculated by the product of Current and Resistance",

  "Weight of a body is a constant whereas Mass is affected by Gravity",

  "Force is the product of Mass and Acceleration",

  "Coulomb(C) is the SI unit for Charge",

  "The larger the Cross-Sectional Area, the lower the Resistance",

  "Kinetic Energy is given by the formula 1/2MV",

  "KWh is a measurement of Electrical Power",

  "A Micrometer can measure length more accurately than a Vernier Calipers",

  "SI unit for potential difference is Volt(V)",

  "Acceleration is defined as the rate of Change of Velocity",

  "Sound waves is an example of a transverse waves",

  "Visible light requires a medium to propagate",

  "Heat from the Sun reaches the Earth through Convection Currents"];

//Removing repeated Qn

var z = Math.trunc(q*Math.random());   // return 0 to (q-1) ie 0 to 14
QnIndex[z].pop = QnSq;             //pop or splice?
q--;
var z = Math.trunc(q*Math.random());
QnIndex[z].pop = QnSq;
Repeat 10x;

// 1 for True, 0 for False
  var ArrAns = [1,0,0,0,1,1,1,0,0,1,1,1,0,0,0];

// //Removing repeated Qn
  var TempArr = []; //array of int
  TempArr.push(TempCnQn);
  for (var i = 0; i < TempArr.length; i++) {
    if (TempCnQn === TempArr[i]) {
      currentQuestion();
    } else {
      TempArr.push(CnQn);
      CnQn = TempCnQn;
    }
  }

//Switch player
function switchplayer(){
  if (playerturn==="player1") {
    playerturn = "player2";
  } else {
    playerturn = "player1";
  }
}

  getPlayerChoice();       //EventListener get answer
  function Main(){
  currentQuestion();       //generate random Qn
  writeQn();               //display Qn
  CheckWinCondition();       //check who wins
  }
 Main();

function CheckWinCondition(){
  if (Gamecounter === 10) {
  if (player1score>player2score) {
    document.getElementsByClassName('status')[0].innerHTML = "P1Score = "+player1score+", "+"P2Score = "+player2score+"<br>Player1 Wins!!";
    reset();
  } else if (player1score<player2score) {
    document.getElementsByClassName('status')[0].innerHTML = "P1Score = "+player1score+", "+"P2Score = "+player2score+"<br>Player2 Wins!!";
    reset();
  } else {
    document.getElementsByClassName('status')[0].innerHTML = "Its a Draw!";
    reset();
  }
}}

//reset Game


  function reset(){
  alert("Start a New Game?");
  location.reload(true);
  }



// //select Qn number
function currentQuestion(){
var y = Math.trunc(q*Math.random());   // return 0 to (q-1)
// console.log(y);
CnQn = y;
TempCnQn = y;
}

// function currentQuestion(){
//   var y = Math.trunc(q*Math.random());   // return 0 to (q-1)
//   // console.log(y);
//   CnQn = y;
// }
//
// //Write Qn
function writeQn(){
  document.getElementsByClassName('Qn')[0].innerHTML = ArrQn[CnQn];
}


//ResetBtn
document.getElementsByClassName('reset')[0].addEventListener("click", function(){
  reset();
});



//EventListener for inputs
function getPlayerChoice(){

// ArrAns is 1(True)&& User click True/False
document.getElementsByClassName('TrueBtn')[0].addEventListener("click", function(){
  if (ArrAns[CnQn]===1) {
  if (playerturn==="player1") {
    player1score++;
    console.log(player1score);
    document.getElementsByClassName('status')[0].innerHTML = "Congratulations! Correct! Player1 Score+1";
  } else {
    player2score++;
    console.log(player2score);
    document.getElementsByClassName('status')[0].innerHTML = "Congratulations! Correct! Player2 Score+1";
  }
} else {
  document.getElementsByClassName('status')[0].innerHTML = "Oops! Better luck next time!";
}
Gamecounter++;
Main();
switchplayer();
});

// ArrAns is 0(False)&& User click True/False

document.getElementsByClassName('FalseBtn')[0].addEventListener("click", function(){
  if (ArrAns[CnQn]===0) {
  if (playerturn==="player1") {
    player1score++;
    console.log(player1score);
    document.getElementsByClassName('status')[0].innerHTML = "Congratulations! Correct! Player1 Score+1";
  } else {
    player2score++;
    console.log(player2score);
    document.getElementsByClassName('status')[0].innerHTML = "Congratulations! Correct! Player2 Score+1";
  }
} else {
  document.getElementsByClassName('status')[0].innerHTML = "Oops! Better luck next time!";
}
Gamecounter++;
Main();
switchplayer();
});
}
