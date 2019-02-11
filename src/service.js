export { request, requestCountries, requestCities };
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

function requestCountries() {
  const url = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code';
  return request(url)
}

function requestCities(countryId) {
  const url = `http://api.geonames.org/searchJSON?country=${countryId}&username=kathrynowy`;
  return request(url)
}