var canva;
var gameState = 0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;

function setup(){
  canvas = createCanvas(400,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  database = firebase.database();
}


function draw(){
  background("pink");

  
}
