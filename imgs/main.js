/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_initial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initial */ \"./src/modules/initial.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_initial__WEBPACK_IMPORTED_MODULE_2__.init)();\r\n_modules_initial__WEBPACK_IMPORTED_MODULE_2__.home.addEventListener('click',_modules_home__WEBPACK_IMPORTED_MODULE_1__.homePressed);\r\n_modules_initial__WEBPACK_IMPORTED_MODULE_2__.menu.addEventListener('click',_modules_menu__WEBPACK_IMPORTED_MODULE_3__.menuPressed);\r\n_modules_initial__WEBPACK_IMPORTED_MODULE_2__.contact.addEventListener('click',_modules_contact__WEBPACK_IMPORTED_MODULE_0__.contactPressed);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPressed\": () => (/* binding */ contactPressed)\n/* harmony export */ });\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ \"./src/modules/initial.js\");\n\r\n\r\nconst contactContent=document.createElement('div');\r\ncontactContent.setAttribute('id','contact-content');\r\ncontactContent.innerHTML=`\r\n    <ul>\r\n        <li>\r\n            delivery: 0420\r\n        </li>\r\n        <li>\r\n            contact us: +963x42069420\r\n        </li>\r\n        <li>\r\n            Facebook: <a href=\"https://www.facebook.com/Naasani-restaurant/\">Naasani-restaurant</a>\r\n        </li>\r\n        <li>\r\n            \r\n            Instagram: <a href=\"https://www.instagram.com/Naasani-restaurant/\">Naasani-restaurant</a>\r\n        </li>\r\n    </ul>\r\n    <p>* all the info are fake</p>\r\n`;\r\n\r\n\r\nfunction contactPressed(){\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.contact.setAttribute('class','active')\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.home.removeAttribute('class','active');\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.menu.removeAttribute('class','active')\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.main.innerHTML=contactContent.outerHTML;\r\n    document.body.appendChild(_initial__WEBPACK_IMPORTED_MODULE_0__.main);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePressed\": () => (/* binding */ homePressed)\n/* harmony export */ });\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ \"./src/modules/initial.js\");\n\r\nconst homeContent=document.createElement('div');\r\nhomeContent.setAttribute('id','home-content');\r\nhomeContent.innerHTML=`\r\n    <h>Naasani</h><span>Restaurant</span>\r\n    <p>Best fast food restaurant in aleppo!</p>\r\n    <ul>\r\n        <li>\r\n           fast delivery service.\r\n        </li>\r\n        <li>\r\n            high quality ingredients.\r\n        </li>\r\n        <li>\r\n            very attractive prices.\r\n        </li>\r\n    </ul>\r\n`;\r\nfunction homePressed(){\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.home.setAttribute('class','active')\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.menu.removeAttribute('class','active');\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.contact.removeAttribute('class','active')\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.main.innerHTML=homeContent.outerHTML;\r\n    document.body.appendChild(_initial__WEBPACK_IMPORTED_MODULE_0__.main);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home),\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n\r\nconst nav=document.createElement('nav');\r\nconst rName=document.createElement('div');\r\nconst home=document.createElement('div'); \r\nconst menu=document.createElement('div'); \r\nconst contact=document.createElement('div');\r\nconst main=document.createElement('main');\r\nfunction init(){\r\n    \r\n    rName.setAttribute('id','restaurant-name');\r\n    home.setAttribute('id','home');\r\n    menu.setAttribute('id','menu');\r\n    contact.setAttribute('id','contact');\r\n    rName.innerHTML='<a href=\"https://github.com/i-3B/\">Naasani &reg</a>';\r\n    home.textContent='Home';\r\n    menu.textContent='Menu';\r\n    contact.textContent='Contact';\r\n    [rName,home,menu,contact].forEach(e=>nav.appendChild(e));\r\n    document.body.appendChild(nav);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.homePressed)();\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPressed\": () => (/* binding */ menuPressed)\n/* harmony export */ });\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ \"./src/modules/initial.js\");\n\r\n\r\nconst menuContent=document.createElement('div');\r\nmenuContent.setAttribute('id','menu-content');\r\nmenuContent.innerHTML=`\r\n        \r\n    <div class=\"food-card\">\r\n    <img src=\"../src/burger.jpg\">\r\n    burger\r\n    </div>\r\n\r\n    <div class=\"food-card\">\r\n    <img src=\"../src/pizza.jpg\">\r\n    pizza\r\n    </div>\r\n    \r\n    <div class=\"food-card\">\r\n    <img src=\"../src/french-fries.jpg\">\r\n    french fries\r\n    </div>\r\n    <div class=\"food-card\">\r\n    <img src=\"../src/fried-fish.jpg\">\r\n    fried fish\r\n    </div>\r\n    \r\n    <div class=\"food-card\">\r\n    <img src=\"../src/hotdog.jpg\">\r\n    hotdog\r\n    </div>\r\n\r\n    <div class=\"food-card\">\r\n    <img src=\"../src/spaghetti.jpg\">\r\n    spaghetti\r\n    </div>\r\n`;\r\n\r\n\r\nfunction menuPressed(){\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.menu.setAttribute('class','active')\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.home.removeAttribute('class','active');\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.contact.removeAttribute('class','active')\r\n    _initial__WEBPACK_IMPORTED_MODULE_0__.main.innerHTML=menuContent.outerHTML;\r\n    document.body.appendChild(_initial__WEBPACK_IMPORTED_MODULE_0__.main);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;