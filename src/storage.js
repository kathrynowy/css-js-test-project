export { checkType, getHistory, saveItem };

function getHistory() {
  return JSON.parse(localStorage.getItem('key')) || [];
}

function setLocalStorage(historyList) {
  localStorage.setItem('key', JSON.stringify(historyList));
}

function saveItem(form) {
  let historyList = getHistory();
  let length = form.elements.length - 2;
  var obj = {};
  obj.type = form.id;
  obj.id = Math.random();
  for (let j = 0; j < length; j++) {
    obj[form.elements[j].id] = form.elements[j].value;
  }
  historyList.push(obj);
  setLocalStorage(historyList);
}
function formatPlane(historyList) {
  var endDate = new Date(historyList['input-enddate-flights']);
  var startDate = new Date(historyList['input-startdate-flights']);
  return historyToString(startDate, endDate) + ', ' + historyList['input-from-flights'] + ',  ' + historyList['input-to-flights'];
}
function formatBed(historyList) {
  var endDate = new Date(historyList['input-enddate-hotels']);
  var startDate = new Date(historyList['input-startdate-hotels']);
  return historyToString(startDate, endDate) + ', ' + historyList['amenities-select-hotels'] + ',  ' + historyList['select-country-hotels'] + ',  ' + historyList['select-city-hotels'];
}
function formatCar(historyList) {
  var endDate = new Date(historyList['input-enddate-cars']);
  var startDate = new Date(historyList['input-startdate-cars']);
  return historyToString(startDate, endDate) + ', ' + historyList['type-cars-select'] + ',  ' + historyList['select-country-cars'] + ',  ' + historyList['select-city-cars'];
}

function checkType(historyList) {
  let str = '';
  if (historyList.type == 'plane') str = formatPlane(historyList);
  if (historyList.type == 'bed') str = formatBed(historyList);
  if (historyList.type == 'car') str = formatCar(historyList);
  return str;
}
function historyToString(startDate, endDate) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return startDate.toLocaleString("en-US", options) + ' - ' + endDate.toLocaleString("en-US", options);
}



