//Callback Hell


var counter=document.getElementById("counter-text");
var msg =document.getElementById("text");
var c=10;
setInterval(()=>{
    if(c>0){
        counter.innerHTML=c;
        c--;
    }
    else{
        counter.innerHTML="<img src=\"https://media.tenor.com/itoowNhDvdsAAAAi/happy-independence-day-chhota-bheem.gif\" alt=\"HAPPY INDEPENDANCE DAY\">"
    }
    
},1000);