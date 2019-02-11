import checkType from './history.js'
var arrHistory = JSON.parse(localStorage.getItem('key')) || [];
var ul = document.getElementById('for-history');
for (let i = 0; i < arrHistory.length; i++) {
  let li = document.createElement('li');
  var str = checkType(arrHistory, i);

  li.innerHTML = str;
  li.className = 'list-group-item';
  ul.appendChild(li);
}




