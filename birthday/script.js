let mybox = document.getElementById('box');
let stopIt = document.getElementById('stop');
let again = document.getElementById('again');
function stop() {
     mybox.style.animationPlayState = "paused";
}

stopIt.addEventListener('click', function stop() {
     mybox.style.animationPlayState = "paused";
});

again.addEventListener('click', function () {
     location.reload();
})