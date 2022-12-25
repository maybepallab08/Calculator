const screen=document.getElementById('screen');

function erase(){
    screen.innerHTML='';
}

function number(num){
 screen.innerHTML+=num;
}
function operator(op){
    screen.innerHTML+=op;
}
function equals(){
    screen.innerHTML=eval(screen.innerHTML);
}
function eraseone(){
    screen.innerHTML=screen.innerHTML.slice(0,-1);
}
function parentheses(p){
    if(p==1){
 screen.innerHTML+='(';
    }
    else{
        screen.innerHTML+=')';
    }
}