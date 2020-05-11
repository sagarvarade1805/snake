
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var snakeW=10;
var snakeH=10;

function draw(x,y){
    ctx.fillStyle= "white";
    ctx.fillRect(x*snakeW ,y*snakeH, snakeW, snakeH)
    ctx.fillStyle= "black";
    ctx.strokeRect(x*snakeW ,y*snakeH, snakeW, snakeH)
}
function drawhead(x,y){
    ctx.fillStyle= "rgb(49, 231, 125)";
    ctx.fillRect(x*snakeW ,y*snakeH, snakeW, snakeH)
}
function drawmaze(x,y){
    ctx.fillStyle= "yellow";
    ctx.fillRect(x*snakeW ,y*snakeH, snakeW, snakeH)
    
}
var score;
score=0;

var len =3;
let snake = [];
var i, dir;

for(i=0; i<3; i++){
    snake.push({
        x : i+3,
        y : 3
    }) 
}

document.addEventListener("keydown" , dirctrl);

function dirctrl(e){
    if(e.keyCode==37 && dir!= "right"){
        dir="left";
    }
    else if(e.keyCode==38 && dir!= "down"){
        dir="up";
    }
    else if(e.keyCode==39 && dir!= "left"){
        dir="right";
    }
    else if(e.keyCode==40 && dir!= "up"){
        dir="down";
    }
}
//swiping
let pageWidth = window.innerWidth || document.body.clientWidth;
let treshold = Math.max(1,Math.floor(0.01 * (pageWidth)));
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const limit = Math.tan(45 * 1.5 / 180 * Math.PI);


document.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture(event);
}, false);

function handleGesture(e) {
    let x = touchendX - touchstartX;
    let y = touchendY - touchstartY;
    let xy = Math.abs(x / y);
    let yx = Math.abs(y / x);
    if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (yx <= limit) {
            if (x < 0) {
                dir="left";
            } else {
                dir="right";
            }
        }
        if (xy <= limit) {
            if (y < 0) {
                dir="up";
            } else {
                dir="down";
            }
        }
    } else {
        console.log("tap");
    }
}
//sbh

var food= {
    x: Math.round(Math.random()*(47) +1.0),
    y: Math.round(Math.random()*(47) +1.0)
}
for(i=20; i<49; i++){
    if((food.x == 15) && (food.y == i) )
    (food.x)--;
}
for(i=0; i<15; i++){
    if((food.x == i) && (food.y == 10) )
    (food.y)--;
}
for(i=27; i<49; i++){
    if((food.x == i) && (food.y == 38) )
    (food.y)--;
}
for(i=0; i<25; i++){
    if((food.x == 33) && (food.y == i) )
    (food.x)--;
}

function drawFood(x,y){
    ctx.fillStyle= "red";
    ctx.fillRect(x*snakeW ,y*snakeH, snakeW, snakeH)

}

