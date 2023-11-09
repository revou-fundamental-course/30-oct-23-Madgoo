//Variable BMi Component
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("p");
var female = document.getElementById("w");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

notifyContent = document.querySelector(".notify-content");
notifyText = document.querySelector("#notifyText");
var notify = document.getElementById("myNotify");
var span = document.getElementsByClassName("close")[0];

//Fill Form Funtion
function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    notify.style.display = "block";
    notifyText.innerHTML = `Ada bagian yang belum terpilih atau terisi!`;

  }else{
    countBmi();
  }

}

//the BMI Formula
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
  
  //The Result short Explaination
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan Berat Badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Berat Badan Ideal';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan Berat Badan';
     }else if(30<=bmi){
    result = 'Berat Badan yang Berlebih (Obesitas)';
     
     }


//The result message 
resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Anda Memiliki <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

// Click X function to close the Notify box//
span.onclick = function() {
  notify.style.display = "none";
}

// click outside the box to close the notify//
window.onclick = function(event) {
  if (event.target == notify) {
    notify.style.display = "none";
  }
}
