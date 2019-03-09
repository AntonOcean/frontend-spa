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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/css/index.scss":
/*!*******************************!*\
  !*** ./public/css/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./public/css/index.scss?");

/***/ }),

/***/ "./public/img/access.svg":
/*!*******************************!*\
  !*** ./public/img/access.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"548d98a0c5331b77e5ee012aaf47b419.svg\";\n\n//# sourceURL=webpack:///./public/img/access.svg?");

/***/ }),

/***/ "./public/img/game1.svg":
/*!******************************!*\
  !*** ./public/img/game1.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f478c8aa882de2f6a0944efce49e6ddd.svg\";\n\n//# sourceURL=webpack:///./public/img/game1.svg?");

/***/ }),

/***/ "./public/img/sign_in.svg":
/*!********************************!*\
  !*** ./public/img/sign_in.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1824eca9999ced3f86df7c65974d7cd6.svg\";\n\n//# sourceURL=webpack:///./public/img/sign_in.svg?");

/***/ }),

/***/ "./public/img/users.svg":
/*!******************************!*\
  !*** ./public/img/users.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8377249bec99a2390a9decad9df4ce78.svg\";\n\n//# sourceURL=webpack:///./public/img/users.svg?");

/***/ }),

/***/ "./public/src/Router.js":
/*!******************************!*\
  !*** ./public/src/Router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Router {\n  constructor() {\n    this.routes = {};\n  }\n\n  addUrl(url, controller, name) {\n    this.routes[url] = {\n      controller: controller\n    };\n    controller.prototype.pageName = name;\n  }\n\n  getController(path) {\n    let route = this.routes[path];\n    return route ? route.controller : this.routes['404'].controller;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./public/src/Router.js?");

/***/ }),

/***/ "./public/src/app.js":
/*!***************************!*\
  !*** ./public/src/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ \"./public/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_AuthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/AuthPage */ \"./public/src/controllers/AuthPage.js\");\n/* harmony import */ var _controllers_ProfilePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/ProfilePage */ \"./public/src/controllers/ProfilePage.js\");\n/* harmony import */ var _controllers_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/HomePage */ \"./public/src/controllers/HomePage.js\");\n/* harmony import */ var _controllers_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/NotFoundPage */ \"./public/src/controllers/NotFoundPage.js\");\n/* harmony import */ var _controllers_SignUpPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/SignUpPage */ \"./public/src/controllers/SignUpPage.js\");\n/* harmony import */ var _controllers_AuthorsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/AuthorsPage */ \"./public/src/controllers/AuthorsPage.js\");\n/* harmony import */ var _controllers_GamePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/GamePage */ \"./public/src/controllers/GamePage.js\");\n/* harmony import */ var _controllers_AboutPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/AboutPage */ \"./public/src/controllers/AboutPage.js\");\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Router */ \"./public/src/Router.js\");\n\n\n\n\n\n\n\n\n\n\nconst app = document.getElementById('root');\nlet router = new _Router__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\nrouter.addUrl('/', _controllers_HomePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'index');\nrouter.addUrl('/profile', _controllers_ProfilePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 'profile');\nrouter.addUrl('/auth', _controllers_AuthPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'auth');\nrouter.addUrl('/signup', _controllers_SignUpPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], 'signup');\nrouter.addUrl('/authors', _controllers_AuthorsPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], 'authors');\nrouter.addUrl('/game', _controllers_GamePage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], 'game');\nrouter.addUrl('/about', _controllers_AboutPage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], 'about');\nrouter.addUrl('404', _controllers_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], 'not_found');\n\nfunction pageLoader() {\n  let url = location.hash.slice(1) || '/';\n  let controller = router.getController(url);\n  controller = new controller();\n  let element = controller.getTargetRender();\n  element.innerHTML = controller.render();\n\n  if (controller.afterRender) {\n    controller.afterRender();\n  }\n}\n\nwindow.addEventListener('hashchange', pageLoader);\nwindow.addEventListener('load', pageLoader);\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./public/src/app.js?");

/***/ }),

