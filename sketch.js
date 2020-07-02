var canvas,backgroundImg;
var playerCount;
var database;
var form,user,pCount;
var question1,question2,question3;

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    form = new Form();
    form.display();
    user = new User();
    console.log("mouse is pressed");
    user.readCount();
    pCount = playerCount+1;
}

function draw(){}