var fireEle = document.body.querySelector(".fire");
var iceEle = document.body.querySelector(".ice");
var poisonEle = document.body.querySelector(".poison");
var number1Ele = document.body.querySelector(".number");
var number2Ele = document.body.querySelector(".number2");
var number3Ele = document.body.querySelector(".number3");

var number1=-1;
number1Ele.innerHTML=number1;
var number2=+1;
number2Ele.innerHTML=number2;
var number3=0;
number3Ele.innerHTML=number3;

function fire(){
  number1=number1+3;
  number1Ele.innerHTML=number1;
}

fireEle.addEventListener("click", function(){
  fire();
})

function ice(){
  number2=number2+1;
  number2Ele.innerHTML=number2;
}

iceEle.addEventListener("click", function(){
  ice();
})

function poison(){
  number3=number3+4;
  number3Ele.innerHTML=number3;
}

poisonEle.addEventListener("click", function(){
  poison();
})

var damage=9
var number2=1
var answer=(damage+number2)
document.body.querySelector("#damage").innerHTML=answer;