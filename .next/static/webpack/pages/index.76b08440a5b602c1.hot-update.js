"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    function handleChangeInput(e) {\n        const userInput = e.target.value;\n        const regex = /^(?:https?:\\/\\/)?(?:www\\.)?(?:youtube\\.com\\/watch\\?v=|youtu\\.be\\/)([\\w-]+)/i;\n        const match = userInput.match(regex);\n        if (match) {\n            const videoId = match[1];\n            setInputValue(videoId);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"One and done\"\n                    }, void 0, false, {\n                        fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Watch youtube without distraction\"\n                    }, void 0, false, {\n                        fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pl-8 pt-16 xl:pl-24 xl:pt-24 flex flex-col justify-center gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-3xl xl:text-6xl text-left font-light\",\n                                    children: \"Escape\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-3xl xl:text-6xl text-lef font-light\",\n                                    children: \"the rabbit hole. \"\n                                }, void 0, false, {\n                                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-3xl xl:text-6xl text-lef font-black\",\n                                    children: \"be focused\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-around gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/assets/capture.png\",\n                                    alt: \"instruction to where to put the youtube link to watch it on the app\",\n                                    className: \"w-10/12\",\n                                    width: 380,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"mt-1 block py-2 px-3 border border-orange-400 bg-white rounded-full shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 w-10/12 font-light text-1xl xl:text-2xl h-16\",\n                                    placeholder: \"past your Youtube video link here: https://www.youtube.com/watch?v=D55ctBYF3AY\",\n                                    value: inputValue,\n                                    onChange: handleChangeInput\n                                }, void 0, false, {\n                                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, this),\n                                !inputValue ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: {\n                                        pathname: \"/video\",\n                                        query: {\n                                            id: inputValue\n                                        }\n                                    },\n                                    children: [\n                                        \"  \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl py-2 px-4 rounded-full h-16 w-10/12 xl:w-4/12\",\n                                            children: \"Play video\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 105\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 41\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"columns-2 w-4/5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-1xl xl:text-1xl text-lef font-light\",\n                                    children: \"Sometimes a friend or a coworker sends you a YouTube video to watch, while working. And you tell yourself, I'm going to watch it and comeback to work. But before you know it, you find yourself have spent more than 30 minutes on YouTube (The average mobile YouTube session is now 40 minutes).\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-1xl xl:text-1xl text-lef font-light\",\n                                    children: \" So  If you have  to watch that video, then watch it here, and go about your work. This could  apply to watching a YouTube tutorial to get some quick  information and then immediatly leave, once the video is completed.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/bra-workstation/projects/One_and_done_Nextjs/src/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"SORcW8kVWUa8fZ+un8oXhp/OLnk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ0k7QUFDRjtBQUNEO0FBR2QsU0FBU0ksT0FBTzs7SUFFN0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFTO0lBRXJELFNBQVNNLGtCQUFrQkMsQ0FBc0MsRUFBRTtRQUNqRSxNQUFNQyxZQUFZRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDaEMsTUFBTUMsUUFBUTtRQUNkLE1BQU1DLFFBQVFKLFVBQVVJLEtBQUssQ0FBQ0Q7UUFFOUIsSUFBSUMsT0FBTztZQUNQLE1BQU1DLFVBQVVELEtBQUssQ0FBQyxFQUFFO1lBQ3hCUCxjQUFjUTtRQUNsQixDQUFDO0lBQ0w7SUFDRSxxQkFDRTs7MEJBQ0UsOERBQUNkLGtEQUFJQTs7a0NBQ0gsOERBQUNlO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOzBCQUNELDRFQUFDQztvQkFBSUMsV0FBVTs7c0NBQ0wsOERBQUNEOzs4Q0FDRyw4REFBQ0U7b0NBQUdELFdBQVU7OENBQTRDOzs7Ozs7OENBQzFELDhEQUFDQztvQ0FBR0QsV0FBVTs4Q0FBNEM7Ozs7Ozs4Q0FDMUQsOERBQUNDO29DQUFHRCxXQUFVOzhDQUE0Qzs7Ozs7Ozs7Ozs7O3NDQUU5RCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNmLDhEQUFDdEIsbURBQUtBO29DQUNOd0IsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSkgsV0FBVTtvQ0FDVkksT0FBTztvQ0FDUEMsUUFBUTs7Ozs7OzhDQUNKLDhEQUFDQztvQ0FBTU4sV0FBVTtvQ0FDYk8sYUFBWTtvQ0FBaUZwQixPQUFPTjtvQ0FBWTJCLFVBQVV6Qjs7Ozs7O2dDQUM3SCxDQUFDRixhQUFhLG1CQUFLLDhEQUFDRixrREFBSUE7b0NBQUNrQixNQUFNO3dDQUFFWSxVQUFXO3dDQUFTQyxPQUFPOzRDQUFFQyxJQUFJOUI7d0NBQVc7b0NBQUM7O3dDQUFHO3NEQUFFLDhEQUFDK0I7NENBQU9aLFdBQVU7c0RBQWlIOzs7Ozs7Ozs7Ozt3Q0FDaE47Ozs7Ozs7c0NBRVgsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2E7b0NBQUViLFdBQVU7OENBQTJDOzs7Ozs7OENBSXhELDhEQUFDYTtvQ0FBRWIsV0FBVTs4Q0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUUsQ0FBQztHQXJEdUJwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUlucHV0KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgcmVnZXggPSAvXig/Omh0dHBzPzpcXC9cXC8pPyg/Ond3d1xcLik/KD86eW91dHViZVxcLmNvbVxcL3dhdGNoXFw/dj18eW91dHVcXC5iZVxcLykoW1xcdy1dKykvaTtcbiAgICBjb25zdCBtYXRjaCA9IHVzZXJJbnB1dC5tYXRjaChyZWdleCk7XG4gICAgXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSBtYXRjaFsxXTtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSh2aWRlb0lkKTtcbiAgICB9XG59XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T25lIGFuZCBkb25lPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldhdGNoIHlvdXR1YmUgd2l0aG91dCBkaXN0cmFjdGlvblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uc3ZnXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC04IHB0LTE2IHhsOnBsLTI0IHhsOnB0LTI0IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgeGw6dGV4dC02eGwgdGV4dC1sZWZ0IGZvbnQtbGlnaHRcIj5Fc2NhcGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgeGw6dGV4dC02eGwgdGV4dC1sZWYgZm9udC1saWdodFwiID50aGUgcmFiYml0IGhvbGUuIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB4bDp0ZXh0LTZ4bCB0ZXh0LWxlZiBmb250LWJsYWNrXCIgPmJlIGZvY3VzZWQ8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvY2FwdHVyZS5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImluc3RydWN0aW9uIHRvIHdoZXJlIHRvIHB1dCB0aGUgeW91dHViZSBsaW5rIHRvIHdhdGNoIGl0IG9uIHRoZSBhcHBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAvMTJcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXszODB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH0gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibXQtMSBibG9jayBweS0yIHB4LTMgYm9yZGVyIGJvcmRlci1vcmFuZ2UtNDAwIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctb3JhbmdlLTYwMCBmb2N1czpib3JkZXItb3JhbmdlLTYwMCB3LTEwLzEyIGZvbnQtbGlnaHQgdGV4dC0xeGwgeGw6dGV4dC0yeGwgaC0xNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3QgeW91ciBZb3V0dWJlIHZpZGVvIGxpbmsgaGVyZTogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1ENTVjdEJZRjNBWVwiIHZhbHVlPXtpbnB1dFZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgIHshaW5wdXRWYWx1ZSA/IFwiXCIgOiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL3ZpZGVvYCwgcXVlcnk6IHsgaWQ6IGlucHV0VmFsdWUgfX19PiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIGhvdmVyOmJnLW9yYW5nZS02MDAgdGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQtMnhsIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgaC0xNiB3LTEwLzEyIHhsOnctNC8xMlwiPlBsYXkgdmlkZW88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMiB3LTQvNVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTF4bCB4bDp0ZXh0LTF4bCB0ZXh0LWxlZiBmb250LWxpZ2h0XCI+U29tZXRpbWVzIGEgZnJpZW5kIG9yIGEgY293b3JrZXIgc2VuZHMgeW91IGEgWW91VHViZSB2aWRlbyB0byB3YXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIHdvcmtpbmcuIEFuZCB5b3UgdGVsbCB5b3Vyc2VsZiwgSSdtIGdvaW5nIHRvIHdhdGNoIGl0IGFuZCBjb21lYmFjayB0byB3b3JrLiBCdXQgYmVmb3JlIHlvdSBrbm93IGl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeW91IGZpbmQgeW91cnNlbGYgaGF2ZSBzcGVudCBtb3JlIHRoYW4gMzAgbWludXRlcyBvbiBZb3VUdWJlIChUaGUgYXZlcmFnZSBtb2JpbGUgWW91VHViZSBzZXNzaW9uIGlzIG5vdyA0MCBtaW51dGVzKS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTF4bCB4bDp0ZXh0LTF4bCB0ZXh0LWxlZiBmb250LWxpZ2h0XCI+IFNvICBJZiB5b3UgaGF2ZSAgdG8gd2F0Y2ggdGhhdCB2aWRlbywgdGhlbiB3YXRjaCBpdCBoZXJlLCBhbmQgZ28gYWJvdXQgeW91ciB3b3JrLiBUaGlzIGNvdWxkICBhcHBseSB0byB3YXRjaGluZyBhIFlvdVR1YmVcbiAgICAgICAgICAgICAgICAgICAgIHR1dG9yaWFsIHRvIGdldCBzb21lIHF1aWNrICBpbmZvcm1hdGlvbiBhbmQgdGhlbiBpbW1lZGlhdGx5IGxlYXZlLCBvbmNlIHRoZSB2aWRlbyBpcyBjb21wbGV0ZWQuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImUiLCJ1c2VySW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlZ2V4IiwibWF0Y2giLCJ2aWRlb0lkIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});