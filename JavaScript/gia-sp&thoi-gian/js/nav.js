const don_1 = document.getElementById('don1');
const don_2 = document.getElementById('don2');
const don_3 = document.getElementById('don3');

// Nội dung đơn hàng 1
var don1 = function() {
    document.write('<h2>Don 1: </h2>');
    var gia = 31;
    var so_luong = 3;
    var tong = gia * so_luong;
    var giam_gia;
    document.write('<p>Gia: ' + gia + '<br>');
    document.write('So luong: ' + so_luong + '<br>');
    document.write('Tong: ' + tong + '<br>');
    if (tong > 100) {
        giam_gia = 5;
        cls_name = 'co';
    }
    else {
        giam_gia = 0;
        cls_name = 'ko';
    }
    document.write('Giam gia: ' + giam_gia + '%</p>')
}
don_1.textContent = don1();
don_1.className = cls_name;

// Nội dung đơn hàng 2


// Nội dung đơn hàng 3
