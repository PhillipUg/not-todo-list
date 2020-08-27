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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n// let arr = [\n//   {}\n// ]\n\n/*\n 1. create project object\n - add event listener\n - get input value\n - use input value to create object in local storage\n - use local storage to update project field\n\n -user shouldnt be able to create a list item without a project title\n\n - add functionality for the close btn on each proj title\n - add horizontal scroll\n\n\n 2. create todo item\n - add event listener\n - add some validation for the fields\n - get input value and use it to store list items in local storage\n - use local storage to update dom list field\n\n - add event listener to update list item status\n - add eventlistener for implementing editing functionality\n */\nObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setListItemsStorage\"])();\nObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setListStorage\"])();\n\nfunction Project(title) {\n\tthis.title = title;\n}\n\nconst projectInput = document.getElementById('project');\nconst createProject = document.getElementById('create-project');\n\ncreateProject.addEventListener('click', () => {\n\tif (projectInput.value) {\n\t\tconst newProject = new Project(projectInput.value);\n\t\tObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setLocalStorage\"])(Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]), _storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"], newProject);\n\t\tprojectInput.value = '';\n\t\trender();\n\t}\n});\n\nconst ul = document.querySelector('.list-group');\n\nfunction render() {\n\tul.innerHTML = '';\n\tlet local = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]);\n\n\tlocal.forEach((item, idx, array) => {\n\t\tconst li = document.createElement('li');\n\t\tli.classList.add('list-group-item', 'm-1', 'pr-3', 'border', 'rounded', 'wrap');\n\t\tli.innerText = array[idx].title;\n\n\t\tconst icon = document.createElement('i');\n\t\ticon.classList.add('fa', 'fa-times-circle', 'ml-2', 'text-danger');\n\n\t\tli.appendChild(icon);\n\t\tul.appendChild(li);\n\t});\n}\n\nvar rightBtn = document.getElementById('slide-right');\nrightBtn.onclick = function() {\n\t// var container = document.getElementById('container');\n\tsideScroll(ul, 'right', 25, 100, 10);\n};\n\nvar leftBtn = document.getElementById('slide-left');\nleftBtn.onclick = function() {\n\t// var container = document.getElementById('container');\n\tsideScroll(ul, 'left', 25, 100, 10);\n};\n\nfunction sideScroll(element, direction, speed, distance, step) {\n\tlet scrollAmount = 0;\n\tvar slideTimer = setInterval(function() {\n\t\tif (direction == 'left') {\n\t\t\telement.scrollLeft -= step;\n\t\t} else {\n\t\t\telement.scrollLeft += step;\n\t\t}\n\t\tscrollAmount += step;\n\t\tif (scrollAmount >= distance) {\n\t\t\twindow.clearInterval(slideTimer);\n\t\t}\n\t}, speed);\n}\nwindow.onload = render();\nlet closeBtns = document.querySelectorAll('.fa-times-circle');\n\ncloseBtns.forEach((item, index) => {\n\titem.addEventListener('click', (e) => {\n\t\tlet storedItems = [ ...Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]) ];\n\t\tconsole.log(storedItems.splice(index, 1));\n\t\tObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(storedItems, _storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]);\n\t\trender();\n\t});\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: setListItemsStorage, setListStorage, setLocalStorage, getLocalStorage, listStorage, listItemsStorage, updateLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListItemsStorage\", function() { return setListItemsStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListStorage\", function() { return setListStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocalStorage\", function() { return setLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocalStorage\", function() { return getLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listStorage\", function() { return listStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listItemsStorage\", function() { return listItemsStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLocalStorage\", function() { return updateLocalStorage; });\nlet listStorage = 'list';\nconst setListStorage = () => {\n\tlet listLen = 0;\n\tif (JSON.parse(localStorage.getItem(listStorage))) {\n\t\tlistLen = JSON.parse(localStorage.getItem(listStorage)).length;\n\t} else {\n\t\tlocalStorage.setItem(listStorage, JSON.stringify([]));\n\t}\n};\n\nlet listItemsStorage = 'list-items';\nconst setListItemsStorage = () => {\n\tlet listItemsLen = 0;\n\tif (JSON.parse(localStorage.getItem(listItemsStorage))) {\n\t\tlistItemsLen = JSON.parse(localStorage.getItem(listItemsStorage)).length;\n\t} else {\n\t\tlocalStorage.setItem(listItemsStorage, JSON.stringify([]));\n\t}\n};\n\nfunction getLocalStorage(name) {\n\tlet local = JSON.parse(localStorage.getItem(name));\n\treturn local;\n}\n\nfunction setLocalStorage(array, name, value) {\n\tarray.push(value);\n\tlocalStorage.setItem(name, JSON.stringify(array));\n}\n\nfunction updateLocalStorage(array, name) {\n\tlocalStorage.setItem(name, JSON.stringify(array));\n}\n\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ })

/******/ });