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

/***/ "./public/blocks/grid/img/avatar.svg":
/*!*******************************************!*\
  !*** ./public/blocks/grid/img/avatar.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ba89c281aa178ec5dc98abd21a8954a2.svg\";\n\n//# sourceURL=webpack:///./public/blocks/grid/img/avatar.svg?");

/***/ }),

/***/ "./public/css/style.scss":
/*!*******************************!*\
  !*** ./public/css/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./public/css/style.scss?");

/***/ }),

/***/ "./public/img/game1.svg":
/*!******************************!*\
  !*** ./public/img/game1.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f478c8aa882de2f6a0944efce49e6ddd.svg\";\n\n//# sourceURL=webpack:///./public/img/game1.svg?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./public/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_AuthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/AuthPage */ \"./public/src/controllers/AuthPage.js\");\n/* harmony import */ var _controllers_ProfilePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/ProfilePage */ \"./public/src/controllers/ProfilePage.js\");\n/* harmony import */ var _controllers_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/HomePage */ \"./public/src/controllers/HomePage.js\");\n/* harmony import */ var _controllers_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/NotFoundPage */ \"./public/src/controllers/NotFoundPage.js\");\n/* harmony import */ var _controllers_SignUpPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/SignUpPage */ \"./public/src/controllers/SignUpPage.js\");\n/* harmony import */ var _controllers_AuthorsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/AuthorsPage */ \"./public/src/controllers/AuthorsPage.js\");\n/* harmony import */ var _controllers_GamePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/GamePage */ \"./public/src/controllers/GamePage.js\");\n/* harmony import */ var _controllers_LeadersPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/LeadersPage */ \"./public/src/controllers/LeadersPage.js\");\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Router */ \"./public/src/Router.js\");\n\n\n\n\n\n\n\n\n\n\nconst app = document.getElementById('root');\nlet router = new _Router__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\nrouter.addUrl('/', _controllers_HomePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'index');\nrouter.addUrl('/profile', _controllers_ProfilePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 'profile');\nrouter.addUrl('/auth', _controllers_AuthPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'auth');\nrouter.addUrl('/signup', _controllers_SignUpPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], 'signup');\nrouter.addUrl('/authors', _controllers_AuthorsPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], 'authors');\nrouter.addUrl('/game', _controllers_GamePage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], 'game');\nrouter.addUrl('/leaders', _controllers_LeadersPage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], 'leaders');\nrouter.addUrl('404', _controllers_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], 'not_found');\n\nfunction pageLoader() {\n  let url = location.hash.slice(1) || '/';\n  let controller = router.getController(url);\n  controller = new controller();\n  let element = controller.getTargetRender();\n  element.innerHTML = controller.render();\n\n  if (controller.afterRender) {\n    controller.afterRender();\n  }\n}\n\nwindow.addEventListener('hashchange', pageLoader);\nwindow.addEventListener('load', pageLoader);\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./public/src/app.js?");

/***/ }),

/***/ "./public/src/components/AuthContent.js":
/*!**********************************************!*\
  !*** ./public/src/components/AuthContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AuthContent {\n  render() {\n    return `\n                    <div class=\"form-container\">\n                <h1 class=\"title\">Вход</h1>\n                <form class=\"form\">\n                \n                    <div class=\"form-item\">\n                        <input type=\"text\" class=\"form-item__input\" placeholder=\"Логин\">\n                        <i class=\"fas fa-user form-item__icon\"></i>\n                    </div>\n                    \n                    <div class=\"form-item\">\n                        <input type=\"password\" class=\"form-item__input\" placeholder=\"Пароль\">\n                        <i class=\"fas fa-unlock form-item__icon\"></i>\n                        <div class=\"form-item__eye\">\n                            <i class=\"fa fa-eye form-item__eye-icon\"></i>\n                        </div>\n                    </div>\n                    \n                    <div class=\"password\">\n                        <label class=\"checkbox\">\n                            <input class=\"checkbox__input\" type=\"checkbox\">\n                            <span class=\"checkbox__custom\"></span>\n                            <span>Запомнить</span>\n                        </label>\n                        <a class=\"password__link\" href=\"#\">Забыли пароль?</a>\n                    </div>\n                    \n                    <button class=\"button\">Войти</button>\n                </form>\n                <a class=\"link\" href=\"#/signup\">Зарегистрироваться</a> \n            </div>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContent);\n\n//# sourceURL=webpack:///./public/src/components/AuthContent.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_game1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/game1.svg */ \"./public/img/game1.svg\");\n/* harmony import */ var _img_game1_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_game1_svg__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass HomeContent {\n  render() {\n    return `\n        <h1 class=\"title\">Здесь будет красивая картинка с кнопкой играть</h1>\n        <!--<h1 class=\"title\">home</h1><img src=dist/${_img_game1_svg__WEBPACK_IMPORTED_MODULE_0___default.a} alt=\"Logo\" />-->\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeContent);\n\n//# sourceURL=webpack:///./public/src/components/HomeContent.js?");

