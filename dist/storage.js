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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/storage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: checkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkType\", function() { return checkType; });\n\n\nfunction isPlane(arrHistory, i) {\n  var endDate = new Date(arrHistory[i]['input-enddate-flights']);\n  var startDate = new Date(arrHistory[i]['input-startdate-flights']);\n  return historyToString(startDate, endDate) + ', ' + arrHistory[i]['input-from-flights'] + ',  ' + arrHistory[i]['input-to-flights'];\n}\n\nfunction isBed(arrHistory, i) {\n  var endDate = new Date(arrHistory[i]['input-enddate-hotels']);\n  var startDate = new Date(arrHistory[i]['input-startdate-hotels']);\n  return historyToString(startDate, endDate) + ', ' + arrHistory[i]['amenities-select-hotels'] + ',  ' + arrHistory[i]['select-country-hotels'] + ',  ' + arrHistory[i]['select-city-hotels'];\n}\n\nfunction isCar(arrHistory, i) {\n  var endDate = new Date(arrHistory[i]['input-enddate-cars']);\n  var startDate = new Date(arrHistory[i]['input-startdate-cars']);\n  return historyToString(startDate, endDate) + ', ' + arrHistory[i]['type-cars-select'] + ',  ' + arrHistory[i]['select-country-cars'] + ',  ' + arrHistory[i]['select-city-cars'];\n}\n\nfunction checkType(arrHistory, i) {\n  var str = '';\n  if (arrHistory[i].type == 'plane') str = isPlane(arrHistory, i);\n  if (arrHistory[i].type == 'bed') str = isBed(arrHistory, i);\n  if (arrHistory[i].type == 'car') str = isCar(arrHistory, i);\n  return str;\n}\n\nfunction historyToString(startDate, endDate) {\n  const options = {\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n  };\n  return startDate.toLocaleString(\"en-US\", options) + ' - ' + endDate.toLocaleString(\"en-US\", options);\n}\n\n//# sourceURL=webpack:///./src/history.js?");

/***/ }),

/***/ "./src/scss/history.scss":
/*!*******************************!*\
  !*** ./src/scss/history.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/history.scss?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.js */ \"./src/history.js\");\n__webpack_require__(/*! ./scss/history.scss */ \"./src/scss/history.scss\");\n\n\nvar arrHistory = JSON.parse(localStorage.getItem('key')) || [];\nvar ul = document.getElementById('for-history');\n\nfor (let i = 0; i < arrHistory.length; i++) {\n  let li = document.createElement('li');\n  var str = Object(_history_js__WEBPACK_IMPORTED_MODULE_0__[\"checkType\"])(arrHistory, i);\n  li.innerHTML = str;\n  li.className = 'list-group-item';\n  li.id = i;\n  ul.appendChild(li);\n  let btn = document.createElement('button');\n  btn.type = 'button';\n  btn.id = i;\n  btn.innerHTML = \"Х\";\n  btn.className = \"close\";\n  li.appendChild(btn);\n}\n\nvar closeBtns = document.getElementsByClassName('close');\n\nfor (let i = 0; i < closeBtns.length; i++) {\n  closeBtns[i].addEventListener('click', function () {\n    closeBtns[i].parentNode.parentNode.removeChild(closeBtns[i].parentNode);\n    arrHistory.splice(i, 1);\n    localStorage.setItem('key', JSON.stringify(arrHistory));\n  });\n}\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ })

/******/ });