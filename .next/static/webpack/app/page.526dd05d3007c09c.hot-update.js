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

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"00f2119e10a0\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NGQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjAwZjIxMTllMTBhMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Investment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Investment/page */ \"(app-pages-browser)/./src/app/Investment/page.js\");\n/* harmony import */ var _Target_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Target/page */ \"(app-pages-browser)/./src/app/Target/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst app = ()=>{\n    _s();\n    const [ShowInvest, setShowInvest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [ShowTarget, setShowTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const TargetHandler = ()=>{\n        setShowTarget(!ShowTarget);\n        setShowInvest(!ShowInvest);\n    };\n    const INVESTMENT = ()=>{\n        setShowInvest(!ShowInvest);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"app\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button_container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button_slide \",\n                                    onClick: TargetHandler,\n                                    children: \"Target\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 12\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button_slide \",\n                                    onClick: INVESTMENT,\n                                    children: \"Invetment\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 12\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                                lineNumber: 39,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: ShowInvest ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Investment_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                            lineNumber: 46,\n                            columnNumber: 18\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Target_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                            lineNumber: 47,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n                lineNumber: 35,\n                columnNumber: 3\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/page.js\",\n            lineNumber: 34,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false);\n};\n_s(app, \"0kBeZClIXPggJmMFEf23v1Lr6Ys=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDSjtBQUdxQjtBQUNSO0FBSUY7QUFFakMsTUFBTUksTUFBTTs7SUFFVixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBUTdDLE1BQU1NLGdCQUFnQjtRQUNwQkQsY0FBYyxDQUFDRDtRQUNmRCxjQUFjLENBQUNEO0lBQ2pCO0lBRUEsTUFBTUssYUFBWTtRQUNoQkosY0FBYyxDQUFDRDtJQUNqQjtJQUVBLHFCQUFPO2tCQUNQLDRFQUFDTTtZQUFJQyxXQUFVO3NCQUNmLDRFQUFDRDs7a0NBQ0MsOERBQUNBO3dCQUFJQyxXQUFVOzswQ0FFZCw4REFBQ0Q7MENBQUssNEVBQUNFO29DQUFPRCxXQUFVO29DQUFnQkUsU0FBU0w7OENBQWdCOzs7Ozs7Ozs7OzswQ0FDakUsOERBQUNFOzBDQUFLLDRFQUFDRTtvQ0FBT0QsV0FBVTtvQ0FBZ0JFLFNBQVNKOzhDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLL0QsOERBQUNDO2tDQUVETiwyQkFBYSw4REFBQ0osd0RBQVVBOzs7O3NEQUN2Qiw4REFBQ0Msb0RBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU1o7R0EzQ01FO0FBNkNOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4vZ2xvYmFscy5jc3MnXG5cblxuaW1wb3J0IEludmVzdG1lbnQgZnJvbSBcIi4vSW52ZXN0bWVudC9wYWdlXCI7XG5pbXBvcnQgVGFyZ2V0IGZyb20gXCIuL1RhcmdldC9wYWdlXCI7XG5cblxuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBhcHAgPSAoKSA9PiB7XG5cbiAgY29uc3QgW1Nob3dJbnZlc3QsIHNldFNob3dJbnZlc3RdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtTaG93VGFyZ2V0LCBzZXRTaG93VGFyZ2V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG5cblxuXG5cblxuICBjb25zdCBUYXJnZXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFNob3dUYXJnZXQoIVNob3dUYXJnZXQpO1xuICAgIHNldFNob3dJbnZlc3QoIVNob3dJbnZlc3QpO1xuICB9O1xuXG4gIGNvbnN0IElOVkVTVE1FTlQ9ICgpID0+IHtcbiAgICBzZXRTaG93SW52ZXN0KCFTaG93SW52ZXN0KTtcbiAgfTtcblxuICByZXR1cm4gPD5cbiAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj4gXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fY29udGFpbmVyXCI+XG4gICAgIFxuICAgICA8ZGl2ID48YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbl9zbGlkZSBcIiBvbkNsaWNrPXtUYXJnZXRIYW5kbGVyfSA+VGFyZ2V0PC9idXR0b24+PC9kaXY+XG4gICAgIDxkaXYgPjxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uX3NsaWRlIFwiIG9uQ2xpY2s9e0lOVkVTVE1FTlR9ID5JbnZldG1lbnQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgIFxuICBcbiAgIFxuICAgIDxkaXY+XG4gXG4gICB7U2hvd0ludmVzdD8gKDxJbnZlc3RtZW50Lz4pOlxuICAgICg8VGFyZ2V0Lz4pfVxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICBcbiAgPC9kaXY+XG4gIDwvPlxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkludmVzdG1lbnQiLCJUYXJnZXQiLCJ1c2VTdGF0ZSIsImFwcCIsIlNob3dJbnZlc3QiLCJzZXRTaG93SW52ZXN0IiwiU2hvd1RhcmdldCIsInNldFNob3dUYXJnZXQiLCJUYXJnZXRIYW5kbGVyIiwiSU5WRVNUTUVOVCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});