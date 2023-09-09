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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_leaderboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/leaderboard.js */ \"./src/module/leaderboard.js\");\n/* harmony import */ var _module_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/form.js */ \"./src/module/form.js\");\n\n\n\ndocument.querySelector('.refresh-button').addEventListener('click', async () => {\n  const leaderboardData = await (0,_module_leaderboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  // eslint-disable-next-line no-use-before-define\n  updateLeaderboard(leaderboardData);\n});\n\ndocument.getElementById('score-form').addEventListener('submit', async (event) => {\n  const leaderboardData = await (0,_module_form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event);\n  // eslint-disable-next-line no-use-before-define\n  updateLeaderboard(leaderboardData);\n});\n\nfunction updateLeaderboard(leaderboardData) {\n  const scoreList = document.getElementById('score-list');\n  scoreList.innerHTML = '';\n\n  leaderboardData.forEach((score, index) => {\n    const listItem = document.createElement('li');\n    listItem.innerHTML = `${index + 1}. ${score.user} - ${score.score}`;\n    scoreList.appendChild(listItem);\n  });\n}\n\n(0,_module_leaderboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((leaderboardData) => {\n  updateLeaderboard(leaderboardData);\n});\n\n\n//# sourceURL=webpack://Leader_Board/./src/index.js?");

/***/ }),

/***/ "./src/module/form.js":
/*!****************************!*\
  !*** ./src/module/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _leaderboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard.js */ \"./src/module/leaderboard.js\");\n\n\nconst apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7UyWMdCgHZ87wkTWCz0G/scores/';\n\nasync function handleSubmit(event) {\n  event.preventDefault();\n\n  const playerNameInput = document.getElementById('player-name');\n  const playerScoreInput = document.getElementById('player-score');\n\n  const playerName = playerNameInput.value;\n  const playerScore = parseInt(playerScoreInput.value, 10);\n\n  if (playerName && !Number.isNaN(playerScore)) {\n    try {\n      const response = await fetch(apiUrl, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({ user: playerName, score: playerScore }),\n      });\n\n      if (response.ok) {\n        document.getElementById('player-name').value = '';\n        document.getElementById('player-score').value = '';\n\n        const leaderboardData = await (0,_leaderboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        return leaderboardData;\n      }\n      throw new Error('Failed to submit the score');\n    } catch (error) {\n      throw new Error('Error:', error);\n    }\n  }\n  return null;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ handleSubmit });\n\n\n//# sourceURL=webpack://Leader_Board/./src/module/form.js?");

/***/ }),

/***/ "./src/module/leaderboard.js":
/*!***********************************!*\
  !*** ./src/module/leaderboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7UyWMdCgHZ87wkTWCz0G/scores/';\n\nasync function fetchLeaderboard() {\n  try {\n    const response = await fetch(apiUrl);\n    const data = await response.json();\n\n    if (response.ok) {\n      return data.result;\n    }\n    throw new Error('Failed to fetch leaderboard data');\n  } catch (error) {\n    throw new Error('Error:', error);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ fetchLeaderboard });\n\n\n//# sourceURL=webpack://Leader_Board/./src/module/leaderboard.js?");

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