//Functions
function clickFunction(){
    
    if(clickCount == 1){
        newFun(clickCount);
    }
    showClick.innerHTML = clickCount++;
    
}
function restartFunction(){
    
    if(myVar1!=0){
        clearInterval(myVar1);
        clearInterval(myVar2);
        showClick.innerHTML = '0';
        clickCount=1;
        timerSeconds = 0;
        timer.innerHTML = '0';
        timer2.innerHTML = '';
        click.disabled = false;
    }
}

//FUNCTION TO START INTERVALS
function newFun(c){
    myVar1 = setInterval(secondCount,1000);
    myVar2 = setInterval(milliSecondCount,1);
}

//SECOND COUNT FUNCTION
function secondCount(){
    if(timerSeconds<5){
        timer.innerHTML = ++timerSeconds;
    }else{
        click.disabled = true;
    } 
}

//MILLI SECOND COUNT FUNCTION
function milliSecondCount(){
    if(timerSeconds<5){
        var d = new Date();
        var n = d.getMilliseconds();
        timer2.innerHTML = n;
    }
    
}