var today = new Date();
var hourNow = today.getHours();
var minuteNow = today.getMinutes();
var secondNow = today.getSeconds();
var greeting;

if (hourNow > 18) {
    greeting = 'Chào buổi tối!';
    cls_name = 'evening';
    b = 'pm';
} else if (hourNow > 12) {
    greeting = 'Chào buổi chiều!';
    cls_name = 'afternoon';
    b = 'pm';
} else if (hourNow > 0) {
    greeting = 'Chào buổi sáng!';
    cls_name = 'morning';
    b = 'am';
} else {
    greeting = 'Welcome!';
}

var el = document.getElementById('p');
el.textContent = greeting;
el.className = cls_name;

var time_now = document.getElementById('a');
time_now.textContent = ('Time: ' + hourNow + ':' + minuteNow + ':' + secondNow + ' ' + b);
time_now.className = 'time';