
var table = 3;
var answer = Math.floor(Math.random() * 11);
window.onload = function() {
  document.getElementById("times").innerHTML = answer;
}

function check (value){
  console.log(value*table);
  console.log(answer*table);
  if (value*table===answer*table){       
    document.getElementById("output").innerHTML = "Correct!";
    var x = document.getElementsByClassName("number");
    console.log(x.length);
    for (i=0;i<x.length;i++){
      x[i].classList.add("disabled");
    }
    document.getElementById(value).classList.add("correct");
  }  
}

function next (){
  answer = Math.floor(Math.random() * 11);
  document.getElementById("times").innerHTML = answer;
  document.getElementById("output").innerHTML = "";
  var x = document.getElementsByClassName("number");
  console.log(x.length);
  for (i=0;i<x.length;i++){
    x[i].classList.remove("correct");
    x[i].classList.remove("disabled");
  }
 
  
};


