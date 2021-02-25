//Selecting The Id's
let click = document.getElementById('click');
let timer = document.getElementById('timer');
let timer2 = document.getElementById('timer2');
let showClick = document.getElementById('showClick');
let restart = document.getElementById('restart');
let showResult = document.getElementById('showReslut');
let ninjaImage = document.getElementById('ninjaImage');
let ninjaPost = document.getElementById('ninjaPost');
let ninjaClickCps = document.getElementById('ninjaClickCps');
let ninjaClicks = document.getElementById('ninjaClicks');


//Variables Declaration
var myVar=0;
var myVar2=0;
var timerSeconds = 0; //Seconds track
var clicks = 0;
var post = "";

//Adding Events on Buttons
click.addEventListener('click', clickerFunction);
restart.addEventListener('click',restartFun);

//Restart Evrything
function restartFun(){
    clearInterval(myVar);
    clearInterval(myVar2);
    click.style.border = "none";
    timerSeconds = 0;
    clicks = 0;
    myVar = 0;
    timer.innerHTML = '';
    timer2.innerHTML = '';
    showClick.innerHTML = clicks;
    click.disabled = false;
    showResult.style.display = "none";
}

//Calculate Clicks
function clickerFunction(){
    click.style.border = "5px solid green";
    if(clicks==0){
        myVar = setInterval(secondFunction,1000);
        myVar2 = setInterval(milliSecondFunction,10);
    }
    showClick.innerHTML = ++clicks;
    
}

//Calculate Seconds
function secondFunction(){
    if(timerSeconds<1){
        timer.innerHTML = timerSeconds++;
    }
    if(timerSeconds == 1){
        click.disabled = true;
        clearInterval(myVar);
        clearInterval(myVar2);
        setTimeout(showRes,500);
    }
}

//Calculate MilliSecond
function milliSecondFunction(){
    if(timerSeconds<1){
        var d = new Date();
        var n = d.getMilliseconds();
        timer2.innerHTML = '.' + n;
    }
}

//This Function Show Results
function showRes(){
    showResult.style.display = "block";
    if(clicks > 0 && clicks < 2){
        ninjaPost.innerHTML = "Genin";
        ninjaClickCps.innerHTML = clicks/1;
        ninjaClicks.innerHTML = clicks;
        ninjaImage.src = "../images/genin.jpeg";
    }else if(clicks >= 2 && clicks<=5){
        ninjaPost.innerHTML = "Chunin";
        ninjaClickCps.innerHTML = clicks/1;
        ninjaClicks.innerHTML = clicks;
        ninjaImage.src = "../images/chunin.jpeg";
    }else if(clicks >= 5 && clicks<=8){
        ninjaPost.innerHTML = "Jonin";
        ninjaClickCps.innerHTML = clicks/1;
        ninjaClicks.innerHTML = clicks;
        ninjaImage.src = "../images/jonin.jpeg";
    }else if(clicks >= 8 && clicks<=15){
        ninjaPost.innerHTML = "Sanin";
        ninjaClickCps.innerHTML = clicks/1;
        ninjaClicks.innerHTML = clicks;
        ninjaImage.src = "../images/sanin.jpeg";
    }else{
        ninjaPost.innerHTML = "Cheater or Champion";
        ninjaClickCps.innerHTML = clicks/1;
        ninjaClicks.innerHTML = clicks;
    }

}


