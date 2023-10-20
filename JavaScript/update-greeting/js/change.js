function updateGreeting() {
    const greetingElement = document.getElementById('greeting'); // lấy ra phần tử có id là 'greeting'
    const timeElement = document.getElementById('time'); // lấy ra phần tử có id là 'time'
    const timeElement2 = document.getElementById('time2'); // lấy ra phần tử có id là 'time2'
    const secondsElement = document.querySelector('.seconds span'); // lấy ra <span> của phần tử có class là 'seconds'
    const currentTime = new Date(); //gán giá trị biến là tg hiện tại
    const currentHour = currentTime.getHours(); //gán giá trị biến là giờ hiện tại

    let greeting = '';
    let className = '';


    // Điều kiện để đưa ra câu chào dựa theo tg hiện tại
    if (currentHour < 12) {
        greeting = 'Chào buổi sáng';
        className = 'morning';
    } else if (currentHour < 18) {
        greeting = 'Chào buổi chiều';
        className = 'afternoon';
    } else {
        greeting = 'Chào buổi tối';
        className = 'evening';
    }

    greetingElement.textContent = greeting;
    greetingElement.className = className;

    // Hiển thị thời gian hiện tại
    const timeString = `Thời gian đầy đủ: ${currentTime}`;
    const timeString2 = `Thời gian rút gọn: ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;
    timeElement.textContent = timeString;
    timeElement2.textContent = timeString2;

    secondsElement.textContent = currentTime.getSeconds();
}

// Lặp lại hàm theo chu kì là mili giây
setInterval(updateGreeting, 1000);
// Gọi lại hàm
updateGreeting();

// Hàm đổi màu phần tử
function changeColor() {
    const textElement = document.getElementById('text');
    const currentColor = textElement.style.color;

    if (currentColor === 'blue') {
        textElement.style.color = 'red';
        textElement.textContent = 'Văn bản màu đỏ rồi sẽ thay màu';
    } else {
        textElement.style.color = 'blue';
        textElement.textContent = 'Văn bản màu xanh rồi sẽ thay màu';
    }
}
// Lặp lại hàm theo chu kì là mili giây
setInterval(changeColor, 1000);