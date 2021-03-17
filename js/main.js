var ul = document.querySelector('.wrapper__list .list');
var li = ul.querySelectorAll('li');
var height = 0;
for (i = 0; i < 12; i++) {
  height = height + li[i].offsetHeight;
  console.log(height);
}
ul.style.maxHeight = height+'px';
