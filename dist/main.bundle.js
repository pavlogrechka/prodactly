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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./src/js/Article.js\");\n\r\n\r\nconst data = [\r\n  {\r\n    id: '1',\r\n    title: 'Increasing Prosperity With Positive Thinking',\r\n    urlToImage: './src/img/strategies/strategy.jpg',\r\n    tags: ['Design', 'Culture'],\r\n    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',\r\n    date: '11.11.2021',\r\n  },\r\n  {\r\n    id: '2',\r\n    title: 'Increasing Prosperity With Positive Thinking',\r\n    urlToImage: './src/img/strategies/strategy.jpg',\r\n    tags: ['Art'],\r\n    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',\r\n    date: '11.11.2021',\r\n  },\r\n  {\r\n    id: '3',\r\n    title: 'Increasing Prosperity With Positive Thinking',\r\n    urlToImage: './src/img/strategies/strategy3.jpg',\r\n    tags: ['Art', 'Design', 'Culture'],\r\n    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',\r\n    date: '11.11.2021',\r\n  },\r\n  {\r\n    id: '4',\r\n    title: 'Increasing Prosperity With Positive Thinking',\r\n    urlToImage: './src/img/strategies/strategy2.jpg',\r\n    tags: ['Art', 'Design'],\r\n    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti beatae nesciunt repellendus commodi laudantium quibusdam voluptatum. Totam omnis dolorem numquam.',\r\n    date: '11.11.2021',\r\n  },\r\n]\r\n\r\nwindow.onload = function () {\r\n  console.log('hello from src/js/index.js')\r\n\r\n  //Render Articles\r\n\r\n  if (data) {\r\n    renderArticlesToDom();\r\n  }\r\n\r\n  //Tags\r\n  addTagsClickHandler();\r\n}\r\n\r\nconst addTagsClickHandler = () => {\r\n  document.querySelector('.strategies__tags').addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('tag')) {\r\n      let clickedTag = e.target;\r\n      removeSelectedTags();\r\n      selectClickedTag(clickedTag);\r\n      if (clickedTag.innerText === 'All') {\r\n        showAllStrategies();\r\n      } else {\r\n        filterStrategyBySelectedTag(clickedTag.innerText);\r\n      }\r\n    }\r\n  })\r\n}\r\n\r\nconst removeSelectedTags = () => {\r\n  let tags = document.querySelectorAll('.strategies__tags .tag');\r\n  tags.forEach(tag => {\r\n    tag.classList.remove('tag--selected');\r\n    tag.classList.add('tag--bordered');\r\n  })\r\n}\r\n\r\nconst selectClickedTag = (clickedTag) => {\r\n  clickedTag.classList.add('tag--selected')\r\n  clickedTag.classList.remove('tag--bordered')\r\n}\r\n\r\nconst showAllStrategies = () => {\r\n  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\r\n  strategies.forEach(strategy => {\r\n    strategy.classList.remove('strategy--hidden');\r\n  })\r\n}\r\n\r\nconst filterStrategyBySelectedTag = (selectedTag) => {\r\n  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\r\n  strategies.forEach(strategy => {\r\n    strategy.classList.add('strategy--hidden');\r\n    strategy.querySelectorAll('.tag').forEach(tag => {\r\n      if (tag.innerText === selectedTag) {\r\n        strategy.classList.remove('strategy--hidden');\r\n      }\r\n    })\r\n  })\r\n}\r\n\r\nconst renderArticlesToDom = () => {\r\n  let strategiesWrapper = getStrategiesWrapper();\r\n  generateArticles(data).forEach(article => {\r\n    strategiesWrapper.append(article.generateArticle())\r\n  });\r\n}\r\n\r\nconst getStrategiesWrapper = () => {\r\n  const strategiesContainer = document.querySelector('.strategy-wrapper');\r\n  strategiesContainer.innerHTML = '';\r\n  return strategiesContainer;\r\n}\r\n\r\nconst generateArticles = (data) => {\r\n  let articles = [];\r\n  data.forEach(article => {\r\n    articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(article))\r\n  });\r\n  console.log(articles)\r\n  return articles;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://prodactly/./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nclass Article {\r\n  constructor({ id, title, urlToImage, tags, ...rest }) {\r\n    this.id = id;\r\n    this.title = title;\r\n    this.urlToImage = urlToImage;\r\n    this.tags = tags;\r\n  }\r\n\r\n  //Article generator\r\n  generateArticle() {\r\n    let template = '';\r\n    let article = document.createElement('article');\r\n    article.className = 'strategy block-shadowed';\r\n    article.setAttribute('data-id', this.id)\r\n\r\n    this.urlToImage &&\r\n      (template += `<img class = \"strategy__image\" src=${this.urlToImage} alt=\"strategy\">`)\r\n\r\n    if (this.title || this.tags) {\r\n      template += `<div class=\"strategy__content\">`;\r\n\r\n      this.title &&\r\n        (template += `<h3 class= \"strategy__title\">${this.title}</h3>`)\r\n\r\n      if (this.tags) {\r\n        template += `<div class=\"strategy__tags tags\">`;\r\n\r\n        this.tags.map(tag => {\r\n          template += `<div class=\"tag\">${tag}</div>`;\r\n        })\r\n\r\n        template += `</div>`;\r\n      }\r\n\r\n      template += `</div>`;\r\n    }\r\n\r\n    article.innerHTML = template;\r\n    return article;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://prodactly/./src/js/Article.js?");

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