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

var status = function (response) {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}
var json = function (response) {
    return response.json()
}

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

function afterChangeCountrySelect(event) {
    var mas = event.target.id;
    alert(event.type, event.target);
    var value = event.target.value;
    var selectHotel = document.getElementById('select-city-cars');
    while (selectHotel.firstChild) {
        selectHotel.removeChild(selectHotel.firstChild);
    }
    var option = document.createElement('option');
    option.innerHTML = 'choose city';
    option.value = 'default';
    selectHotel.appendChild(option);
    fetch(`http://api.geonames.org/searchJSON?country=${value}&username=kathrynowy`)
        .then(status)
        .then(json)
        .then(function (data) {
            return data;
        })
        .then(function (data) {
            addCities(data.geonames);
        })
        .catch(function (error) {
            console.log('error', error);
        })
}

document.getElementById('select-country-hotels').addEventListener('change', function () { afterChangeCountrySelect(event); });
document.getElementById('select-country-cars').addEventListener('change', function () { afterChangeCountrySelect(event); });

/* document.getElementById('select-country-hotels').onchange = function () {
    var value = document.getElementById('select-country-hotels').value;
    var selectHotel = document.getElementById('select-city-hotels');
    while (selectHotel.firstChild) {
        selectHotel.removeChild(selectHotel.firstChild);
    }
    var option = document.createElement('option');
    option.innerHTML = 'choose city';
    option.value = 'default';
    selectHotel.appendChild(option);//stop
    fetch(`http://api.geonames.org/searchJSON?country=${value}&username=kathrynowy`)
        .then(status)
        .then(json)
        .then(function (data) {
            return data;
        })
        .then(function (data) {
            addCities(data.geonames);
        })
        .catch(function (error) {
            console.log('error', error);
        })
} */
//up
/* 
var value = document.getElementById('select-country-hotels').value;
    if (value = 'defolt') {
        var parentSelect = document.getElementById('select-city-hotels');
        alert(parentSelect);
        alert(parentSelect.childNodes[0].innerHTML);
        for (let i = 1; i < parentSelect.childNodes.length; i++) {
            parentSelect.removeChild(parentSelect.childNodes[i]);
        }
    }
 */

function addCities(data) {
    var selectCityForHotels = document.getElementById('select-city-hotels')
    for (let i = 0; i < data.length; i++) {
        var newOptionCity = document.createElement('option');
        newOptionCity.innerHTML = data[i].toponymName;
        newOptionCity.value = data[i].toponymName;
        selectCityForHotels.appendChild(newOptionCity);
    }
}

//cars

/* fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code')
    .then(status)
    .then(json)
    .then(function (data) {
        return data;
    })
    .then(function (data) {
        addCountriesCars(data);
    })
    .catch(function (error) {
        console.log('error', error);
    })


function addCountriesCars(data) {
    var selectHotels = document.getElementById('select-country-cars')
    for (let i = 0; i < data.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerHTML = data[i].name;
        newOption.value = data[i].alpha2Code;
        selectHotels.appendChild(newOption);
    }
}

document.getElementById('select-country-cars').onchange = function () {
    value = document.getElementById('select-country-cars').value;
    fetch(`http://api.geonames.org/searchJSON?country=${value}&username=kathrynowy`)
        .then(status)
        .then(json)
        .then(function (data) {
            return data;
        })
        .then(function (data) {
            console.log(data);
            addCitiesC(data.geonames);
        })
        .catch(function (error) {
            console.log('error', error);
        })
}

function addCitiesC(data) {
    var selectCityForHotels = document.getElementById('select-city-cars')
    for (let i = 0; i < data.length; i++) {
        var newOptionCity = document.createElement('option');
        newOptionCity.innerHTML = data[i].toponymName;
        newOptionCity.value = data[i].toponymName;
        selectCityForHotels.appendChild(newOptionCity);
    }
}
 */