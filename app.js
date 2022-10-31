
let turn='x';
let gameStatus='s';
let squares=[];
let title=document.querySelector('.title');


function end(num1,num2,num3){
    console.log('done');

if(squares[num1]=='X' ){
    title.innerHTML='X winner';
}   
else if(squares[num1]=='O' ) {
    title.innerHTML='O winner';

} 
    //title.innerHTML='${squares[num1]} winner'; //this is the conflict
    document.getElementById('item'+num1).style.background="#000";  
    document.getElementById('item'+num2).style.background="#000";  
    document.getElementById('item'+num3).style.background="#000";  

    setInterval(function(){title.innerHTML+= '.'},1000);
    setTimeout(function(){location.reload()},4000)
}
function timer(){
    var timeleft = 13;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    
    setTimeout(function(){location.reload()},1000)
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
}

function winner(){
for (let i = 1; i < 10; i++){
    squares[i]=document.getElementById('item'+ i).innerHTML;
}
if(squares[1]==squares[2] &&squares[2]==squares[3] && squares[2]!=''){
  end(1,2,3);  
}
else if(squares[4]==squares[5] &&squares[5]==squares[6] && squares[5]!=''){
    end(4,5,6);  
}
else if(squares[7]==squares[8] &&squares[8]==squares[9] && squares[8]!=''){
    end(7,8,9);  
}
else if(squares[1]==squares[4] &&squares[4]==squares[7] && squares[4]!=''){
    end(1,4,7);  
}
else if(squares[2]==squares[5] &&squares[5]==squares[8] && squares[5]!=''){
    end(2,5,8);  
}
else if(squares[3]==squares[6] &&squares[6]==squares[9] && squares[6]!=''){
    end(3,6,9);  
}
else if(squares[1]==squares[5] &&squares[5]==squares[9] && squares[5]!=''){
    end(1,5,9);  
}
else if(squares[3]==squares[5] &&squares[5]==squares[7] && squares[5]!=''){
    end(3,5,7);  
}
}
function timer(){
    var timeleft = 16;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    
    setTimeout(function(){location.reload()},1000)
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
}
function game(id){
let element=document.getElementById(id);
if(gameStatus=='s'){
    timer();
}
gameStatus='q'
if(turn ==='x' && element.innerHTML==''){
    element.innerHTML='X';
    turn='o';
    title.innerHTML='O'
}
else if(turn ==='o' && element.innerHTML==''){
    element.innerHTML='O';
    turn='x';
    title.innerHTML='X'
}
winner();
}