require('./scss/history.scss');

import { checkType } from './history.js'
var arrHistory = JSON.parse(localStorage.getItem('key')) || [];
var ul = document.getElementById('for-history');
for (let i = 0; i < arrHistory.length; i++) {
  let li = document.createElement('li');
  var str = checkType(arrHistory, i);

  li.innerHTML = str;
  li.className = 'list-group-item';
  li.id = i;
  ul.appendChild(li);
  let btn = document.createElement('button');
  btn.type = 'button';
  btn.id = i;
  btn.innerHTML = "Х";
  btn.className = "close";
  li.appendChild(btn);
}

var closeBtns = document.getElementsByClassName('close');
for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener('click', function () {
    closeBtns[i].parentNode.parentNode.removeChild(closeBtns[i].parentNode);
    arrHistory.splice(i, 1);
    localStorage.setItem('key', JSON.stringify(arrHistory));
  })
}




