




/* function request(url) {
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
 */
/* requestCountries().then(addCountries); */

/* function requestCountries() {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code';
    return request(url)
}
 */
/* function requestCities(countryId) {
    const url = `http://api.geonames.org/searchJSON?country=${countryId}&username=kathrynowy`;
    return request(url)
} */

/* function onChangeCountry(event) {
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

var forms = document.getElementsByClassName('for-history');

document.getElementById('select-country-hotels').addEventListener('change', function () { onChangeCountry(event); });
document.getElementById('select-country-cars').addEventListener('change', function () { onChangeCountry(event); });

for (let i = 0; i < forms.length; i++) {
    var length = forms[i].elements.length;
    forms[i].elements[1].addEventListener('change', function () {
        forms[i].getElementsByClassName('search')[0].disabled = false;
    });
} */
/* var key = 'key'; */
/*
Object.prototype.toString = function () {
    var str = '';
    for (let key in this) {
        str += this[key] + ' ';
    }
    return str;
}; */

/* var arrHistory = JSON.parse(localStorage.getItem('key')) || [];
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
 */

/* var ul = document.getElementById('for-history');
for (let i = 0; i < arrHistory.length; i++) {
    let li = document.createElement('li');
    var srtToLi = '';
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
 */