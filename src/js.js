document.getElementById('input-startdate-flights').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
document.getElementById('input-enddate-flights').onclick = function () {
    var minD = document.getElementById('input-startdate-flights').value;
    if (document.getElementById('input-startdate-flights').value != ' ') {
        document.getElementById('input-enddate-flights').min = minD;
    }
};

document.getElementById('input-startdate-hotels').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
document.getElementById('input-enddate-hotels').onclick = function () {
    var minD = document.getElementById('input-startdate-hotels').value;

    if (document.getElementById('input-startdate-hotels').value != ' ') {
        document.getElementById('input-enddate-hotels').min = minD;
    }
};

document.getElementById('input-startdate-cars').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
document.getElementById('input-enddate-cars').onclick = function () {
    var minD = document.getElementById('input-startdate-cars').value;

    if (document.getElementById('input-startdate-cars').value != ' ') {
        document.getElementById('input-enddate-cars').min = minD;
    }
};

var status = function (response) {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}
var json = function (response) {
    return response.json()
}

fetch('https://restcountries.eu/rest/v2/all?fields=name;')
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
    var selectH = document.getElementById('select-country-hotels')
    for (let i = 0; i < data.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerHTML = data[i].name;
        selectH.appendChild(newOption);
    }
}