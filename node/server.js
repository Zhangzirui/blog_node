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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/server.js":
/*!************************!*\
  !*** ../src/server.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var $util_serverUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $util/serverUtil */ \"../src/util/serverUtil.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// import path from 'path';\n// import express from 'express';\n// import React from 'react';\n// import ReactDOM from 'react-dom/server';\n// import routeConfig from '$route';\n // const app = express();\n// const router = express.Router();\n// app.use(express.static(path.resolve(__dirname, '../dist')));\n// router.get('/*', (req, res) => {\n//     let renderObj;\n//     routeConfig\n//         .some((route) => {\n//             if (route.url === req.path) {\n//                 renderObj = route;\n//                 return true;\n//             };\n//             return false;\n//         })\n//     // readDir('../dist')\n//     //     .then((files) => {\n//     //         files.some((file) => {\n//     //             if (file.indexOf())\n//     //         })\n//     //     })\n//     const renderStr = ReactDOM.renderToString(reactContent);\n// });\n\nObject($util_serverUtil__WEBPACK_IMPORTED_MODULE_0__[\"readDir\"])('../dist').then(function (files) {\n  files.some(function (file) {\n    console.log(file);\n    console.log(_typeof(file)); // if (file.indexOf())\n  });\n});\n\n//# sourceURL=webpack:///../src/server.js?");

/***/ }),

/***/ "../src/util/serverUtil.js":
/*!*********************************!*\
  !*** ../src/util/serverUtil.js ***!
  \*********************************/
/*! exports provided: readDir, htmlTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readDir\", function() { return readDir; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlTemplate\", function() { return htmlTemplate; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nvar readDir = function readDir(path) {\n  return new Promise(function (resolve, reject) {\n    fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdir(path, function (err, files) {\n      if (err) {\n        throw new Error(err);\n      }\n\n      resolve(files);\n    });\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\nvar htmlTemplate = function htmlTemplate(renderObj, initialState) {\n  return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n        <head>\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n            <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n            <title>\\u5403\\u8089\\u5403\\u8089\\u7684\\u535A\\u5BA2</title>\\n            <script>\\n                window.__initialState = \".concat(JSON.stringify(initialState), \"\\n            </script>  \\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\").concat(renderObj.reactDom, \"</div>\\n            <script type=\\\"text/javascript\\\" src=\\\"\").concat(renderObj.jsPath, \"\\\"></script>\\n        </body>\\n    </html>\\n    \");\n};\n\n//# sourceURL=webpack:///../src/util/serverUtil.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ });