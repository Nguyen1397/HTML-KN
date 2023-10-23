function checkUsername() {                                      // Khai báo hàm
    var username = el.value;                                    // Gán giá trị cho username
    if (username.length < 5) {                                  // Nếu username dưới 5 kí tự
        elMsg.className = 'warning';                            // Đổi class của message
        elMsg.textContent = 'Not long enough, yet...';          // Sửa nội dung message
    } else {                                                    // Nếu không thì...
        elMsg.textContent = '';                                 // Xóa message
    }
}

function tipUsername() {                                        // Khai báo hàm                          
    elMsg.className = 'tip';                                    // Đổi class của message
    elMsg.innerHTML = 'Username must be at least 5 characters'; // Thêm message
}

var el = document.getElementById('username');                   // Dữ liệu đầu vào của username
var elMsg = document.getElementById('feedback');                // Phần tử dùng để giữ message

// Đưa ra 2 sự kiện
el.addEventListener('focus', tipUsername, false);               // Khi có tiêu điểm -> gọi hàm tip
el.addEventListener('blur', checkUsername, false);              // Khi mất tiêu điểm -> gọi hàm check