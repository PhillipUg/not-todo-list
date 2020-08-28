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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n// let arr = [\n//   {}\n// ]\n\n/*\n 1. create project object\n - add event listener\n - get input value\n - use input value to create object in local storage\n - use local storage to update project field\n\n -user shouldnt be able to create a list item without a project title\n\n - add functionality for the close btn on each proj title\n - add horizontal scroll\n\n\n 2. create todo item\n - add event listener\n - add some validation for the fields\n - get input value and use it to store list items in local storage\n - use local storage to update dom list field\n\n - add event listener to update list item status\n - add eventlistener for implementing editing functionality\n */\nObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setListItemsStorage\"])();\nObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setListStorage\"])();\nlet currentProject = -1;\nfunction Project(title) {\n  this.title = title;\n  let idx;\n  if (Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listLength\"])() === 0) {\n    idx = 0;\n  } else {\n    idx = JSON.parse(localStorage.getItem(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]))[Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listLength\"])() - 1].id + 1;\n  }\n  this.id = idx;\n}\n\nfunction Item(parentId, title, description, date, priority) {\n  this.parentId = parentId;\n  this.title = title;\n  this.date = date;\n  this.description = description;\n  this.priority = priority;\n}\n\nconst projectInput = document.getElementById('project');\nconst createProject = document.getElementById('create-project');\n\ncreateProject.addEventListener('click', () => {\n  if (projectInput.value) {\n    const newProject = new Project(projectInput.value);\n    Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setLocalStorage\"])(Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]), _storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"], newProject);\n    projectInput.value = '';\n    location.reload();\n  }\n});\n\nconst ul = document.querySelector('.list-group');\n\nfunction render() {\n  ul.innerHTML = '';\n  let local = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]);\n\n  local.forEach((item, idx, array) => {\n    const li = document.createElement('li');\n    li.classList.add('list-group-item', 'm-1', 'pr-4', 'border', 'rounded', 'wrap');\n    li.innerText = array[idx].title;\n    li.id = array[idx].id;\n\n    const icon = document.createElement('i');\n    icon.classList.add('fa', 'fa-times-circle', 'ml-2', 'text-danger');\n\n    li.appendChild(icon);\n    ul.appendChild(li);\n    if (ul.scrollWidth === ul.clientWidth) {\n      rightBtn.style.color = 'grey';\n      leftBtn.style.color = 'grey';\n    } else {\n      rightBtn.style.color = 'black';\n    }\n  });\n}\n\nvar rightBtn = document.getElementById('slide-right');\nvar leftBtn = document.getElementById('slide-left');\n\nrightBtn.onclick = function () {\n  let scrolled = ul.scrollWidth - ul.scrollLeft === ul.clientWidth;\n  sideScroll(ul, 'right', 25, 100, 10);\n  if (scrolled) {\n    rightBtn.style.color = 'grey';\n  } else {\n    rightBtn.style.color = 'black';\n    leftBtn.style.color = 'black';\n  }\n};\n\nleftBtn.onclick = function () {\n  sideScroll(ul, 'left', 25, 100, 10);\n  if (ul.scrollLeft == 0) {\n    leftBtn.style.color = 'grey';\n  } else {\n    leftBtn.style.color = 'black';\n    rightBtn.style.color = 'black';\n  }\n};\n\nfunction sideScroll(element, direction, speed, distance, step) {\n  let scrollAmount = 0;\n  var slideTimer = setInterval(function () {\n    if (direction == 'left') {\n      element.scrollLeft -= step;\n    } else {\n      element.scrollLeft += step;\n    }\n    scrollAmount += step;\n    if (scrollAmount >= distance) {\n      window.clearInterval(slideTimer);\n    }\n  }, speed);\n}\nwindow.onload = render();\nlet closeBtns = document.querySelectorAll('.fa-times-circle');\n\ncloseBtns.forEach((item, index) => {\n  listenClose(item, index);\n});\n\nfunction listenClose(item, index) {\n  item.addEventListener('click', (e) => {\n    let storedItems = [...Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"])];\n    storedItems.splice(index, 1);\n\n    Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(storedItems, _storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]);\n    location.reload();\n  });\n}\n\nconst clickableLi = document.querySelectorAll('.list-group-item');\nclickableLi.forEach((item) => {\n  item.addEventListener('click', () => {\n    getItems(item.id);\n    showForm(item);\n  });\n});\n\nfunction showForm(item) {\n  const itemForm = document.getElementById('form');\n  itemForm.classList.add('d-flex');\n  currentProject = item.id;\n}\n\nfunction getItems(id) {\n  let items = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]);\n  const result = items.filter((item) => item.parentId == id);\n  renderItems(result);\n}\n\nfunction renderItems(result) {\n  let items = document.getElementById('items');\n  items.innerHTML = '';\n\n  result.forEach((item, idx, array) => {\n    const itemsDiv = document.createElement('div');\n    itemsDiv.classList.add('border', 'w-100', 'p-1', 'my-1', 'rounded', 'bg-light', 'shadow', 'toggleItems');\n\n    const itemHeader = document.createElement('div');\n    itemHeader.classList.add('w-100', 'd-flex', 'justify-content-between', 'p-2', 'my-1', 'position-relative');\n    itemsDiv.appendChild(itemHeader);\n\n    const colorDot = document.createElement('span')\n    colorDot.classList.add('bg-danger', 'p-1', 'color-dot', 'position-absolute')\n\n    itemHeader.appendChild(colorDot);\n    const itemTitle = document.createElement('div');\n    itemTitle.innerText = item.title;\n    itemHeader.appendChild(itemTitle);\n\n    const itemIcons = document.createElement('div');\n    itemIcons.classList.add('d-flex');\n    itemHeader.appendChild(itemIcons);\n\n    const itemEdit = document.createElement('i');\n    itemEdit.classList.add('fa', 'fa-pencil', 'm-1');\n\n    const itemStatus = document.createElement('i');\n    itemStatus.classList.add('fa', 'fa-check-circle', 'm-1');\n\n    itemIcons.appendChild(itemEdit);\n    itemIcons.appendChild(itemStatus);\n\n    const itemDetail = document.createElement('div');\n    itemDetail.classList.add('d-none', 'flex-column', 'align-items-start', 'border');\n\n    const itemDate = document.createElement('div');\n    itemDate.innerText = 'Date: ' + item.date;\n\n    const itemDescription = document.createElement('div');\n    itemDescription.innerText = 'Description: ' + item.description;\n\n    const itemPriority = document.createElement('div');\n    itemPriority.innerText = 'Priority: ' + item.priority;\n\n    itemDetail.appendChild(itemDescription);\n    itemDetail.appendChild(itemDate);\n    itemDetail.appendChild(itemPriority);\n    itemsDiv.appendChild(itemDetail);\n\n    items.appendChild(itemsDiv);\n\n  });\n  itemToggleListener()\n}\n\nconst projecItmBtn = document.getElementById('projectItem');\nprojecItmBtn.addEventListener('click', () => {\n  const itemFrom = document.getElementById('itemForm');\n  let children = itemFrom.children;\n  let inputs = Array.from(children);\n  const newItem = new Item(currentProject, inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);\n  console.log(newItem);\n  Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setLocalStorage\"])(Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]), _storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"], newItem);\n  getItems(currentProject);\n});\n\nfunction itemToggleListener() {\n  const toggleItems = document.querySelectorAll('.toggleItems');\n  toggleItems.forEach((item) => {\n    let c = item.childNodes;\n    item.addEventListener('click', () => {\n      if (c[1].classList.contains('d-none')) {\n        c[1].classList.remove('d-none')\n        c[1].classList.add('d-flex')\n      } else {\n        c[1].classList.add('d-none')\n        c[1].classList.remove('d-flex')\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: setListItemsStorage, setListStorage, setLocalStorage, getLocalStorage, listStorage, listItemsStorage, updateLocalStorage, listLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListItemsStorage\", function() { return setListItemsStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListStorage\", function() { return setListStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocalStorage\", function() { return setLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocalStorage\", function() { return getLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listStorage\", function() { return listStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listItemsStorage\", function() { return listItemsStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLocalStorage\", function() { return updateLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listLength\", function() { return listLength; });\nlet listStorage = 'list';\nconst defaultProject = { title: 'Smoking', id: 0 };\nconst defaultNotTodo1 = {\n\tparentId: 0,\n\ttitle: 'Do not buy cigarattes',\n\tdate: '28.8.2020',\n\tdescription: 'avoid buyin new pack of cigarattes',\n\tpriority: 'high',\n\tstatus: false\n};\nconst defaultNotTodo2 = {\n\tparentId: 1,\n\ttitle: 'Try to smoke not more than twice in a day',\n\tdate: '29.8.2020',\n\tdescription: 'Try to smoke not more than twice in a day',\n\tpriority: 'medium',\n\tstatus: true\n};\nconst defaultNotTodo3 = {\n\tparentId: 0,\n\ttitle: 'Avoid smokers',\n\tdate: '30.8.2020',\n\tdescription: 'Avoid spending time with people who smoke',\n\tpriority: 'low',\n\tstatus: false\n};\n\nconst setListStorage = () => {\n\tlet listLen = 0;\n\tif (JSON.parse(localStorage.getItem(listStorage))) {\n\t\tlistLen = JSON.parse(localStorage.getItem(listStorage)).length;\n\t} else {\n\t\tlocalStorage.setItem(listStorage, JSON.stringify([]));\n\t\tsetLocalStorage(getLocalStorage(listStorage), listStorage, defaultProject);\n\t}\n};\n\nlet listItemsStorage = 'list-items';\nconst setListItemsStorage = () => {\n\tlet listItemsLen = 0;\n\tif (JSON.parse(localStorage.getItem(listItemsStorage))) {\n\t\tlistItemsLen = JSON.parse(localStorage.getItem(listItemsStorage)).length;\n\t} else {\n\t\tlocalStorage.setItem(listItemsStorage, JSON.stringify([]));\n\t\tsetLocalStorage(getLocalStorage(listItemsStorage), listItemsStorage, defaultNotTodo1);\n\t\tsetLocalStorage(getLocalStorage(listItemsStorage), listItemsStorage, defaultNotTodo2);\n\t\tsetLocalStorage(getLocalStorage(listItemsStorage), listItemsStorage, defaultNotTodo3);\n\t}\n};\n\nfunction getLocalStorage(name) {\n\tlet local = JSON.parse(localStorage.getItem(name));\n\treturn local;\n}\n\nfunction setLocalStorage(array, name, value) {\n\tarray.push(value);\n\tlocalStorage.setItem(name, JSON.stringify(array));\n}\n\nfunction updateLocalStorage(array, name) {\n\tlocalStorage.setItem(name, JSON.stringify(array));\n}\n\nconst listLength = () => {\n\tlet listLen = 0;\n\tif (JSON.parse(localStorage.getItem(listStorage))) {\n\t\tlistLen = JSON.parse(localStorage.getItem(listStorage)).length;\n\t}\n\treturn listLen;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ })

/******/ });