/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/picture_1.jpg":
/*!***************************!*\
  !*** ./src/picture_1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02d1988a1c5c431469d8.jpg";

/***/ }),

/***/ "./src/picture_2.jpg":
/*!***************************!*\
  !*** ./src/picture_2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3df3762f7fb72e7eff2.jpg";

/***/ }),

/***/ "./src/picture_3.jpg":
/*!***************************!*\
  !*** ./src/picture_3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25a4e0da802ad3906a51.jpg";

/***/ }),

/***/ "./src/picture_4.jpg":
/*!***************************!*\
  !*** ./src/picture_4.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f90d7ce0dc49bd77b9c5.jpg";

/***/ }),

/***/ "./src/picture_5.jpg":
/*!***************************!*\
  !*** ./src/picture_5.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d68672d2873637a1b262.jpg";

/***/ }),

/***/ "./src/picture_6.jpg":
/*!***************************!*\
  !*** ./src/picture_6.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e9d3bda425da323a1d1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/menuContent.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMenuContent)
/* harmony export */ });
/* harmony import */ var _picture_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picture_1.jpg */ "./src/picture_1.jpg");
/* harmony import */ var _picture_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picture_2.jpg */ "./src/picture_2.jpg");
/* harmony import */ var _picture_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture_3.jpg */ "./src/picture_3.jpg");
/* harmony import */ var _picture_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picture_4.jpg */ "./src/picture_4.jpg");
/* harmony import */ var _picture_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picture_5.jpg */ "./src/picture_5.jpg");
/* harmony import */ var _picture_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picture_6.jpg */ "./src/picture_6.jpg");







