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

function request(url) {
    var status = function (response) {
        if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText))
        }
        return Promise.resolve(response)
    }
    var json = function (response) {
        return response.json()
    }
    return fetch(url)
        .then(status)
        .then(json)
        .catch(function (error) {
            console.log('error', error);
        })
}

requestCountries().then(addCountries);
function requestCountries() {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code';
    return request(url)
}

function requestCities(countryId) {
    const url = `http://api.geonames.org/searchJSON?country=${countryId}&username=kathrynowy`;
    return request(url)
}

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
var arrHistory = [];
document.getElementById('select-country-hotels').addEventListener('change', function () { onChangeCountry(event); });
document.getElementById('select-country-cars').addEventListener('change', function () { onChangeCountry(event); });
var keyForHistory = 'key';
document.getElementById('hotelsSub').addEventListener('submit', function () {
    var count = document.getElementById('hotelsSub').elements.length - 2;
    var paste = document.getElementById('paste');
    var objectWithData = {};
    for (let i = 0; i < count; i++) {
        var value = document.getElementById('hotelsSub').elements[i].value;
        var id = document.getElementById('hotelsSub').elements[i].id;
        if (value != 0 && value != undefined && value != null) {
            objectWithData[id] = value;
        }
    }
    arrHistory.push(JSON.stringify(objectWithData));
    localStorage.setItem(keyForHistory, arrHistory);
})