/***/ }),

/***/ "./public/src/components/LeaderContent.js":
/*!************************************************!*\
  !*** ./public/src/components/LeaderContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass LeaderContent {\n  render() {\n    return `\n                    <div class=\"liderboard-container\">\n                <h1 class=\"title\">Таблица лидеров</h1>\n                <table class=\"liderboard\">\n                    <tr>\n                        <td><b class=\"title\">Позиция</b></td>\n                        <td><b class=\"title\">Никнейм</b></td>\n                        <td><b class=\"title\">Очки</b></td>\n                    </tr>\n                    <tr>\n                        <td>бла</td>\n                        <td>бла</td>\n                        <td>бла</td>\n                    </tr>\n                    <tr>\n                            <td>бла</td>\n                            <td>бла</td>\n                            <td>бла</td>\n                        </tr>\n                        <tr>\n                                <td>бла</td>\n                                <td>бла</td>\n                                <td>бла</td>\n                            </tr>\n                            <tr>\n                                    <td>бла</td>\n                                    <td>бла</td>\n                                    <td>бла</td>\n                                </tr>\n                                <tr>\n                                        <td>бла</td>\n                                        <td>бла</td>\n                                        <td>бла</td>\n                                    </tr>\n                                    <tr>\n                                            <td>бла</td>\n                                            <td>бла</td>\n                                            <td>бла</td>\n                                        </tr>\n                                        <tr>\n                                                <td>бла</td>\n                                                <td>бла</td>\n                                                <td>бла</td>\n                                            </tr>\n                                            <tr>\n                                                    <td>бла</td>\n                                                    <td>бла</td>\n                                                    <td>бла</td>\n                                                </tr>\n                                                <tr>\n                                                        <td>бла</td>\n                                                        <td>бла</td>\n                                                        <td>бла</td>\n                                                    </tr>\n                                                    <tr>\n                                                            <td>бла</td>\n                                                            <td>бла</td>\n                                                            <td>бла</td>\n                                                        </tr>\n                                                        <tr>\n                                                                <td>бла</td>\n                                                                <td>бла</td>\n                                                                <td>бла</td>\n                                                            </tr>\n                                                            <tr>\n                                                                    <td>бла</td>\n                                                                    <td>бла</td>\n                                                                    <td>бла</td>\n                                                                </tr>\n                                                                <tr>\n                                                                        <td>бла</td>\n                                                                        <td>бла</td>\n                                                                        <td>бла</td>\n                                                                    </tr>\n                                                                    <tr>\n                                                                            <td>бла</td>\n                                                                            <td>бла</td>\n                                                                            <td>бла</td>\n                                                                        </tr>\n                                                                        <tr>\n                                                                                <td>бла</td>\n                                                                                <td>бла</td>\n                                                                                <td>бла</td>\n                                                                            </tr>\n                                                                            <tr>\n                                                                                    <td>бла</td>\n                                                                                    <td>бла</td>\n                                                                                    <td>бла</td>\n                                                                                </tr>\n                                                                                <tr>\n                                                                                        <td>бла</td>\n                                                                                        <td>бла</td>\n                                                                                        <td>бла</td>\n                                                                                    </tr>\n                                                                                    <tr>\n                                                                                            <td>бла</td>\n                                                                                            <td>бла</td>\n                                                                                            <td>бла</td>\n                                                                                        </tr>\n                </table>\n            </div>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeaderContent);\n\n//# sourceURL=webpack:///./public/src/components/LeaderContent.js?");

/***/ }),