function Drawsnake(){
    
    var snakelen = snake.length;

    ctx.clearRect(0, 0, cvs.width, cvs.height);

    var snakeheadx = snake[0].x
    var snakeheady = snake[0].y

    drawFood(food.x , food.y);

    if(snakeheadx<1 || snakeheady<1  || snakeheadx>=(49) || snakeheady>=(49)){
        document.getElementById("middle").className = "middle";
        document.getElementById("game-over").className = "game-over";
        document.getElementById("text").className = "text";
        document.getElementById("text3").innerHTML="Score: " + score;
        document.getElementById("wrapper").className="name";
        return true;


    }
    
    
    if(((snake[0].x) != (snake[1].x)) && ((snake[2].x) != (snake[1].x))){
        for(i=1; i<snakelen ; i++){

            var q= snake[i].x;
            var k= snake[i].y;
    
            if((snakeheadx===q) && (snakeheady===k) ){
                
                document.getElementById("middle").className = "middle";
                document.getElementById("game-over").className = "game-over";
                document.getElementById("text").className = "text";
                document.getElementById("text3").innerHTML="Score: " + score;
                document.getElementById("wrapper").className="name";
                
                return true;

            }

        }
    }
    for(i=20; i<49; i++){
        if((snakeheadx ==15) && (snakeheady==i)){

            document.getElementById("middle").className = "middle";
            document.getElementById("game-over").className = "game-over";
            document.getElementById("text").className = "text";
            document.getElementById("text3").innerHTML="Score: " + score;
            document.getElementById("wrapper").className="name";
            return true;

        }
    }
    
    for(i=0; i<15; i++){
        if((snakeheadx == i) && (snakeheady == 10) ){
        document.getElementById("middle").className = "middle";
        document.getElementById("game-over").className = "game-over";
        document.getElementById("text").className = "text";
        document.getElementById("text3").innerHTML="Score: " + score;
        document.getElementById("wrapper").className="name";
                return true;
        }
    }
    for(i=27; i<49; i++){
        if((snakeheadx == i) && (snakeheady == 38) ){
        document.getElementById("middle").className = "middle";
        document.getElementById("game-over").className = "game-over";
        document.getElementById("text").className = "text";
        document.getElementById("text3").innerHTML="Score: " + score;
        document.getElementById("wrapper").className="name";
                return true;
        }
    }
    for(i=0; i<25; i++){
        if((snakeheadx == 33) && (snakeheady == i) ){
        document.getElementById("middle").className = "middle";
        document.getElementById("game-over").className = "game-over";
        document.getElementById("text").className = "text";
        document.getElementById("text3").innerHTML="Score: " + score;
        document.getElementById("wrapper").className="name";
                return true;
        }
    }
    if(dir=="right"){snakeheadx++}
    else if(dir=="down"){snakeheady++}
    else if(dir=="up"){snakeheady--}
    else if(dir=="left"){snakeheadx--}

    if(snakeheadx== food.x && snakeheady == food.y ){
        food= {
            x: Math.round(Math.random()*(47) +1.0),
            y: Math.round(Math.random()*(47) +1.0)
        }
        score=score+10;
        for(i=20; i<49; i++){
            if((food.x == 15) && (food.y == i) )
            (food.x)--;
        }
        for(i=0; i<15; i++){
            if((food.x == i) && (food.y == 10) )
            (food.y)--;
        }
        for(i=27; i<49; i++){
            if((food.x == i) && (food.y == 38) )
            (food.y)--;
        }
        for(i=0; i<25; i++){
            if((food.x == 33) && (food.y == i) )
            (food.x)--;
        }
    }
    
    else{
        snake.pop();
    }
    var newhd = {
        x : snakeheadx,
        y : snakeheady

    }
    
    snake.unshift(newhd);
    
    for(i=0; i < snakelen; i++){
        var a= snake[i].x;
        var b= snake[i].y;
        draw(a,b);
    }
    drawhead(snake[0].x, snake[0].y);
      
    for(i=0; i<50; i++){
        drawmaze(i,49);
        drawmaze(49,i);
        drawmaze(0,i);
        drawmaze(i,0);
    }

    for(i=20; i<49; i++){
        drawmaze(15,i);
    }
    for(i=0; i<15; i++){
        drawmaze(i,10);
    }
    for(i=27; i<49; i++){
        drawmaze(i,38);
    }
    for(i=0; i<25; i++){
        drawmaze(33, i);
    }
    document.getElementById("score").innerHTML="Score: " + score;
}






var pred;



