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
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\src\\\\index.js: Unexpected token (47:16)\\n\\n\\u001b[0m \\u001b[90m 45 | \\u001b[39m            backgroundColor\\u001b[33m:\\u001b[39m \\u001b[32m'#F4F4F4'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 46 | \\u001b[39m        }\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 47 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'window'\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 48 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'window-content'\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 49 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'pane-group'\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 50 | \\u001b[39m                    \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'pane-sm sidebar'\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3831:17)\\n    at Parser.unexpected (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5143:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6283:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5862:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5842:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5729:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5702:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5647:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6435:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6215:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5862:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5842:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5729:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5702:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5647:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5595:23)\\n    at Parser.parseReturnStatement (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7617:28)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7295:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7810:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7797:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7786:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6876:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6860:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6804:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8200:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8125:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8067:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8022:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\s.takasaki\\\\study\\\\ch4\\\\electron-clipfmt\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7150:14)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });