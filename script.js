
var timee=60;
var hTarget=Math.floor(Math.random()*10);

score=0;
function newBubble(){
    var clutter="";
    for(var i=0 ; i<(15*7);i++){
    rn=Math.floor(Math.random()*10);
    clutter +=` <div class="bubble">${ rn}</div>`
}
document.querySelector(".panelbtm").innerHTML=clutter;
}
function Timerr(){
    var tiee =setInterval(function() {
        
        if(timee>0){timee--;document.querySelector(".timeval").textContent=timee;}
        else{
            document.querySelector(".panelbtm").textContent="Game over!";
clearInterval(tiee);
        }
    },1000);
    
    
}
function hitTarget(){
     hTarget=Math.floor(Math.random()*10);
    console.log(hTarget);
 document.querySelector(".hitval").textContent=hTarget;

}
function incscore(){
    score+=10;
    document.querySelector(".scoreval").textContent=score;
}
function scoreChange(){
    document.querySelector(".panelbtm").addEventListener("click",function(dets){
    var clickednum= Number(dets.target.textContent);
        if(clickednum==hTarget){
          newBubble();incscore();hitTarget();  }
    
    })
    
}
hitTarget();
Timerr();
newBubble();
scoreChange();