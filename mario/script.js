
let character = document.getElementById('character');
let block = document.getElementById('block');



function jump() {

     if (character.classList != ('animate')) {
          character.classList = ('animate');
     }

     setTimeout(function () {
          character.classList.remove('animate')
     }, 500);

}

let checkDead = setInterval(function () {
     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

     if (blockLeft < 70 && blockLeft > 0 && characterTop >= 120) {
          block.style.animation = "none";
          alert('u looose :)');
     }


}, 10)