/***/ "./public/src/components/MenuContent.js":
/*!**********************************************!*\
  !*** ./public/src/components/MenuContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/btn */ \"./public/src/components/menu/btn.js\");\n/* harmony import */ var _menu_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/header */ \"./public/src/components/menu/header.js\");\n\n\n\nclass MenuContent {\n  constructor() {\n    this.header = _menu_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    this.btn = _menu_btn__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n\n  render() {\n    return `\n         ${this.header()}\n\n        <nav class=\"menu__nav\">\n                ${this.btn('Профиль', '/profile')}\n                ${this.btn('Авторизация', '/auth')}\n                ${this.btn('Регистрация', '/signup')}\n                ${this.btn('Авторы', '/authors')}\n                ${this.btn('Играть', '/game')}\n                ${this.btn('Таблица лидеров', '/leaders')}\n           </nav>\n        `;\n  }\n\n  static activateButton(name) {\n    if (!name) {\n      return;\n    }\n\n    let menuButtons = document.getElementsByClassName('menu-button');\n    this.disactivateButtons();\n    let button = [].filter.call(menuButtons, item => {\n      return item.hash && ~item.hash.indexOf(name);\n    })[0];\n\n    if (button) {\n      button.classList.add(\"menu-button_selected\");\n    }\n  }\n\n  static disactivateButtons() {\n    let menuButtons = document.getElementsByClassName('menu-button');\n\n    if (menuButtons) {\n      [].forEach.call(menuButtons, item => {\n        item.classList.remove(\"menu-button_selected\");\n      });\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuContent);\n\n//# sourceURL=webpack:///./public/src/components/MenuContent.js?");

/***/ }),

/***/ "./public/src/components/ProfileContent.js":
/*!*************************************************!*\
  !*** ./public/src/components/ProfileContent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_grid_img_avatar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/grid/img/avatar.svg */ \"./public/blocks/grid/img/avatar.svg\");\n/* harmony import */ var _blocks_grid_img_avatar_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_grid_img_avatar_svg__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ProfileContent {\n  render() {\n    return `\n        <div class=\"form-container\">\n                <h1 class=\"title\">Профиль</h1>\n                \n                <form class=\"grid\">\n                \n                    <img src=dist/${_blocks_grid_img_avatar_svg__WEBPACK_IMPORTED_MODULE_0___default.a} alt=\"Avatar\" class=\"grid__avatar\">\n                    \n                    <label class=\"grid__login-label\">Логин</label>\n                    <div class=\"form-item grid__login\">\n                        <input type=\"input\" class=\"form-item__input\" placeholder=\"Логин\" disabled=\"disabled\">\n                        <i class=\"fas fa-user form-item__icon\"></i>\n                    </div>\n                    \n                    <label class=\"grid__nickname-label\">Никнейм</label>\n                    <div class=\"form-item grid__nickname\">\n                        <input type=\"input\" class=\"form-item__input\" placeholder=\"Никнейм\">\n                        <i class=\"fab fa-suse form-item__icon\"></i>\n                    </div>\n                    \n                    <label class=\"grid__password-label\">Пароль</label>\n                    <div class=\"form-item grid__password\">\n                        <input type=\"password\" class=\"form-item__input\" placeholder=\"Пароль\">\n                        <i class=\"fas fa-unlock form-item__icon\"></i>\n                        <button class=\"form-item__eye\">\n                            <i class=\"fa fa-eye form-item__eye-icon\"></i>\n                        </button>\n                    </div>\n                    \n                    <input type=\"file\" class=\"grid__upload\">\n                    <i class=\"fa fa-upload fa-3x grid__upload-icon\" aria-hidden=\"true\"></i>\n                    \n                    <button class=\"button grid__button\">Сохранить</button>\n                    \n                </form>\n                <a class=\"link\" href=\"#\">Редактировать</a> \n            </div>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileContent);\n\n//# sourceURL=webpack:///./public/src/components/ProfileContent.js?");