function addMenuContent (){
    
  const body = document.body;

  
  /*Menu*/

  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menuContent'); 
  menuContent.setAttribute('class', 'hidden'); 
  content.appendChild(menuContent);

  const heroHeading2 = document.createElement('h1');
  heroHeading2.textContent="Our Menu";
  menuContent.appendChild(heroHeading2);

  const menuItems = document.createElement('div');
  menuItems.setAttribute('id', 'menuItemsArea'); 
  menuContent.appendChild(menuItems);

  const menuItemsContainer = document.createElement('div');
  menuItemsContainer.setAttribute('id', 'menuItemsContainer'); 
  menuItems.appendChild(menuItemsContainer);



  const menuItem1 = document.createElement('div');
  menuItem1.setAttribute('class', 'menuItems'); 
  menuItemsContainer.appendChild(menuItem1);

  const menuItem1Image = document.createElement('img');
  menuItem1Image.src = _picture_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  menuItem1.appendChild(menuItem1Image);

  const menuItem1TextArea = document.createElement('div');
  menuItem1.appendChild(menuItem1TextArea);

  const menuItem1Heading = document.createElement('h3');  
  menuItem1Heading.textContent="Food 1";
  menuItem1TextArea.appendChild(menuItem1Heading);

  const menuItem1Text = document.createElement('p');
  menuItem1Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem1TextArea.appendChild(menuItem1Text);

  const menuItem4Image = document.createElement('img');
  menuItem4Image.src = _picture_4_jpg__WEBPACK_IMPORTED_MODULE_3__;
  menuItem1.appendChild(menuItem4Image);

  const menuItem4TextArea = document.createElement('div');
  menuItem1.appendChild(menuItem4TextArea);

  const menuItem4Heading = document.createElement('h3');  
  menuItem4Heading.textContent="Food 4";
  menuItem4TextArea.appendChild(menuItem4Heading);

  const menuItem4Text = document.createElement('p');
  menuItem4Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem4TextArea.appendChild(menuItem4Text);





  const menuItem2 = document.createElement('div');
  menuItem2.setAttribute('class', 'menuItems'); 
  menuItemsContainer.appendChild(menuItem2);

  const menuItem2Image = document.createElement('img');
  menuItem2Image.src = _picture_2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  menuItem2.appendChild(menuItem2Image);

  const menuItem2TextArea = document.createElement('div');
  menuItem2.appendChild(menuItem2TextArea);
  
  const menuItem2Heading = document.createElement('h3');  
  menuItem2Heading.textContent="Food 2";
  menuItem2TextArea.appendChild(menuItem2Heading);

  const menuItem2Text = document.createElement('p');
  menuItem2Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem2TextArea.appendChild(menuItem2Text);

  const menuItem5Image = document.createElement('img');
  menuItem5Image.src = _picture_5_jpg__WEBPACK_IMPORTED_MODULE_4__;
  menuItem2.appendChild(menuItem5Image);

  const menuItem5TextArea = document.createElement('div');
  menuItem2.appendChild(menuItem5TextArea);
  
  const menuItem5Heading = document.createElement('h3');  
  menuItem5Heading.textContent="Food 5";
  menuItem5TextArea.appendChild(menuItem5Heading);

  const menuItem5Text = document.createElement('p');
  menuItem5Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem5TextArea.appendChild(menuItem5Text);




  const menuItem3 = document.createElement('div');
  menuItem3.setAttribute('class', 'menuItems'); 
  menuItemsContainer.appendChild(menuItem3);

  const menuItem3Image = document.createElement('img');
  menuItem3Image.src = _picture_3_jpg__WEBPACK_IMPORTED_MODULE_2__;
  menuItem3.appendChild(menuItem3Image);

  const menuItem3TextArea = document.createElement('div');
  menuItem3.appendChild(menuItem3TextArea);

  const menuItem3Heading = document.createElement('h3');  
  menuItem3Heading.textContent="Food 3";
  menuItem3TextArea.appendChild(menuItem3Heading);

  const menuItem3Text = document.createElement('p');
  menuItem3Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem3TextArea.appendChild(menuItem3Text);

  const menuItem6Image = document.createElement('img');
  menuItem6Image.src = _picture_6_jpg__WEBPACK_IMPORTED_MODULE_5__;
  menuItem3.appendChild(menuItem6Image);

  const menuItem6TextArea = document.createElement('div');
  menuItem3.appendChild(menuItem6TextArea);

  const menuItem6Heading = document.createElement('h3');  
  menuItem6Heading.textContent="Food 6";
  menuItem6TextArea.appendChild(menuItem6Heading);

  const menuItem6Text = document.createElement('p');
  menuItem6Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem6TextArea.appendChild(menuItem6Text);


}
 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudDMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV0QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQ0FBTTtBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkNBQU07QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkNBQU07QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQ0FBTTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQ0FBTTtBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkNBQU07QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9zaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9zaXRlLy4vc3JjL21lbnVDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaW1hZ2UxIGZyb20gJy4vcGljdHVyZV8xLmpwZyc7XG5pbXBvcnQgaW1hZ2UyIGZyb20gJy4vcGljdHVyZV8yLmpwZyc7XG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4vcGljdHVyZV8zLmpwZyc7XG5pbXBvcnQgaW1hZ2U0IGZyb20gJy4vcGljdHVyZV80LmpwZyc7XG5pbXBvcnQgaW1hZ2U1IGZyb20gJy4vcGljdHVyZV81LmpwZyc7XG5pbXBvcnQgaW1hZ2U2IGZyb20gJy4vcGljdHVyZV82LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1lbnVDb250ZW50ICgpe1xuICAgIFxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBcbiAgLypNZW51Ki9cblxuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVDb250ZW50Jyk7IFxuICBtZW51Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hpZGRlbicpOyBcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG5cbiAgY29uc3QgaGVyb0hlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVyb0hlYWRpbmcyLnRleHRDb250ZW50PVwiT3VyIE1lbnVcIjtcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb0hlYWRpbmcyKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW1zLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUl0ZW1zQXJlYScpOyBcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICBjb25zdCBtZW51SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW1zQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUl0ZW1zQ29udGFpbmVyJyk7IFxuICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW1zQ29udGFpbmVyKTtcblxuXG5cbiAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVJdGVtcycpOyBcbiAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtMSk7XG5cbiAgY29uc3QgbWVudUl0ZW0xSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbWVudUl0ZW0xSW1hZ2Uuc3JjID0gaW1hZ2UxO1xuICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQobWVudUl0ZW0xSW1hZ2UpO1xuXG4gIGNvbnN0IG1lbnVJdGVtMVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMS5hcHBlbmRDaGlsZChtZW51SXRlbTFUZXh0QXJlYSk7XG5cbiAgY29uc3QgbWVudUl0ZW0xSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7ICBcbiAgbWVudUl0ZW0xSGVhZGluZy50ZXh0Q29udGVudD1cIkZvb2QgMVwiO1xuICBtZW51SXRlbTFUZXh0QXJlYS5hcHBlbmRDaGlsZChtZW51SXRlbTFIZWFkaW5nKTtcblxuICBjb25zdCBtZW51SXRlbTFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51SXRlbTFUZXh0LnRleHRDb250ZW50PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBFaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiO1xuICBtZW51SXRlbTFUZXh0QXJlYS5hcHBlbmRDaGlsZChtZW51SXRlbTFUZXh0KTtcblxuICBjb25zdCBtZW51SXRlbTRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51SXRlbTRJbWFnZS5zcmMgPSBpbWFnZTQ7XG4gIG1lbnVJdGVtMS5hcHBlbmRDaGlsZChtZW51SXRlbTRJbWFnZSk7XG5cbiAgY29uc3QgbWVudUl0ZW00VGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKG1lbnVJdGVtNFRleHRBcmVhKTtcblxuICBjb25zdCBtZW51SXRlbTRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTsgIFxuICBtZW51SXRlbTRIZWFkaW5nLnRleHRDb250ZW50PVwiRm9vZCA0XCI7XG4gIG1lbnVJdGVtNFRleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtNEhlYWRpbmcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnVJdGVtNFRleHQudGV4dENvbnRlbnQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XG4gIG1lbnVJdGVtNFRleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtNFRleHQpO1xuXG5cblxuXG5cbiAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVJdGVtcycpOyBcbiAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtMik7XG5cbiAgY29uc3QgbWVudUl0ZW0ySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbWVudUl0ZW0ySW1hZ2Uuc3JjID0gaW1hZ2UyO1xuICBtZW51SXRlbTIuYXBwZW5kQ2hpbGQobWVudUl0ZW0ySW1hZ2UpO1xuXG4gIGNvbnN0IG1lbnVJdGVtMlRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMi5hcHBlbmRDaGlsZChtZW51SXRlbTJUZXh0QXJlYSk7XG4gIFxuICBjb25zdCBtZW51SXRlbTJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTsgIFxuICBtZW51SXRlbTJIZWFkaW5nLnRleHRDb250ZW50PVwiRm9vZCAyXCI7XG4gIG1lbnVJdGVtMlRleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtMkhlYWRpbmcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtMlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnVJdGVtMlRleHQudGV4dENvbnRlbnQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XG4gIG1lbnVJdGVtMlRleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtMlRleHQpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG1lbnVJdGVtNUltYWdlLnNyYyA9IGltYWdlNTtcbiAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVJdGVtNUltYWdlKTtcblxuICBjb25zdCBtZW51SXRlbTVUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbTIuYXBwZW5kQ2hpbGQobWVudUl0ZW01VGV4dEFyZWEpO1xuICBcbiAgY29uc3QgbWVudUl0ZW01SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7ICBcbiAgbWVudUl0ZW01SGVhZGluZy50ZXh0Q29udGVudD1cIkZvb2QgNVwiO1xuICBtZW51SXRlbTVUZXh0QXJlYS5hcHBlbmRDaGlsZChtZW51SXRlbTVIZWFkaW5nKTtcblxuICBjb25zdCBtZW51SXRlbTVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51SXRlbTVUZXh0LnRleHRDb250ZW50PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBFaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiO1xuICBtZW51SXRlbTVUZXh0QXJlYS5hcHBlbmRDaGlsZChtZW51SXRlbTVUZXh0KTtcblxuXG5cblxuICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudUl0ZW1zJyk7IFxuICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKTtcblxuICBjb25zdCBtZW51SXRlbTNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51SXRlbTNJbWFnZS5zcmMgPSBpbWFnZTM7XG4gIG1lbnVJdGVtMy5hcHBlbmRDaGlsZChtZW51SXRlbTNJbWFnZSk7XG5cbiAgY29uc3QgbWVudUl0ZW0zVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVJdGVtM1RleHRBcmVhKTtcblxuICBjb25zdCBtZW51SXRlbTNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTsgIFxuICBtZW51SXRlbTNIZWFkaW5nLnRleHRDb250ZW50PVwiRm9vZCAzXCI7XG4gIG1lbnVJdGVtM1RleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtM0hlYWRpbmcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtM1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnVJdGVtM1RleHQudGV4dENvbnRlbnQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XG4gIG1lbnVJdGVtM1RleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtM1RleHQpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG1lbnVJdGVtNkltYWdlLnNyYyA9IGltYWdlNjtcbiAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVJdGVtNkltYWdlKTtcblxuICBjb25zdCBtZW51SXRlbTZUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbTMuYXBwZW5kQ2hpbGQobWVudUl0ZW02VGV4dEFyZWEpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyAgXG4gIG1lbnVJdGVtNkhlYWRpbmcudGV4dENvbnRlbnQ9XCJGb29kIDZcIjtcbiAgbWVudUl0ZW02VGV4dEFyZWEuYXBwZW5kQ2hpbGQobWVudUl0ZW02SGVhZGluZyk7XG5cbiAgY29uc3QgbWVudUl0ZW02VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUl0ZW02VGV4dC50ZXh0Q29udGVudD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gRWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIjtcbiAgbWVudUl0ZW02VGV4dEFyZWEuYXBwZW5kQ2hpbGQobWVudUl0ZW02VGV4dCk7XG5cblxufVxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==