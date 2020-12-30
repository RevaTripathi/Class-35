var ball;
var database, position, dataPosition;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    position = database.ref("Ball/Position");
    position.on("value", readPosition);

}

function readPosition(data){
    dataPosition = data.val();
    console.log(dataPosition);
    ball.x = dataPosition.x
    ball.y = dataPosition.y
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/Position").set({x:ball.x+x, y:ball.y+y});
}
