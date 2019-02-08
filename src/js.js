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

function requestsProcessing(func, ...value) {
    var status = function (response) {
        if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText))
        }
        return Promise.resolve(response)
    }
    var json = function (response) {
        return response.json()
    }
    func(status, json, ...value);
}

requestsProcessing(requestCountries);

function requestCountries(status, json) {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code')
        .then(status)
        .then(json)
        .then(function (data) {
            return data;
        })
        .then(function (data) {
            addCountries(data);
        })
        .catch(function (error) {
            console.log('error', error);
        })
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

function onChangeCountry(event) {
    var objChange = (event.target.id).split('-');
    var obj = (objChange[2]);
    var selectHotel = document.getElementById('select-city-' + obj);
    while (selectHotel.firstChild) {
        selectHotel.removeChild(selectHotel.firstChild);
    }
    var option = document.createElement('option');
    option.innerHTML = 'choose city';
    option.value = 'default';
    selectHotel.appendChild(option);
    requestsProcessing(requestCities, event.target.value, obj);
}

function requestCities(status, json, ...value) {
    var valueM = value[0];
    fetch(`http://api.geonames.org/searchJSON?country=${valueM}&username=kathrynowy`)
        .then(status)
        .then(json)
        .then(function (data) {
            return data;
        })
        .then(function (data) {
            addCities(data.geonames, value[1]);
        })
        .catch(function (error) {
            console.log('error', error);
        })
}

function addCities(data, value) {
    var selectCityForHotels = document.getElementById('select-city-' + value)
    for (let i = 0; i < data.length; i++) {
        var newOptionCity = document.createElement('option');
        newOptionCity.innerHTML = data[i].toponymName;
        newOptionCity.value = data[i].toponymName;
        selectCityForHotels.appendChild(newOptionCity);
    }
}

document.getElementById('select-country-hotels').addEventListener('change', function () { onChangeCountry(event); });
document.getElementById('select-country-cars').addEventListener('change', function () { onChangeCountry(event); });