/***/ }),

/***/ "./public/src/components/SignUpContent.js":
/*!************************************************!*\
  !*** ./public/src/components/SignUpContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass SignUpContent {\n  render() {\n    return `\n                   <div class=\"form-container\">\n                <h1 class=\"title\">Регистрация</h1>\n                <form class=\"form\">\n                    <div class=\"form-item\">\n                        <input type=\"input\" class=\"form-item__input\" placeholder=\"Логин\">\n                        <i class=\"fas fa-user form-item__icon\"></i>\n                    </div>\n                    <div class=\"form-item\">\n                            <input type=\"input\" class=\"form-item__input\" placeholder=\"Никнейм\">\n                            <i class=\"fab fa-suse form-item__icon\"></i>\n                        </div>\n                    <div class=\"form-item\">\n                        <input type=\"password\" class=\"form-item__input\" placeholder=\"Пароль\">\n                        <i class=\"fas fa-unlock form-item__icon\"></i>\n                        <button class=\"form-item__eye\">\n                            <i class=\"fa fa-eye form-item__eye-icon\"></i>\n                        </button>\n                    </div>\n                    <div class=\"form-item\">\n                        <input type=\"password\" class=\"form-item__input\" placeholder=\"Повторите пароль\">\n                        <i class=\"fas fa-unlock form-item__icon\"></i>\n                        <button class=\"form-item__eye\">\n                            <i class=\"fa fa-eye form-item__eye-icon\"></i>\n                        </button>\n                    </div>\n                    <button class=\"button\">Зарегистрироваться</button>\n                </form>\n                <a class=\"link\" href=\"#\">Войти</a> \n            </div>\n        `;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpContent);\n\n//# sourceURL=webpack:///./public/src/components/SignUpContent.js?");

/***/ }),

/***/ "./public/src/components/menu/btn.js":
/*!*******************************************!*\
  !*** ./public/src/components/menu/btn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst btn = (title, path) => `\n                 <a class=\"menu-button\" href=\"#${path}\"> \n                    <b>${title}</b>\n                </a>\n    `;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (btn);\n\n//# sourceURL=webpack:///./public/src/components/menu/btn.js?");

/***/ }),

/***/ "./public/src/components/menu/header.js":
/*!**********************************************!*\
  !*** ./public/src/components/menu/header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst header = () => `\n          <a href=\"#\" class=\"menu__header\">\n                <div class=\"menu__logo\">\n                </div><h1>TheBang!</h1>\n            </a>\n    `;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./public/src/components/menu/header.js?");

/***/ }),

