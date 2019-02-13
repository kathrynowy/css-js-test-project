require('./scss/home.scss');

import { requestCountries, requestCities } from './service.js';


requestCountries().then(addCountries);

function onChangeCountry(event) {
  var objChange = (event.target.id).split('-');
  var currentTab = (objChange[2]);
  var selectHotel = document.getElementById('select-city-' + currentTab);
  while (selectHotel.firstChild) {
    selectHotel.removeChild(selectHotel.firstChild);
  }
  var option = document.createElement('option');
  option.innerHTML = 'choose city';
  option.value = 'default';
  selectHotel.appendChild(option);
  requestCities(event.target.value)
    .then(function (data) {
      addCities(data.geonames, currentTab)
    })
}

document.getElementById('select-country-hotels').addEventListener('change', function () { onChangeCountry(event); });
document.getElementById('select-country-cars').addEventListener('change', function () { onChangeCountry(event); });

function addCities(geoNames, currentTab) {
  var selectCityForHotels = document.getElementById('select-city-' + currentTab)
  for (let i = 0; i < geoNames.length; i++) {
    var newOptionCity = document.createElement('option');
    newOptionCity.innerHTML = geoNames[i].toponymName;
    newOptionCity.value = geoNames[i].toponymName;
    selectCityForHotels.appendChild(newOptionCity);
  }
}

function addCountries(data) {
  var selectHotels = document.getElementById('select-country-hotels');
  var selectCars = document.getElementById('select-country-cars');
  for (let i = 0; i < data.length; i++) {
    var newOption = document.createElement('option');
    newOption.innerHTML = data[i].name;
    newOption.value = data[i].alpha2Code;
    selectHotels.appendChild(newOption.cloneNode(true));
    selectCars.appendChild(newOption);
  }
}

var forms = document.getElementsByClassName('for-history');

document.getElementById('select-country-hotels').addEventListener('change', function () { onChangeCountry(event); });
document.getElementById('select-country-cars').addEventListener('change', function () { onChangeCountry(event); });

for (let i = 0; i < forms.length; i++) {
  forms[i].elements[1].addEventListener('change', function () {
    forms[i].getElementsByClassName('search')[0].disabled = false;
  });
}

var arrHistory = JSON.parse(localStorage.getItem('key')) || [];

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', function () {
    arrHistory = JSON.parse(localStorage.getItem('key')) || [];
    let length = forms[i].elements.length - 2;
    var obj = {};
    obj.type = forms[i].id;
    for (let j = 0; j < length; j++) {
      obj[forms[i].elements[j].id] = forms[i].elements[j].value;
    }
    arrHistory.push(obj);
    localStorage.setItem('key', JSON.stringify(arrHistory));
  });
}

document.getElementById('input-startdate-flights').min = new Date().toISOString().split('T')[0];

document.getElementById('input-startdate-flights').onchange = function () {
  document.getElementById('input-enddate-flights').disabled = false;
  var val = document.getElementById('input-startdate-flights').value;
  var dt = new Date(val).getTime() + 24 * 60 * 60 * 1000;
  document.getElementById('input-enddate-flights').min = new Date(dt).toISOString().split('T')[0];
}
document.getElementById('input-startdate-hotels').min = new Date().toISOString().split('T')[0];

document.getElementById('input-startdate-hotels').onchange = function () {
  document.getElementById('input-enddate-hotels').disabled = false;
  var val = document.getElementById('input-startdate-hotels').value;
  var dt = new Date(val).getTime() + 24 * 60 * 60 * 1000;
  document.getElementById('input-enddate-hotels').min = new Date(dt).toISOString().split('T')[0];
}

document.getElementById('input-startdate-cars').min = new Date().toISOString().split('T')[0];

document.getElementById('input-startdate-cars').onchange = function () {
  document.getElementById('input-enddate-cars').disabled = false;
  var val = document.getElementById('input-startdate-cars').value;
  var dt = new Date(val).getTime() + 24 * 60 * 60 * 1000;
  document.getElementById('input-enddate-cars').min = new Date(dt).toISOString().split('T')[0];
}
