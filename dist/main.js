/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7UyWMdCgHZ87wkTWCz0G/scores/';\n\nasync function fetchLeaderboard() {\n  try {\n    const response = await fetch(apiUrl);\n    const data = await response.json();\n\n    if (response.ok) {\n      const scoreList = document.getElementById('score-list');\n      scoreList.innerHTML = '';\n\n      data.result.forEach((score, index) => {\n        const listItem = document.createElement('li');\n        listItem.innerHTML = `${index + 1}. ${score.user} - ${score.score}`;\n        scoreList.appendChild(listItem);\n      });\n    } else {\n      Error('Failed to fetch leaderboard data');\n    }\n  } catch (error) {\n    Error('Error:', error);\n  }\n}\n\nasync function handleSubmit(event) {\n  event.preventDefault();\n\n  const playerName = document.getElementById('player-name').value;\n  const playerScore = parseInt(document.getElementById('player-score').value, 10);\n\n  if (playerName && !Number.isNaN(playerScore)) {\n    try {\n      const response = await fetch(apiUrl, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({ user: playerName, score: playerScore }),\n      });\n\n      if (response.ok) {\n        document.getElementById('player-name').value = '';\n        document.getElementById('player-score').value = '';\n\n        fetchLeaderboard();\n      } else {\n        Error('Failed to submit the score');\n      }\n    } catch (error) {\n      Error('Error:', error);\n    }\n  }\n}\n\ndocument.querySelector('.refresh-button').addEventListener('click', fetchLeaderboard);\ndocument.getElementById('score-form').addEventListener('submit', handleSubmit);\n\nfetchLeaderboard();\n\n\n//# sourceURL=webpack://Leader_Board/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;