/***/ "./public/src/controllers/AuthPage.js":
/*!********************************************!*\
  !*** ./public/src/controllers/AuthPage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AuthContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AuthContent */ \"./public/src/components/AuthContent.js\");\n/* harmony import */ var _section_IndexController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section/IndexController */ \"./public/src/controllers/section/IndexController.js\");\n\n\n\nclass AuthPage extends _section_IndexController__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(_components_AuthContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n\n  afterRender() {\n    super.afterRender();\n    let form = document.querySelector('form');\n    let passInput = form[1];\n    let showPassw = document.getElementsByClassName('form-item__eye')[0];\n    showPassw.addEventListener('click', () => {\n      if (passInput.type === 'text') {\n        passInput.type = 'password';\n      } else {\n        passInput.type = 'text';\n      }\n    });\n    form.addEventListener('submit', e => {\n      e.preventDefault();\n      let formInputs = form.getElementsByClassName(\"form-item__input\");\n      let error = false;\n      cancelError();\n      [].forEach.call(formInputs, input => {\n        // cancelError(input);\n        if (checkRequired(input)) {\n          error = true;\n        }\n      });\n\n      if (error) {\n        return;\n      }\n\n      let data = {\n        login: form[0].value,\n        password: form[1].value\n      };\n      let request = {\n        mode: 'cors',\n        method: \"POST\",\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json; charset=utf-8',\n          'Cache': 'no-cache'\n        },\n        body: JSON.stringify(data),\n        credentials: 'include'\n      };\n      fetch('/login', request).then(res => {\n        console.log(res.status);\n        return res.json();\n      }).then(data => {\n        if (data.error) {\n          let err = document.createElement(\"span\");\n          err.innerText = data.error;\n          err.className = \"form-item__error-message\";\n          form.append(err);\n          return;\n        }\n\n        console.log(document.cookie);\n      }).catch(res => {\n        let data = res.json();\n        console.log(res.status, data.error);\n      }); // here request fetch Set-Cookie Set-Cookie\n    });\n  }\n\n}\n\nfunction cancelError() {\n  let errorMessage = document.getElementsByClassName('form-item__error-message');\n\n  while (errorMessage.length > 0) {\n    errorMessage[0].parentNode.removeChild(errorMessage[0]);\n  }\n}\n\nfunction insertAfter(elem, refElem) {\n  let parent = refElem.parentNode;\n  let next = refElem.nextSibling;\n\n  if (next) {\n    return parent.insertBefore(elem, next);\n  } else {\n    return parent.appendChild(elem);\n  }\n}\n\nfunction checkRequired(field) {\n  if (!field.value) {\n    field.classList.remove(\"form-item__input_success\");\n    field.classList.add(\"form-item__input_error\");\n    let error = document.createElement(\"span\");\n    error.innerText = \"Это поле обязательно!\";\n    error.className = \"form-item__error-message\";\n    let parentDiv = field.parentNode;\n    insertAfter(error, parentDiv);\n    return true;\n  } else {\n    field.classList.remove(\"form-item__input_error\");\n    field.classList.add(\"form-item__input_success\");\n    return false;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthPage);\n\n//# sourceURL=webpack:///./public/src/controllers/AuthPage.js?");

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

/***/ "./public/src/controllers/LeadersPage.js":
/*!***********************************************!*\
  !*** ./public/src/controllers/LeadersPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_LeaderContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/LeaderContent */ \"./public/src/components/LeaderContent.js\");\n/* harmony import */ var _section_IndexController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section/IndexController */ \"./public/src/controllers/section/IndexController.js\");\n\n\n\nclass LeadersPage extends _section_IndexController__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super(_components_LeaderContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  } // async afterRender() {\n  //     MenuContent.disactivateButtons();\n  // }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeadersPage);\n\n//# sourceURL=webpack:///./public/src/controllers/LeadersPage.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MenuContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/MenuContent */ \"./public/src/components/MenuContent.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ \"./public/src/app.js\");\n\n\n\nclass IndexController {\n  constructor(content) {\n    this.content = new content();\n    this.targetRender = document.getElementsByClassName('content')[0];\n  }\n\n  getTargetRender() {\n    return this.targetRender || _app__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  }\n\n  baseComponent() {\n    this.menu = new _components_MenuContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  render() {\n    if (this.check()) {\n      return `\n            ${this.content.render()}\n            `;\n    }\n\n    this.baseComponent();\n    return `\n                <input type=\"checkbox\" class=\"mobile-input\">\n                <i class=\"mobile-burger fa fa-bars fa-2x\"></i>\n                <div class=\"menu\">\n                ${this.menu.render()}\n                </div>\n                <div class=\"content\">\n                ${this.content.render()}\n                </div>\n        `;\n  }\n\n  check() {\n    return this.targetRender;\n  }\n\n  afterRender() {\n    _components_MenuContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activateButton(this.pageName);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexController);\n\n//# sourceURL=webpack:///./public/src/controllers/section/IndexController.js?");

/***/ })

/******/ });