/***/ "./public/src/components/AboutContent.js":
/*!***********************************************!*\
  !*** ./public/src/components/AboutContent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AboutContent {\n  render() {\n    return `\n        <h1 class=\"title\">about</h1>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutContent);\n\n//# sourceURL=webpack:///./public/src/components/AboutContent.js?");

/***/ }),

/***/ "./public/src/components/AuthContent.js":
/*!**********************************************!*\
  !*** ./public/src/components/AuthContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AuthContent {\n  render() {\n    return `\n        <h1 class=\"title\">auth</h1>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContent);\n\n//# sourceURL=webpack:///./public/src/components/AuthContent.js?");

/***/ }),

/***/ "./public/src/components/AuthorsContent.js":
/*!*************************************************!*\
  !*** ./public/src/components/AuthorsContent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AuthorsContent {\n  render() {\n    return `\n        <h1 class=\"title\">authors</h1>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthorsContent);\n\n//# sourceURL=webpack:///./public/src/components/AuthorsContent.js?");

/***/ }),

/***/ "./public/src/components/GameContent.js":
/*!**********************************************!*\
  !*** ./public/src/components/GameContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameContent {\n  render() {\n    return `\n        <h1 class=\"title\">game</h1>\n        <a href=\"#\">home</a>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameContent);\n\n//# sourceURL=webpack:///./public/src/components/GameContent.js?");

/***/ }),

/***/ "./public/src/components/HomeContent.js":
/*!**********************************************!*\
  !*** ./public/src/components/HomeContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_game1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/game1.svg */ \"./public/img/game1.svg\");\n/* harmony import */ var _img_game1_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_game1_svg__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass HomeContent {\n  render() {\n    return `\n        <h1 class=\"title\">home</h1><img src=dist/${_img_game1_svg__WEBPACK_IMPORTED_MODULE_0___default.a} alt=\"Logo\" />\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeContent);\n\n//# sourceURL=webpack:///./public/src/components/HomeContent.js?");

/***/ }),

/***/ "./public/src/components/MenuContent.js":
/*!**********************************************!*\
  !*** ./public/src/components/MenuContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_sign_in_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/sign_in.svg */ \"./public/img/sign_in.svg\");\n/* harmony import */ var _img_sign_in_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_sign_in_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_users_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/users.svg */ \"./public/img/users.svg\");\n/* harmony import */ var _img_users_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_users_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_access_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/access.svg */ \"./public/img/access.svg\");\n/* harmony import */ var _img_access_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_access_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_game1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/game1.svg */ \"./public/img/game1.svg\");\n/* harmony import */ var _img_game1_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_game1_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _menu_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/btn */ \"./public/src/components/menu/btn.js\");\n/* harmony import */ var _menu_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/header */ \"./public/src/components/menu/header.js\");\n\n\n\n\n\n\n\nclass MenuContent {\n  // контроллер\n  constructor() {\n    this.header = _menu_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n    this.btn = _menu_btn__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  }\n\n  render() {\n    return `\n         ${this.header()}\n\n        <nav class=\"menu__nav\">\n            ${this.btn(\"Авторизация\", \"/auth\", _img_sign_in_svg__WEBPACK_IMPORTED_MODULE_0___default.a)}\n            \n            ${this.btn(\"Регистрация\", \"/signup\", _img_access_svg__WEBPACK_IMPORTED_MODULE_2___default.a)}\n\n            ${this.btn(\"Авторы\", \"/authors\", _img_users_svg__WEBPACK_IMPORTED_MODULE_1___default.a)}\n\n            ${this.btn(\"Играть\", \"/game\", _img_game1_svg__WEBPACK_IMPORTED_MODULE_3___default.a)}\n\n            <div class=\"menu__nav__item menu__nav__item__href\">\n                <a href=\"#/about\">\n                    О проекте\n                </a>\n            </div>\n        </nav>\n        `;\n  }\n\n  static activateButton(name) {\n    if (!name) {\n      return;\n    }\n\n    let menuButtons = document.getElementsByClassName('menu__nav__item');\n    this.disactivateButtons();\n    let button = [].filter.call(menuButtons, item => {\n      return item.hash && ~item.hash.indexOf(name);\n    })[0];\n\n    if (button) {\n      button.classList.add(\"menu__nav__item_selected\");\n    }\n  }\n\n  static disactivateButtons() {\n    let menuButtons = document.getElementsByClassName('menu__nav__item');\n\n    if (menuButtons) {\n      [].forEach.call(menuButtons, item => {\n        item.classList.remove(\"menu__nav__item_selected\");\n      });\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuContent);\n\n//# sourceURL=webpack:///./public/src/components/MenuContent.js?");

/***/ }),

/***/ "./public/src/components/ProfileContent.js":
/*!*************************************************!*\
  !*** ./public/src/components/ProfileContent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ProfileContent {\n  render() {\n    return `\n        <h1 class=\"title\">profile</h1>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileContent);\n\n//# sourceURL=webpack:///./public/src/components/ProfileContent.js?");

/***/ }),

/***/ "./public/src/components/SignUpContent.js":
/*!************************************************!*\
  !*** ./public/src/components/SignUpContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass SignUpContent {\n  render() {\n    return `\n        <h1 class=\"title\">signup</h1>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpContent);\n\n//# sourceURL=webpack:///./public/src/components/SignUpContent.js?");

/***/ }),

/***/ "./public/src/components/menu/btn.js":
/*!*******************************************!*\
  !*** ./public/src/components/menu/btn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction btn(title, path, icon) {\n  return `\n                <a class=\"menu__nav__item\" href=\"#${path}\">\n                <img class=\"menu__nav__item__icon\" src=dist/${icon} alt=\"\"/>\n                <span class=\"menu__nav__item__title\">\n                ${title}\n                </span>\n            </a>\n    `;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (btn);\n\n//# sourceURL=webpack:///./public/src/components/menu/btn.js?");

/***/ }),

/***/ "./public/src/components/menu/header.js":
/*!**********************************************!*\
  !*** ./public/src/components/menu/header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst header = () => {\n  return `\n         <header class=\"menu__header\">\n            <div class=\"menu__logo\">\n            </div>\n        </header>\n    `;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./public/src/components/menu/header.js?");

/***/ }),

/***/ "./public/src/controllers/AboutPage.js":
/*!*********************************************!*\
  !*** ./public/src/controllers/AboutPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MenuContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MenuContent */ \"./public/src/components/MenuContent.js\");\n/* harmony import */ var _components_AboutContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AboutContent */ \"./public/src/components/AboutContent.js\");\n/* harmony import */ var _section_IndexController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section/IndexController */ \"./public/src/controllers/section/IndexController.js\");\n\n\n\n\nclass AboutPage extends _section_IndexController__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor() {\n    super(_components_AboutContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n\n  async afterRender() {\n    _components_MenuContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].disactivateButtons();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutPage);\n\n//# sourceURL=webpack:///./public/src/controllers/AboutPage.js?");

/***/ }),

/***/ "./public/src/controllers/AuthPage.js":
/*!********************************************!*\
  !*** ./public/src/controllers/AuthPage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AuthContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AuthContent */ \"./public/src/components/AuthContent.js\");\n/* harmony import */ var _section_IndexController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section/IndexController */ \"./public/src/controllers/section/IndexController.js\");\n\n\n\nclass AuthPage extends _section_IndexController__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(_components_AuthContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthPage);\n\n//# sourceURL=webpack:///./public/src/controllers/AuthPage.js?");

/***/ }),

/***/ "./public/src/controllers/AuthorsPage.js":
/*!***********************************************!*\
  !*** ./public/src/controllers/AuthorsPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AuthorsContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AuthorsContent */ \"./public/src/components/AuthorsContent.js\");\n/* harmony import */ var _section_IndexController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section/IndexController */ \"./public/src/controllers/section/IndexController.js\");\n\n\n\nclass AuthorsPage extends _section_IndexController__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(_components_AuthorsContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthorsPage);\n\n//# sourceURL=webpack:///./public/src/controllers/AuthorsPage.js?");

