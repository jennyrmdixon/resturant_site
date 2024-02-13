/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/pagecontent.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writePageContent)
/* harmony export */ });
function writePageContent (){

  console.log ("Content script start.");
  
  const body = document.body;

  const nav = document.createElement('div');
  nav.setAttribute('id', 'nav'); 
  body.appendChild(nav);

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
  
  const heroDiv = document.createElement('div');
  heroDiv.setAttribute('id', 'hero'); 
  content.appendChild(heroDiv);
  
  const heroHeading = document.createElement('h1');
  heroHeading.textContent="Welcome to Cosmic Corner";
  heroDiv.appendChild(heroHeading);

  const infoDiv = document.createElement('div');
  infoDiv.setAttribute('id', 'info'); 
  content.appendChild(infoDiv);

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
  contactSectionAddress1.textContent="323 Lunar Way";
  contactSection.appendChild(contactSectionAddress1);

  const contactSectionAddressbr1 = document.createElement('br');
  contactSection.appendChild(contactSectionAddressbr1);

  const contactSectionAddress2 = document.createElement('p');
  contactSectionAddress2.textContent="393853 AZ";
  contactSection.appendChild(contactSectionAddress2);

}




 
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9zaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3NpdGUvLi9zcmMvcGFnZWNvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cml0ZVBhZ2VDb250ZW50ICgpe1xuXG4gIGNvbnNvbGUubG9nIChcIkNvbnRlbnQgc2NyaXB0IHN0YXJ0LlwiKTtcbiAgXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTsgXG4gIGJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb25zdCBuYXZCdXR0b25Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hdkJ1dHRvbkhvbWUudGV4dENvbnRlbnQ9XCJIb21lXCI7XG4gIG5hdi5hcHBlbmRDaGlsZChuYXZCdXR0b25Ib21lKTtcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uLmNsYXNzTmFtZSArPSBcImZhLWJyYW5kcyBmYS1zcGFjZS1hd2Vzb21lXCI7XG4gIG5hdi5hcHBlbmRDaGlsZChpY29uKTtcblxuICBjb25zdCBuYXZCdXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hdkJ1dHRvbk1lbnUudGV4dENvbnRlbnQ9XCJNZW51XCI7XG4gIG5hdi5hcHBlbmRDaGlsZChuYXZCdXR0b25NZW51KTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7IFxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcbiAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVybycpOyBcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbiAgXG4gIGNvbnN0IGhlcm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVyb0hlYWRpbmcudGV4dENvbnRlbnQ9XCJXZWxjb21lIHRvIENvc21pYyBDb3JuZXJcIjtcbiAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvSGVhZGluZyk7XG5cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mbycpOyBcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTsgXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcblxuICBjb25zdCBhYm91dFRleHRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYWJvdXRUZXh0SGVhZGluZy50ZXh0Q29udGVudD1cIlVuaXF1ZSBGb29kXCI7XG4gIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dFRleHRIZWFkaW5nKTtcblxuICBjb25zdCBhYm91dFRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhYm91dFRleHRDb250ZW50LnRleHRDb250ZW50PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiO1xuICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRUZXh0Q29udGVudCk7XG5cbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdFNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7IFxuICBpbmZvRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKTtcblxuICBjb25zdCBjb250YWN0U2VjdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb250YWN0U2VjdGlvbkhlYWRpbmcudGV4dENvbnRlbnQ9XCJDb250YWN0IFVzXCI7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uSGVhZGluZyk7XG5cbiAgY29uc3QgY29udGFjdFNlY3Rpb25QaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29udGFjdFNlY3Rpb25QaG9uZS50ZXh0Q29udGVudD1cIlBob25lOiA3NjAtMjMyLTIzNDJcIjtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb25QaG9uZSk7XG5cbiAgY29uc3QgY29udGFjdFNlY3Rpb25FbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29udGFjdFNlY3Rpb25FbWFpbC50ZXh0Q29udGVudD1cIkVtYWlsOiBoZWxsb0Bjb3NtaWNjYWZlLmNvbVwiO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbkVtYWlsKTtcblxuICBjb25zdCBjb250YWN0U2VjdGlvbkFkZHJlc3MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250YWN0U2VjdGlvbkFkZHJlc3MxLnRleHRDb250ZW50PVwiMzIzIEx1bmFyIFdheVwiO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbkFkZHJlc3MxKTtcblxuICBjb25zdCBjb250YWN0U2VjdGlvbkFkZHJlc3NicjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbkFkZHJlc3NicjEpO1xuXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uQWRkcmVzczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3RTZWN0aW9uQWRkcmVzczIudGV4dENvbnRlbnQ9XCIzOTM4NTMgQVpcIjtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb25BZGRyZXNzMik7XG5cbn1cblxuXG5cblxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==