var arrHistory = JSON.parse(localStorage.getItem('key')) || [];

var ul = document.getElementById('for-history');
for (let i = 0; i < arrHistory.length; i++) {
  let li = document.createElement('li');
  alert(document);
  var strToLi = '';
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (arrHistory[i].type == 'plane') {
    var endDate = new Date(arrHistory[i]['input-enddate-flights']);
    var startDate = new Date(arrHistory[i]['input-startdate-flights']);
    strToLi = historyToString(startDate, endDate) + ', ' + arrHistory[i]['input-from-flights'] + ',  ' + arrHistory[i]['input-to-flights'];
  }
  if (arrHistory[i].type == 'bed') {
    var endDate = new Date(arrHistory[i]['input-enddate-hotels']);
    var startDate = new Date(arrHistory[i]['input-startdate-hotels']);
    strToLi = historyToString(startDate, endDate) + ', ' + arrHistory[i]['amenities-select-hotels'] + ',  ' + arrHistory[i]['select-country-hotels'] + ',  ' + arrHistory[i]['select-city-hotels'];
  }
  if (arrHistory[i].type == 'car') {
    var endDate = new Date(arrHistory[i]['input-enddate-cars']);
    var startDate = new Date(arrHistory[i]['input-startdate-cars']);
    strToLi = historyToString(startDate, endDate) + ', ' + arrHistory[i]['type-cars-select'] + ',  ' + arrHistory[i]['select-country-cars'] + ',  ' + arrHistory[i]['select-city-cars'];
  }

  function historyToString(startDate, endDate) {
    return startDate.toLocaleString("en-US", options) + ' - ' + endDate.toLocaleString("en-US", options);
  }

  li.innerHTML = strToLi;
  li.className = 'list-group-item';
  ul.appendChild(li);
}
