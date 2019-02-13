import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";
import { requestCountries, requestCities } from './service.js';
import { saveItem } from './storage.js'
require('./scss/search.scss');

const DATE_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

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
  option.value = '';
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
  let selectHotels = document.getElementById('select-country-hotels');
  let selectCars = document.getElementById('select-country-cars');
  for (let i = 0; i < data.length; i++) {
    let newOption = document.createElement('option');
    newOption.innerHTML = data[i].name;
    newOption.value = data[i].alpha2Code;
    selectHotels.appendChild(newOption.cloneNode(true));
    selectCars.appendChild(newOption);
  }
}

var forms = document.getElementsByClassName('for-history');

document.getElementById('select-country-hotels').addEventListener('change', onChangeCountry);
document.getElementById('select-country-cars').addEventListener('change', onChangeCountry);

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', function () {
    saveItem(forms[i]);
  });
}

for (let i = 0; i < forms.length; i++) {
  const startDateInput = forms[i].elements[0];
  const endDateInput = forms[i].elements[1];
  endDateInput.addEventListener('change', function () {
    forms[i].getElementsByClassName('search')[0].disabled = false; debugger
  });

  startDateInput.min = new Date().toISOString().split('T')[0]; //работа с датой
  startDateInput.addEventListener('change', function () {
    endDateInput.disabled = false;
    let startDate = startDateInput.value;
    let minEndDate = new Date(startDate).getTime() + DATE_IN_MILLISECONDS;
    endDateInput.min = new Date(minEndDate).toISOString().split('T')[0];
  });
}



