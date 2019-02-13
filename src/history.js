export default checkType;

function isPlane(arrHistory, i) {
  var endDate = new Date(arrHistory[i]['input-enddate-flights']);
  var startDate = new Date(arrHistory[i]['input-startdate-flights']);
  return historyToString(startDate, endDate) + ', ' + arrHistory[i]['input-from-flights'] + ',  ' + arrHistory[i]['input-to-flights'];
}
function isBed(arrHistory, i) {
  var endDate = new Date(arrHistory[i]['input-enddate-hotels']);
  var startDate = new Date(arrHistory[i]['input-startdate-hotels']);
  return historyToString(startDate, endDate) + ', ' + arrHistory[i]['amenities-select-hotels'] + ',  ' + arrHistory[i]['select-country-hotels'] + ',  ' + arrHistory[i]['select-city-hotels'];
}
function isCar(arrHistory, i) {
  var endDate = new Date(arrHistory[i]['input-enddate-cars']);
  var startDate = new Date(arrHistory[i]['input-startdate-cars']);
  return historyToString(startDate, endDate) + ', ' + arrHistory[i]['type-cars-select'] + ',  ' + arrHistory[i]['select-country-cars'] + ',  ' + arrHistory[i]['select-city-cars'];
}

function checkType(arrHistory, i) {
  var str = '';
  if (arrHistory[i].type == 'plane') str = isPlane(arrHistory, i);
  if (arrHistory[i].type == 'bed') str = isBed(arrHistory, i);
  if (arrHistory[i].type == 'car') str = isCar(arrHistory, i);
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



