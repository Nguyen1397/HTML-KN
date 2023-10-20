var pass = 50;
var score = 75;
var msg;

if (score > pass) {
    msg = 'Congratilations, you passed!';
} else {
    msg = 'Have anothet go!';
}

var el = document.getElementById('answer');
el.textContent = msg;