/***/ }),

/***/ "./public/src/controllers/GamePage.js":
/*!********************************************!*\
  !*** ./public/src/controllers/GamePage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_GameContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/GameContent */ \"./public/src/components/GameContent.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./public/src/app.js\");\n\n\n\nclass GamePage {\n  constructor() {\n    this.targetRender = _app__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    this.content = new _components_GameContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  getTargetRender() {\n    return this.targetRender;\n  }\n\n  render() {\n    return `\n            ${this.content.render()}\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GamePage);\n\n//# sourceURL=webpack:///./public/src/controllers/GamePage.js?");

/***/ }),

/***/ "./public/src/controllers/HomePage.js":
/*!********************************************!*\
  !*** ./public/src/controllers/HomePage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HomeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/HomeContent */ \"./public/src/components/HomeContent.js\");\n/* harmony import */ var _section_IndexController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section/IndexController */ \"./public/src/controllers/section/IndexController.js\");\n\n\n\nclass HomePage extends _section_IndexController__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(_components_HomeContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./public/src/controllers/HomePage.js?");

/***/ }),

/***/ "./public/src/controllers/NotFoundPage.js":
/*!************************************************!*\
  !*** ./public/src/controllers/NotFoundPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./public/src/app.js\");\n\n\nclass NotFoundPage {\n  constructor() {\n    this.targetRender = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n\n  getTargetRender() {\n    return this.targetRender;\n  }\n\n  render() {\n    return '<h1>Ничего не нашли</h1>' + '<a href=\"#\">home</a>';\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFoundPage);\n\n//# sourceURL=webpack:///./public/src/controllers/NotFoundPage.js?");

/***/ }),

/***/ "./public/src/controllers/ProfilePage.js":
/*!***********************************************!*\
  !*** ./public/src/controllers/ProfilePage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ProfileContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProfileContent */ \"./public/src/components/ProfileContent.js\");\n/* harmony import */ var _section_IndexController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section/IndexController */ \"./public/src/controllers/section/IndexController.js\");\n\n\n\nclass ProfilePage extends _section_IndexController__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(_components_ProfileContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\n\n//# sourceURL=webpack:///./public/src/controllers/ProfilePage.js?");

/***/ }),

/***/ "./public/src/controllers/SignUpPage.js":
/*!**********************************************!*\
  !*** ./public/src/controllers/SignUpPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_SignUpContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SignUpContent */ \"./public/src/components/SignUpContent.js\");\n/* harmony import */ var _section_IndexController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section/IndexController */ \"./public/src/controllers/section/IndexController.js\");\n\n\n\nclass SignUpPage extends _section_IndexController__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(_components_SignUpContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpPage);\n\n//# sourceURL=webpack:///./public/src/controllers/SignUpPage.js?");

/***/ }),

/***/ "./public/src/controllers/section/IndexController.js":
/*!***********************************************************!*\
  !*** ./public/src/controllers/section/IndexController.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MenuContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/MenuContent */ \"./public/src/components/MenuContent.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./public/src/app.js\");\n\n\n\nclass IndexController {\n  constructor(content) {\n    this.content = new content();\n    this.targetRender = document.getElementsByClassName('content')[0];\n  }\n\n  getTargetRender() {\n    return this.targetRender || _app__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  }\n\n  baseComponent() {\n    this.menu = new _components_MenuContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  render() {\n    if (this.check()) {\n      return `\n            ${this.content.render()}\n            `;\n    }\n\n    this.baseComponent();\n    return `\n                <div class=\"menu\">\n                ${this.menu.render()}\n                </div>\n                <div class=\"content\">\n                ${this.content.render()}\n                </div>\n        `;\n  }\n\n  check() {\n    return this.targetRender;\n  }\n\n  async afterRender() {\n    _components_MenuContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activateButton(this.pageName);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexController);\n\n//# sourceURL=webpack:///./public/src/controllers/section/IndexController.js?");

/***/ })

/******/ });