function Drawsnakeauto(){
    
    

    ctx.clearRect(0, 0, cvs.width, cvs.height);

    var snakeheadx = snake[0].x
    var snakeheady = snake[0].y

    drawFood(food.x , food.y);



    

    if(snakeheadx<1 || snakeheady<1  || snakeheadx>=(49) || snakeheady>=(49)){
        document.getElementById("middle").className = "middle";
        document.getElementById("game-over").className = "game-over";
        document.getElementById("text").className = "text";
        document.getElementById("text3").innerHTML="Score: " + score;
        document.getElementById("wrapper").className="name";
                return true;


    }
    

    
    for(i=20; i<49; i++){
        if((snakeheadx ==15) && (snakeheady==i)){

            document.getElementById("middle").className = "middle";
            document.getElementById("game-over").className = "game-over";
            document.getElementById("text").className = "text";
            document.getElementById("text3").innerHTML="Score: " + score;
            document.getElementById("wrapper").className="name";
            return true;

        }
    }
    
    for(i=0; i<15; i++){
        if((snakeheadx == i) && (snakeheady == 10) ){
        document.getElementById("middle").className = "middle";
        document.getElementById("game-over").className = "game-over";
        document.getElementById("text").className = "text";
        document.getElementById("text3").innerHTML="Score: " + score;
        document.getElementById("wrapper").className="name";
                return true;
        }
    }
    for(i=27; i<49; i++){
        if((snakeheadx == i) && (snakeheady == 38) ){
        document.getElementById("middle").className = "middle";
        document.getElementById("game-over").className = "game-over";
        document.getElementById("text").className = "text";
        document.getElementById("text3").innerHTML="Score: " + score;
        document.getElementById("wrapper").className="name";
                return true;
        }
    }
    for(i=0; i<25; i++){
        if((snakeheadx == 33) && (snakeheady == i) ){
        document.getElementById("middle").className = "middle";
        document.getElementById("game-over").className = "game-over";
        document.getElementById("text").className = "text";
        document.getElementById("text3").innerHTML="Score: " + score;
        document.getElementById("wrapper").className="name";
                return true;
        }
    }
    var snakelen = snake.length;
    if(((snake[0].x) != (snake[1].x)) && ((snake[2].x) != (snake[1].x))){
        for(i=1; i<snakelen ; i++){

            var q= snake[i].x;
            var k= snake[i].y;
    
            if((snakeheadx==q) && (snakeheady==k) ){
                
                document.getElementById("middle").className = "middle";
                document.getElementById("game-over").className = "game-over";
                document.getElementById("text").className = "text";
                document.getElementById("text3").innerHTML="Score: " + score;
                document.getElementById("wrapper").className="name";
                return true;

            }

        }
    }

    if(snakeheadx== food.x && snakeheady == food.y ){
        food= {
            x: Math.round(Math.random()*(47) +1.0),
            y: Math.round(Math.random()*(47) +1.0)
        }
        score= score+10;
        for(i=20; i<49; i++){
            if((food.x == 15) && (food.y == i) )
            (food.x)--;
        }
        for(i=0; i<15; i++){
            if((food.x == i) && (food.y == 10) )
            (food.y)--;
        }
        for(i=27; i<49; i++){
            if((food.x == i) && (food.y == 38) )
            (food.y)--;
        }
        for(i=0; i<25; i++){
            if((food.x == 33) && (food.y == i) )
            (food.x)--;
        }
    }

    else{
        snake.pop();
    }
    
    if((food.x == snakeheadx) &&(food.y < snakeheady)){
        
        dir="up";

        
    }
    if((food.x == snakeheadx) &&(food.y > snakeheady)){
        
        dir="down";

        
    }
    if(food.x < snakeheadx){
        
        dir="left";
        if(pred=="right"){
            dir=="down";
        }
        
        
        for(i=0; i<15; i++){
            if((snakeheadx == i) && (snakeheady == 9)){
            dir="right" ;
            
            }
            if((snakeheadx == i) && (snakeheady == 11)){
            dir="right";
            
            }
        }
        if(food.y>snakeheady){
        if((snakeheadx==15) && (snakeheady==9))
        dir="down";}
        if(food.y<snakeheady){
        if((snakeheadx==15) && (snakeheady==11))
        dir="up";}

        if(food.y<snakeheady){
            if((snakeheadx==15) && (snakeheady==10))
            dir="up";
        }
        if(food.y>snakeheady){
            if((snakeheadx==15) && (snakeheady==10))
            dir="down";
        }
        

        
        


    }

    if(food.x > snakeheadx){
        
        dir="right";
        if(pred=="left"){
            dir="up";
        }

        for(i=27; i<49; i++){
            if((snakeheadx == i) && (snakeheady == 37)){
            dir="left" ;
            if(pred=="right"){
                dir="up";
            }
            }

            if((snakeheadx == i) && (snakeheady == 39)){
            dir="left";
            if(pred=="right"){
                dir="down";
            }
            }
        }
        if(food.y>snakeheady){
        if((snakeheadx==26) && (snakeheady==37))
        dir="down"; }
        if(food.y<snakeheady){
        if((snakeheadx==26) && (snakeheady==39))
        dir="up"; }
        
        if(food.y<snakeheady){
            if((snakeheadx==26) && (snakeheady==38))
            dir="up";
        }
        if(food.y>snakeheady){
            if((snakeheadx==26) && (snakeheady==38))
            dir="down";
        }
        
    }

    for(i=20; i<49; i++){

        if((snakeheadx == 14) && (snakeheady == i) && (pred!="down"))
        dir="up" ;
        if((snakeheadx == 16) && (snakeheady == i) && (pred!="down"))
        dir="up";
        if((snakeheadx == 14) && (snakeheady == i) && (pred=="down")&&(food.x<14))
        dir="left" ;
        
        if((snakeheadx == 16) && (snakeheady == i) && (pred=="down")&&(food.x>16))
        dir="right";

    }
    for(i=0; i<15; i++){
        if(food.x>=snakeheadx){
        if((snakeheadx == i) && (snakeheady == 9) && (pred!="left")){
        dir="right" ;
        if(food.y < snakeheady){
            dir="up"
        }
    }
        if((snakeheadx == i) && (snakeheady == 11) && (pred!="left")){
        dir="right";
        if(food.y > snakeheady){
            dir="down"
        }
    }
    }

    if(food.x<snakeheadx){
        if(food.y<9){
        if((snakeheadx == i) && (snakeheady == 9))
        dir="up" ;}
        if(food.y>11){
        if((snakeheadx == i) && (snakeheady == 11))
        dir="down"; }
        if((food.y==11)){
            if((snakeheadx == i) && (snakeheady == 11))
            dir="left"; }
            if((food.y==9)){
                if((snakeheadx == i) && (snakeheady == 9))
                dir="left"; }
        
    }









        
    }
    for(i=27; i<49; i++){
        if(food.x<=snakeheadx){
        if((snakeheadx == i) && (snakeheady == 37) && (pred!="right")){
        dir="left" ;
        if(food.y < snakeheady){
            dir="up"
        }
        }
        if((snakeheadx == i) && (snakeheady == 37) && (pred=="right")){
            dir="up";}
        if((snakeheadx == i) && (snakeheady == 39) && (pred!="right")){
        dir="left";
        if(food.y > snakeheady){
            dir="down"
        }
        }
        if((snakeheadx == i) && (snakeheady == 39) && (pred=="right")){
            dir="down";}
     }
        if(food.x>snakeheadx){
            if(food.y<37){
            if((snakeheadx == i) && (snakeheady == 37))
            dir="up" ;}
            if(food.y>39){
            if((snakeheadx == i) && (snakeheady == 39))
            dir="down"; }
            if(food.y==39){
                if((snakeheadx == i) && (snakeheady == 39))
                dir="right"; }
            if(food.y==37){
                if((snakeheadx == i) && (snakeheady == 37))
                dir="right"; }
            
        }
        
    }
    for(i=0; i<25; i++){
        if((snakeheadx == 32) && (snakeheady == i) && (pred!="up"))
        dir="down" ;
        if((snakeheadx == 34) && (snakeheady == i) && (pred!="up"))
        dir="down";
        if((snakeheadx == 32) && (snakeheady == i) && (pred=="up")&&(food.x < 32))
        dir="left" ;
        if((snakeheadx == 34) && (snakeheady == i) && (pred=="up")&&(food.x > 34))
        dir="right";

    }
    pred = dir;

    if(dir=="right"){snakeheadx++}
    else if(dir=="down"){snakeheady++}
    else if(dir=="up"){snakeheady--}
    else if(dir=="left"){snakeheadx--}
    var newhd = {
        x : snakeheadx,
        y : snakeheady

    }
    
    snake.unshift(newhd);
    
    for(i=0; i < snakelen; i++){
        var a= snake[i].x;
        var b= snake[i].y;
        draw(a,b);
    }
    drawhead(snake[0].x, snake[0].y);
    for(i=0; i<50; i++){
        drawmaze(i,49);
        drawmaze(49,i);
        drawmaze(0,i);
        drawmaze(i,0);
    }

    for(i=20; i<49; i++){
        drawmaze(15,i);
    }
    for(i=0; i<15; i++){
        drawmaze(i,10);
    }
    for(i=27; i<49; i++){
        drawmaze(i,38);
    }
    for(i=0; i<25; i++){
        drawmaze(33, i);
    }
    document.getElementById("score").innerHTML="Score: " + score;
}















var speed;
speed = 100;
timer=setInterval(Drawsnake, speed);
document.getElementById("down").onclick=function() {
    
    
    speed = speed + 30;
    clearInterval(timer);
    timer=setInterval(Drawsnake, speed);
 }

document.getElementById("up").onclick=function() {
    
    
    speed = speed - 30;
    clearInterval(timer);
    timer=setInterval(Drawsnake, speed);
 }
 document.getElementById("autom").onclick=function() {

    clearInterval(timer);
    timer=setInterval(Drawsnakeauto, speed);
}