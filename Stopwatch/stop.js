let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

 let Id=null; //We declare Id to store the identifier for our timer. We start with null because the timer hasn’t started yet.

startBtn.addEventListener('click',function(){
    if(Id!==null){
        clearInterval(Id);
    }
    Id=setInterval(startTimer,10);
})

stopBtn.addEventListener('click',function(){
    clearInterval(Id);
})
resetBtn.addEventListener('click',function(){
    clearInterval(Id);
    timerDisplay.innerHTML=`00 : 00 : 000`;
})




function startTimer(){ //This function increases the msec by 1 every time it’s called (every 10 milliseconds).
    msec++;
    if(msec==100){//If msec reaches 100, we reset msec to 0 and increase secs by 1.
        msec=0;
        secs++;
        if(secs==60){//If secs reaches 60, we reset secs to 0 and increase mins by 1.
            secs=0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

