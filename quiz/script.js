let question = document.getElementsByTagName('select');
let qu = document.querySelectorAll('.qu');
let counter = 60;
let myTime = document.getElementById('my-time');
let trueAnswer = document.getElementById('true-answer');
let won = document.getElementById('won');
let loose = document.getElementById('loose');
let body = document.body;
let winsound = document.getElementById('winsound');
let loosesound = document.getElementById('loosesound');

function win() {
     winsound.src = "win.mp3"
}
function loos() {
     winsound.src = "cry.mp3"
}










let timer = setInterval(() => {
     counter--;
     myTime.innerHTML = counter;
     if (counter == 0) {
          clearInterval(timer);
          loos();
          loose.style.display = "block";

     }
}, 1000);

let mychan = document.getElementById('my-chance');

let chance = 3;
let tAnswer = 0;

for (let i = 0; i < question.length; i++) {
     question[i].addEventListener('change', function () {
          if (question[i].value == "true") {
               tAnswer++;


               if (tAnswer == question.length) {
                    won.style.display = "block";
                    win();
                    clearInterval(timer);
               }

               this.style.display = "none"
               trueAnswer.innerHTML = tAnswer;
          } else {
               chance--;
               mychan.innerHTML = chance;
          }
          if (chance == 0) {
               loos();
               loose.style.display = "block";
               loose.addEventListener('click', function () {
                    location.reload();
               })


          }
     })
}

question[0].style.backgroundColor = "#fe4a49";
question[1].style.backgroundColor = " #2ab7ca";
question[2].style.backgroundColor = "#fed766";
question[3].style.backgroundColor = "darkgreen ";
question[4].style.backgroundColor = "darkpink";
question[5].style.backgroundColor = "#3c2f2f";
question[6].style.backgroundColor = " #1e1f26";
question[7].style.backgroundColor = "#851e3e";
question[8].style.backgroundColor = "#4a4e4d";
question[9].style.backgroundColor = "#2a4d69";
question[10].style.backgroundColor = "#009688";
question[11].style.backgroundColor = "#ee4035";
