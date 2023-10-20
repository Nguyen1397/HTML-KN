const don_1 = document.getElementById('don1');
const don_2 = document.getElementById('don2');
const don_3 = document.getElementById('don3');

// Nội dung đơn hàng 1
var don1 = {
    gia: 30,
    so_luong: 3,
    tong: gia * so_luong,
    tinh:function() {
        document.write('Gia: ' + this.gia + '<br>');
    }
}
don_1.textContent = don1.tinh;
don_1.className = 'ko';

// Nội dung đơn hàng 2


// Nội dung đơn hàng 3
