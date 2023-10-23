var list = document.getElementsByTagName('ul')[0];
// Thêm vào đầu ul
var newLi1 = document.createElement('li');
var li1Text = document.createTextNode('Một');
newLi1.appendChild(li1Text);
list.insertBefore(newLi1, list.children[0]);
// Thêm vào cuối ul
var newLi2 = document.createElement('li');
var li2Text = document.createTextNode('Sáu');
newLi2.appendChild(li2Text);
list.appendChild(newLi2);
// Thêm classname cho tất cả li
var listItem = document.querySelectorAll('li');
for (var i = 0; i < listItem.length; i++) {
    listItem[i].className = 'dark';
}
document.write('Số phần tử trong ul là: ' + listItem.length);
