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
  !*** ./src/pagecontent.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writePageContent)
/* harmony export */ });
/* harmony import */ var _picture_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picture_1.jpg */ "./src/picture_1.jpg");
/* harmony import */ var _picture_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picture_2.jpg */ "./src/picture_2.jpg");
/* harmony import */ var _picture_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture_3.jpg */ "./src/picture_3.jpg");
/* harmony import */ var _picture_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picture_4.jpg */ "./src/picture_4.jpg");
/* harmony import */ var _picture_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picture_5.jpg */ "./src/picture_5.jpg");
/* harmony import */ var _picture_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picture_6.jpg */ "./src/picture_6.jpg");







function writePageContent (){
  
  console.log ("Content script start.");
  
  const body = document.body;

  const nav = document.createElement('div');
  nav.setAttribute('id', 'nav'); 
  body.appendChild(nav);

  /*Buttons*/
  const navButtonHome = document.createElement('button');
  navButtonHome.textContent="Home";
  nav.appendChild(navButtonHome);

  const icon = document.createElement('i');
  icon.className += "fa-brands fa-space-awesome";
  nav.appendChild(icon);

  const navButtonMenu = document.createElement('button');
  navButtonMenu.textContent="Menu";
  nav.appendChild(navButtonMenu);

  const content = document.createElement('div');
  content.setAttribute('id', 'content'); 
  body.appendChild(content);


/*Home Page*/
  const homeContent = document.createElement('div');
  homeContent.setAttribute('id', 'homeContent'); 
  content.appendChild(homeContent);

  const heroDiv = document.createElement('div');
  heroDiv.setAttribute('id', 'hero'); 
  homeContent.appendChild(heroDiv);
  
  const heroHeading = document.createElement('h1');
  heroHeading.textContent="Welcome to Cosmic Corner";
  heroDiv.appendChild(heroHeading);

  const infoArea = document.createElement('div');
  infoArea.setAttribute('id', 'infoArea'); 
  homeContent.appendChild(infoArea);
  
  const infoContainer = document.createElement('div');
  infoContainer.setAttribute('id', 'infoContainer'); 
  infoArea.appendChild(infoContainer);

  const infoDiv = document.createElement('div');
  infoDiv.setAttribute('id', 'info'); 
  infoContainer.appendChild(infoDiv);



  const aboutSection = document.createElement('div');
  aboutSection.setAttribute('id', 'description'); 
  infoDiv.appendChild(aboutSection);

  const aboutTextHeading = document.createElement('h3');
  aboutTextHeading.textContent="Unique Food";
  aboutSection.appendChild(aboutTextHeading);

  const aboutTextContent = document.createElement('p');
  aboutTextContent.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  aboutSection.appendChild(aboutTextContent);

  const contactSection = document.createElement('div');
  contactSection.setAttribute('id', 'contact'); 
  infoDiv.appendChild(contactSection);

  const contactSectionHeading = document.createElement('h3');
  contactSectionHeading.textContent="Contact Us";
  contactSection.appendChild(contactSectionHeading);

  const contactSectionPhone = document.createElement('p');
  contactSectionPhone.textContent="Phone: 760-232-2342";
  contactSection.appendChild(contactSectionPhone);

  const contactSectionEmail = document.createElement('p');
  contactSectionEmail.textContent="Email: hello@cosmiccafe.com";
  contactSection.appendChild(contactSectionEmail);

  const contactSectionAddress1 = document.createElement('p');
  contactSectionAddress1.textContent="Address: 323 Lunar Way";
  contactSection.appendChild(contactSectionAddress1);


  const contactSectionAddress2 = document.createElement('p');
  contactSectionAddress2.textContent="Somewhere, AZ 39232";
  contactSection.appendChild(contactSectionAddress2);


  
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


  



  /*Event Listners*/
  navButtonHome.addEventListener('click', () => {
    homeContent.classList.remove("hidden");
    menuContent.classList.add("hidden")

  });

  navButtonMenu.addEventListener('click', () => {
    homeContent.classList.add("hidden");
    menuContent.classList.remove("hidden")

  });


}




 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV0QjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDJDQUFNO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQ0FBTTtBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQ0FBTTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDJDQUFNO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkNBQU07QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDJDQUFNO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOzs7QUFHSDs7Ozs7QUFLQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9zaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9zaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9zaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfc2l0ZS8uL3NyYy9wYWdlY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGltYWdlMSBmcm9tICcuL3BpY3R1cmVfMS5qcGcnO1xuaW1wb3J0IGltYWdlMiBmcm9tICcuL3BpY3R1cmVfMi5qcGcnO1xuaW1wb3J0IGltYWdlMyBmcm9tICcuL3BpY3R1cmVfMy5qcGcnO1xuaW1wb3J0IGltYWdlNCBmcm9tICcuL3BpY3R1cmVfNC5qcGcnO1xuaW1wb3J0IGltYWdlNSBmcm9tICcuL3BpY3R1cmVfNS5qcGcnO1xuaW1wb3J0IGltYWdlNiBmcm9tICcuL3BpY3R1cmVfNi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cml0ZVBhZ2VDb250ZW50ICgpe1xuICBcbiAgY29uc29sZS5sb2cgKFwiQ29udGVudCBzY3JpcHQgc3RhcnQuXCIpO1xuICBcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpOyBcbiAgYm9keS5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIC8qQnV0dG9ucyovXG4gIGNvbnN0IG5hdkJ1dHRvbkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmF2QnV0dG9uSG9tZS50ZXh0Q29udGVudD1cIkhvbWVcIjtcbiAgbmF2LmFwcGVuZENoaWxkKG5hdkJ1dHRvbkhvbWUpO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb24uY2xhc3NOYW1lICs9IFwiZmEtYnJhbmRzIGZhLXNwYWNlLWF3ZXNvbWVcIjtcbiAgbmF2LmFwcGVuZENoaWxkKGljb24pO1xuXG4gIGNvbnN0IG5hdkJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmF2QnV0dG9uTWVudS50ZXh0Q29udGVudD1cIk1lbnVcIjtcbiAgbmF2LmFwcGVuZENoaWxkKG5hdkJ1dHRvbk1lbnUpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTsgXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cblxuLypIb21lIFBhZ2UqL1xuICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVDb250ZW50Jyk7IFxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcblxuICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdoZXJvJyk7IFxuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbiAgXG4gIGNvbnN0IGhlcm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVyb0hlYWRpbmcudGV4dENvbnRlbnQ9XCJXZWxjb21lIHRvIENvc21pYyBDb3JuZXJcIjtcbiAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvSGVhZGluZyk7XG5cbiAgY29uc3QgaW5mb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0FyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdpbmZvQXJlYScpOyBcbiAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mb0FyZWEpO1xuICBcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mb0NvbnRhaW5lcicpOyBcbiAgaW5mb0FyZWEuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mbycpOyBcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuXG5cbiAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7IFxuICBpbmZvRGl2LmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XG5cbiAgY29uc3QgYWJvdXRUZXh0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGFib3V0VGV4dEhlYWRpbmcudGV4dENvbnRlbnQ9XCJVbmlxdWUgRm9vZFwiO1xuICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRUZXh0SGVhZGluZyk7XG5cbiAgY29uc3QgYWJvdXRUZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXRUZXh0Q29udGVudC50ZXh0Q29udGVudD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIjtcbiAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0VGV4dENvbnRlbnQpO1xuXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpOyBcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XG5cbiAgY29uc3QgY29udGFjdFNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29udGFjdFNlY3Rpb25IZWFkaW5nLnRleHRDb250ZW50PVwiQ29udGFjdCBVc1wiO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbkhlYWRpbmcpO1xuXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3RTZWN0aW9uUGhvbmUudGV4dENvbnRlbnQ9XCJQaG9uZTogNzYwLTIzMi0yMzQyXCI7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uUGhvbmUpO1xuXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3RTZWN0aW9uRW1haWwudGV4dENvbnRlbnQ9XCJFbWFpbDogaGVsbG9AY29zbWljY2FmZS5jb21cIjtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb25FbWFpbCk7XG5cbiAgY29uc3QgY29udGFjdFNlY3Rpb25BZGRyZXNzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29udGFjdFNlY3Rpb25BZGRyZXNzMS50ZXh0Q29udGVudD1cIkFkZHJlc3M6IDMyMyBMdW5hciBXYXlcIjtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb25BZGRyZXNzMSk7XG5cblxuICBjb25zdCBjb250YWN0U2VjdGlvbkFkZHJlc3MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250YWN0U2VjdGlvbkFkZHJlc3MyLnRleHRDb250ZW50PVwiU29tZXdoZXJlLCBBWiAzOTIzMlwiO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbkFkZHJlc3MyKTtcblxuXG4gIFxuICAvKk1lbnUqL1xuXG4gIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUNvbnRlbnQnKTsgXG4gIG1lbnVDb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGlkZGVuJyk7IFxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcblxuICBjb25zdCBoZXJvSGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZXJvSGVhZGluZzIudGV4dENvbnRlbnQ9XCJPdXIgTWVudVwiO1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChoZXJvSGVhZGluZzIpO1xuXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbXMuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51SXRlbXNBcmVhJyk7IFxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4gIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbXNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51SXRlbXNDb250YWluZXInKTsgXG4gIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbXNDb250YWluZXIpO1xuXG5cblxuICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudUl0ZW1zJyk7IFxuICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcblxuICBjb25zdCBtZW51SXRlbTFJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51SXRlbTFJbWFnZS5zcmMgPSBpbWFnZTE7XG4gIG1lbnVJdGVtMS5hcHBlbmRDaGlsZChtZW51SXRlbTFJbWFnZSk7XG5cbiAgY29uc3QgbWVudUl0ZW0xVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKG1lbnVJdGVtMVRleHRBcmVhKTtcblxuICBjb25zdCBtZW51SXRlbTFIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTsgIFxuICBtZW51SXRlbTFIZWFkaW5nLnRleHRDb250ZW50PVwiRm9vZCAxXCI7XG4gIG1lbnVJdGVtMVRleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtMUhlYWRpbmcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtMVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnVJdGVtMVRleHQudGV4dENvbnRlbnQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XG4gIG1lbnVJdGVtMVRleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtMVRleHQpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG1lbnVJdGVtNEltYWdlLnNyYyA9IGltYWdlNDtcbiAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKG1lbnVJdGVtNEltYWdlKTtcblxuICBjb25zdCBtZW51SXRlbTRUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQobWVudUl0ZW00VGV4dEFyZWEpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyAgXG4gIG1lbnVJdGVtNEhlYWRpbmcudGV4dENvbnRlbnQ9XCJGb29kIDRcIjtcbiAgbWVudUl0ZW00VGV4dEFyZWEuYXBwZW5kQ2hpbGQobWVudUl0ZW00SGVhZGluZyk7XG5cbiAgY29uc3QgbWVudUl0ZW00VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUl0ZW00VGV4dC50ZXh0Q29udGVudD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gRWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIjtcbiAgbWVudUl0ZW00VGV4dEFyZWEuYXBwZW5kQ2hpbGQobWVudUl0ZW00VGV4dCk7XG5cblxuXG5cblxuICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0yLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudUl0ZW1zJyk7IFxuICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcblxuICBjb25zdCBtZW51SXRlbTJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51SXRlbTJJbWFnZS5zcmMgPSBpbWFnZTI7XG4gIG1lbnVJdGVtMi5hcHBlbmRDaGlsZChtZW51SXRlbTJJbWFnZSk7XG5cbiAgY29uc3QgbWVudUl0ZW0yVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG1lbnVJdGVtMlRleHRBcmVhKTtcbiAgXG4gIGNvbnN0IG1lbnVJdGVtMkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyAgXG4gIG1lbnVJdGVtMkhlYWRpbmcudGV4dENvbnRlbnQ9XCJGb29kIDJcIjtcbiAgbWVudUl0ZW0yVGV4dEFyZWEuYXBwZW5kQ2hpbGQobWVudUl0ZW0ySGVhZGluZyk7XG5cbiAgY29uc3QgbWVudUl0ZW0yVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUl0ZW0yVGV4dC50ZXh0Q29udGVudD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gRWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIjtcbiAgbWVudUl0ZW0yVGV4dEFyZWEuYXBwZW5kQ2hpbGQobWVudUl0ZW0yVGV4dCk7XG5cbiAgY29uc3QgbWVudUl0ZW01SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbWVudUl0ZW01SW1hZ2Uuc3JjID0gaW1hZ2U1O1xuICBtZW51SXRlbTIuYXBwZW5kQ2hpbGQobWVudUl0ZW01SW1hZ2UpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMi5hcHBlbmRDaGlsZChtZW51SXRlbTVUZXh0QXJlYSk7XG4gIFxuICBjb25zdCBtZW51SXRlbTVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTsgIFxuICBtZW51SXRlbTVIZWFkaW5nLnRleHRDb250ZW50PVwiRm9vZCA1XCI7XG4gIG1lbnVJdGVtNVRleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtNUhlYWRpbmcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnVJdGVtNVRleHQudGV4dENvbnRlbnQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XG4gIG1lbnVJdGVtNVRleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtNVRleHQpO1xuXG4gIFxuXG5cblxuICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudUl0ZW1zJyk7IFxuICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKTtcblxuICBjb25zdCBtZW51SXRlbTNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51SXRlbTNJbWFnZS5zcmMgPSBpbWFnZTM7XG4gIG1lbnVJdGVtMy5hcHBlbmRDaGlsZChtZW51SXRlbTNJbWFnZSk7XG5cbiAgY29uc3QgbWVudUl0ZW0zVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVJdGVtM1RleHRBcmVhKTtcblxuICBjb25zdCBtZW51SXRlbTNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTsgIFxuICBtZW51SXRlbTNIZWFkaW5nLnRleHRDb250ZW50PVwiRm9vZCAzXCI7XG4gIG1lbnVJdGVtM1RleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtM0hlYWRpbmcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtM1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnVJdGVtM1RleHQudGV4dENvbnRlbnQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XG4gIG1lbnVJdGVtM1RleHRBcmVhLmFwcGVuZENoaWxkKG1lbnVJdGVtM1RleHQpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG1lbnVJdGVtNkltYWdlLnNyYyA9IGltYWdlNjtcbiAgbWVudUl0ZW0zLmFwcGVuZENoaWxkKG1lbnVJdGVtNkltYWdlKTtcblxuICBjb25zdCBtZW51SXRlbTZUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbTMuYXBwZW5kQ2hpbGQobWVudUl0ZW02VGV4dEFyZWEpO1xuXG4gIGNvbnN0IG1lbnVJdGVtNkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyAgXG4gIG1lbnVJdGVtNkhlYWRpbmcudGV4dENvbnRlbnQ9XCJGb29kIDZcIjtcbiAgbWVudUl0ZW02VGV4dEFyZWEuYXBwZW5kQ2hpbGQobWVudUl0ZW02SGVhZGluZyk7XG5cbiAgY29uc3QgbWVudUl0ZW02VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUl0ZW02VGV4dC50ZXh0Q29udGVudD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gRWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIjtcbiAgbWVudUl0ZW02VGV4dEFyZWEuYXBwZW5kQ2hpbGQobWVudUl0ZW02VGV4dCk7XG5cblxuICBcblxuXG5cbiAgLypFdmVudCBMaXN0bmVycyovXG4gIG5hdkJ1dHRvbkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG5cbiAgfSk7XG5cbiAgbmF2QnV0dG9uTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcblxuICB9KTtcblxuXG59XG5cblxuXG5cbiAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=