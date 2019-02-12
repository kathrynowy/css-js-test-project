/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.js */ \"./src/service.js\");\n__webpack_require__(/*! ./scss/home.scss */ \"./src/scss/home.scss\");\n\n\nObject(_service_js__WEBPACK_IMPORTED_MODULE_0__[\"requestCountries\"])().then(addCountries);\n\nfunction onChangeCountry(event) {\n  var objChange = event.target.id.split('-');\n  var currentTab = objChange[2];\n  var selectHotel = document.getElementById('select-city-' + currentTab);\n\n  while (selectHotel.firstChild) {\n    selectHotel.removeChild(selectHotel.firstChild);\n  }\n\n  var option = document.createElement('option');\n  option.innerHTML = 'choose city';\n  option.value = 'default';\n  selectHotel.appendChild(option);\n  Object(_service_js__WEBPACK_IMPORTED_MODULE_0__[\"requestCities\"])(event.target.value).then(function (data) {\n    addCities(data.geonames, currentTab);\n  });\n}\n\ndocument.getElementById('select-country-hotels').addEventListener('change', function () {\n  onChangeCountry(event);\n});\ndocument.getElementById('select-country-cars').addEventListener('change', function () {\n  onChangeCountry(event);\n});\n\nfunction addCities(geoNames, currentTab) {\n  var selectCityForHotels = document.getElementById('select-city-' + currentTab);\n\n  for (let i = 0; i < geoNames.length; i++) {\n    var newOptionCity = document.createElement('option');\n    newOptionCity.innerHTML = geoNames[i].toponymName;\n    newOptionCity.value = geoNames[i].toponymName;\n    selectCityForHotels.appendChild(newOptionCity);\n  }\n}\n\nfunction addCountries(data) {\n  var selectHotels = document.getElementById('select-country-hotels');\n  var selectCars = document.getElementById('select-country-cars');\n\n  for (let i = 0; i < data.length; i++) {\n    var newOption = document.createElement('option');\n    newOption.innerHTML = data[i].name;\n    newOption.value = data[i].alpha2Code;\n    selectHotels.appendChild(newOption.cloneNode(true));\n    selectCars.appendChild(newOption);\n  }\n}\n\nvar forms = document.getElementsByClassName('for-history');\ndocument.getElementById('select-country-hotels').addEventListener('change', function () {\n  onChangeCountry(event);\n});\ndocument.getElementById('select-country-cars').addEventListener('change', function () {\n  onChangeCountry(event);\n});\n\nfor (let i = 0; i < forms.length; i++) {\n  forms[i].elements[1].addEventListener('change', function () {\n    forms[i].getElementsByClassName('search')[0].disabled = false;\n  });\n}\n\nvar arrHistory = JSON.parse(localStorage.getItem('key')) || [];\n\nfor (let i = 0; i < forms.length; i++) {\n  forms[i].addEventListener('submit', function () {\n    arrHistory = JSON.parse(localStorage.getItem('key')) || [];\n    let length = forms[i].elements.length - 2;\n    var obj = {};\n    obj.type = forms[i].id;\n\n    for (let j = 0; j < length; j++) {\n      obj[forms[i].elements[j].id] = forms[i].elements[j].value;\n    }\n\n    arrHistory.push(obj);\n    localStorage.setItem('key', JSON.stringify(arrHistory));\n  });\n}\n\ndocument.getElementById('input-startdate-flights').min = new Date().toISOString().split('T')[0];\n\ndocument.getElementById('input-startdate-flights').onchange = function () {\n  document.getElementById('input-enddate-flights').disabled = false;\n  var val = document.getElementById('input-startdate-flights').value;\n  var dt = new Date(val).getTime() + 24 * 60 * 60 * 1000;\n  document.getElementById('input-enddate-flights').min = new Date(dt).toISOString().split('T')[0];\n};\n\ndocument.getElementById('input-startdate-hotels').min = new Date().toISOString().split('T')[0];\n\ndocument.getElementById('input-startdate-hotels').onchange = function () {\n  document.getElementById('input-enddate-hotels').disabled = false;\n  var val = document.getElementById('input-startdate-hotels').value;\n  var dt = new Date(val).getTime() + 24 * 60 * 60 * 1000;\n  document.getElementById('input-enddate-hotels').min = new Date(dt).toISOString().split('T')[0];\n};\n\ndocument.getElementById('input-startdate-cars').min = new Date().toISOString().split('T')[0];\n\ndocument.getElementById('input-startdate-cars').onchange = function () {\n  document.getElementById('input-enddate-cars').disabled = false;\n  var val = document.getElementById('input-startdate-cars').value;\n  var dt = new Date(val).getTime() + 24 * 60 * 60 * 1000;\n  document.getElementById('input-enddate-cars').min = new Date(dt).toISOString().split('T')[0];\n};\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/scss/home.scss":
/*!****************************!*\
  !*** ./src/scss/home.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/home.scss?");

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/*! exports provided: requestCountries, requestCities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestCountries\", function() { return requestCountries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestCities\", function() { return requestCities; });\n\n\nfunction request(url) {\n  var status = function (response) {\n    if (response.status !== 200) {\n      return Promise.reject(new Error(response.statusText));\n    }\n\n    return Promise.resolve(response);\n  };\n\n  var json = function (response) {\n    return response.json();\n  };\n\n  return fetch(url).then(status).then(json).catch(function (error) {\n    console.log('error', error);\n  });\n}\n\nfunction requestCountries() {\n  const url = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code';\n  return request(url);\n}\n\nfunction requestCities(countryId) {\n  const url = `http://api.geonames.org/searchJSON?country=${countryId}&username=kathrynowy`;\n  return request(url);\n}\n\n//# sourceURL=webpack:///./src/service.js?");

/***/ })

/******/ });