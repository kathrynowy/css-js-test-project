require('./scss/history.scss');
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";
import { checkType, getHistory } from './storage.js'

let historyList = getHistory();
let ulPagination = document.getElementById('pages');
let ul = document.getElementById('for-history');

addHistoryElements(1, historyList);

function deleteHistoryButtons() {
  while (ulPagination.firstChild) {
    ulPagination.removeChild(ulPagination.lastChild);
  }
}
function deleteHistory() {
  while (ul.firstChild) {
    ul.removeChild(ul.lastChild);
  }
}

function drawHistoryButtons() {
  deleteHistoryButtons();
  let countPages = (historyList.length % 5 != 0) ? (Math.trunc(historyList.length / 5) + 1) : Math.trunc(historyList.length / 5);
  for (let i = 0; i < countPages; i++) {
    let li = document.createElement('li');
    li.setAttribute('class', 'page-item');
    ulPagination.appendChild(li);
    let a = document.createElement('a');
    a.className = 'page-link';
    a.innerHTML = i + 1;
    a.id = historyList[i].id + 3;
    li.appendChild(a);
  }
}

drawHistoryButtons();

let pageLinks = document.getElementsByClassName('page-link');
for (let i = 0; i < pageLinks.length; i++) {
  pageLinks[i].addEventListener('click', drawHistory);
}

function addHistoryElements(count, historyList) {
  for (let i = count * 5 - 5; i < count * 5; i++) {
    if (historyList[i] != undefined) {
      let li = document.createElement('li');
      var str = `<i class="fas fa-${historyList[i].type}"></i>  `;
      str += checkType(historyList[i]);
      li.innerHTML = str;
      li.className = 'list-group-item';
      li.id = historyList[i].id + 1;
      ul.appendChild(li);
      let btn = document.createElement('button');
      btn.type = 'button';
      btn.id = historyList[i].id + 2;
      btn.innerHTML = '<i class="fas fa-times-circle"></i> ';
      btn.className = "close";
      btn.addEventListener('click', deleteOneHistory);
      li.appendChild(btn);
    }
  }
}

function drawHistory(event) {
  let count = event.target.innerHTML;
  deleteHistory();
  addHistoryElements(count, historyList);
}

function find(array, value) {
  for (var i = 0; i < array.length; i++) {
    if ((array[i].id).toFixed(5) == value.toFixed(5)) return i;
  }
  return -1;
}

function deleteOneHistory(event) {
  historyList.splice(find(historyList, event.target.parentNode.id - 2), 1);
  ul.removeChild(event.target.parentNode.parentNode);
  setLocalStorage(historyList);
  drawHistoryButtons();
}
