"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Investment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Investment/page */ \"(app-pages-browser)/./src/app/Investment/page.js\");\n/* harmony import */ var _Target_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Target/page */ \"(app-pages-browser)/./src/app/Target/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst app = ()=>{\n    _s();\n    const [showInvest, setShowInvest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showTarget, setShowTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showTargetTab = ()=>{\n        setShowTarget(true);\n        setShowInvest(false);\n    };\n    const showInvestmentTab = ()=>{\n        setShowInvest(true);\n        setShowTarget(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"Container bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"mb-6 text-lg font-semibold font-sans text-gray-700 leading-5\",\n                            children: \"Calculate FD Returns\"\n                        }, void 0, false, {\n                            fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                            lineNumber: 31,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button_container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button_slide \",\n                                    onClick: showInvestmentTab,\n                                    children: \"Invetment\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 12\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button_slide \",\n                                    onClick: showTargetTab,\n                                    children: \"Target\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 12\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                lineNumber: 39,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"both\",\n                        children: [\n                            showTarget && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Target_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                lineNumber: 45,\n                                columnNumber: 20\n                            }, undefined),\n                            showInvest && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Investment_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                lineNumber: 46,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                lineNumber: 29,\n                columnNumber: 3\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n            lineNumber: 28,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false);\n};\n_s(app, \"jrV5jm4WsVUIP9Z3lHgDI5jjd0A=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDSjtBQUdxQjtBQUNSO0FBSUY7QUFFakMsTUFBTUksTUFBTTs7SUFDVixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1NLGdCQUFnQjtRQUNwQkQsY0FBYztRQUNkRixjQUFjO0lBQ2hCO0lBRUEsTUFBTUksb0JBQW9CO1FBQ3hCSixjQUFjO1FBQ2RFLGNBQWM7SUFDaEI7SUFFQSxxQkFBTztrQkFDUCw0RUFBQ0c7c0JBQ0QsNEVBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7a0NBQ0MsNEVBQUNFOzRCQUFHRCxXQUFVO3NDQUErRDs7Ozs7Ozs7Ozs7a0NBSy9FLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBRWQsOERBQUNEOzBDQUFLLDRFQUFDRztvQ0FBT0YsV0FBVTtvQ0FBZ0JHLFNBQVNMOzhDQUFvQjs7Ozs7Ozs7Ozs7MENBQ3JFLDhEQUFDQzswQ0FBSyw0RUFBQ0c7b0NBQU9GLFdBQVU7b0NBQWdCRyxTQUFTTjs4Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt0RSw4REFBQ0U7d0JBQUlDLFdBQVU7OzRCQUNWTCw0QkFBYyw4REFBQ0wsb0RBQU1BOzs7Ozs0QkFDbkJHLDRCQUFjLDhEQUFDSix3REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2hDO0dBNUNNRztBQThDTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJ1xuXG5cbmltcG9ydCBJbnZlc3RtZW50IGZyb20gXCIuL0ludmVzdG1lbnQvcGFnZVwiO1xuaW1wb3J0IFRhcmdldCBmcm9tIFwiLi9UYXJnZXQvcGFnZVwiO1xuXG5cblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgYXBwID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd0ludmVzdCwgc2V0U2hvd0ludmVzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dUYXJnZXQsIHNldFNob3dUYXJnZXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNob3dUYXJnZXRUYWIgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1RhcmdldCh0cnVlKTtcbiAgICBzZXRTaG93SW52ZXN0KGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBzaG93SW52ZXN0bWVudFRhYiA9ICgpID0+IHtcbiAgICBzZXRTaG93SW52ZXN0KHRydWUpO1xuICAgIHNldFNob3dUYXJnZXQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiA8PlxuICA8ZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhaW5lciBiZy13aGl0ZVwiID5cbiAgICA8ZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1sZyBmb250LXNlbWlib2xkIGZvbnQtc2FucyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctNVwiPkNhbGN1bGF0ZSBGRCBSZXR1cm5zPC9oMj5cbiAgICA8L2Rpdj5cblxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9jb250YWluZXJcIj5cbiAgICAgXG4gICAgIDxkaXYgPjxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uX3NsaWRlIFwiIG9uQ2xpY2s9e3Nob3dJbnZlc3RtZW50VGFifSA+SW52ZXRtZW50PC9idXR0b24+PC9kaXY+XG4gICAgIDxkaXYgPjxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uX3NsaWRlIFwiIG9uQ2xpY2s9e3Nob3dUYXJnZXRUYWJ9ID5UYXJnZXQ8L2J1dHRvbj48L2Rpdj5cbiAgIFxuICAgIDwvZGl2ID5cblxuIFxuPGRpdiBjbGFzc05hbWU9XCJib3RoXCI+XG4gICAge3Nob3dUYXJnZXQgJiYgPFRhcmdldCAvPn1cbiAgICAgIHtzaG93SW52ZXN0ICYmIDxJbnZlc3RtZW50IC8+fVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gIFxuXG5cbiAgPC8+XG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW52ZXN0bWVudCIsIlRhcmdldCIsInVzZVN0YXRlIiwiYXBwIiwic2hvd0ludmVzdCIsInNldFNob3dJbnZlc3QiLCJzaG93VGFyZ2V0Iiwic2V0U2hvd1RhcmdldCIsInNob3dUYXJnZXRUYWIiLCJzaG93SW52ZXN0bWVudFRhYiIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});