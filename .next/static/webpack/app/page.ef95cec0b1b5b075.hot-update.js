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

/***/ "(app-pages-browser)/./src/app/Investment/page.js":
/*!************************************!*\
  !*** ./src/app/Investment/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Graph_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Graph/page */ \"(app-pages-browser)/./src/app/Graph/page.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Investment = ()=>{\n    _s();\n    const [Value, SetValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Amount: \"100000\",\n        Duration: \"5\",\n        Interest: \"6.5\",\n        option: \"Monthly\",\n        TwoOption: \"As Lumpsum\"\n    });\n    const principal = parseFloat(Value.Amount);\n    const duration = parseFloat(Value.Duration);\n    const interestRate = parseFloat(Value.Interest) / 100;\n    let periodsPerYear = 12; // Default to monthly compounding\n    if (Value.option === \"Quarterly\") {\n        periodsPerYear = 4;\n    } else if (Value.option === \"Half yearly\") {\n        periodsPerYear = 2;\n    } else if (Value.option === \"Yearly\") {\n        periodsPerYear = 1;\n    }\n    // Ensure the correct state updates here with yearlyDetails\n    const YearlyGroth = [];\n    for(let year = 1; year <= duration; year++){\n        const totalAmount = principal * Math.pow(1 + interestRate / periodsPerYear, periodsPerYear * year);\n        const EarnAsInterest = totalAmount - Value.Amount;\n        YearlyGroth.push({\n            year,\n            totalAmount: totalAmount.toFixed(),\n            EarnAsInterest: EarnAsInterest.toFixed()\n        });\n    }\n    const HandleInputChange = (e)=>{\n        const { name, value } = e.target;\n        SetValue((prevValue)=>({\n                ...prevValue,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"Container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"both\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"Investment-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"Amount\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"Invest\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \" Invetment Amount\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-color\",\n                                                children: [\n                                                    \"₹ \",\n                                                    Value.Amount\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"range\",\n                                        name: \"Amount\",\n                                        value: Value.Amount,\n                                        min: \"0\",\n                                        max: \"800000\",\n                                        onChange: HandleInputChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"Duration\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"Invest\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Investment Duration\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-color\",\n                                                children: [\n                                                    Value.Duration,\n                                                    \" year\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"range\",\n                                        name: \"Duration\",\n                                        value: Value.Duration,\n                                        min: \"1\",\n                                        max: \"10\",\n                                        onChange: HandleInputChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"Interest-Rate\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"Invest\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Interest Rate\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-color\",\n                                                children: [\n                                                    Value.Interest,\n                                                    \"%\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"range\",\n                                        name: \"Interest\",\n                                        value: Value.Interest,\n                                        min: \"1\",\n                                        max: \"20\",\n                                        onChange: HandleInputChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"Period\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Compounding Period\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"Option\",\n                                        name: \"option\",\n                                        value: Value.option,\n                                        onChange: HandleInputChange,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Monthly\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Quarterly\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Half yearly\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 115,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Yearly\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                                lineNumber: 116,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"Container-invested\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"Text\",\n                                children: [\n                                    \"After \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-color\",\n                                        children: Value.Duration\n                                    }, void 0, false, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    \" years, you will have\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-color\",\n                                id: \"Text\",\n                                children: [\n                                    \"₹ \",\n                                    YearlyGroth[YearlyGroth.length - 1].totalAmount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"Text\",\n                                children: [\n                                    \"that’s\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        id: \"EarnAsInterest\",\n                                        children: [\n                                            \" \",\n                                            \"₹ \",\n                                            YearlyGroth[YearlyGroth.length - 1].EarnAsInterest,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" earned as interest\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Graph_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                YearlyGroth: YearlyGroth\n                            }, void 0, false, {\n                                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Investment/page.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Investment, \"hg/gpXjIziKZQo1peIzGu2JnNlI=\");\n_c = Investment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Investment);\nvar _c;\n$RefreshReg$(_c, \"Investment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvSW52ZXN0bWVudC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBQ1E7QUFDWDtBQUdVO0FBRWpDLE1BQU1HLGFBQWE7O0lBRWpCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztRQUNqQ0ksUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxXQUFXO0lBQ2I7SUFFQSxNQUFNQyxZQUFZQyxXQUFXUixNQUFNRSxNQUFNO0lBQ3pDLE1BQU1PLFdBQVdELFdBQVdSLE1BQU1HLFFBQVE7SUFDMUMsTUFBTU8sZUFBZUYsV0FBV1IsTUFBTUksUUFBUSxJQUFJO0lBQ2xELElBQUlPLGlCQUFpQixJQUFJLGlDQUFpQztJQUMxRCxJQUFJWCxNQUFNSyxNQUFNLEtBQUssYUFBYTtRQUNoQ00saUJBQWlCO0lBQ25CLE9BQU8sSUFBSVgsTUFBTUssTUFBTSxLQUFLLGVBQWU7UUFDekNNLGlCQUFpQjtJQUNuQixPQUFPLElBQUlYLE1BQU1LLE1BQU0sS0FBSyxVQUFVO1FBQ3BDTSxpQkFBaUI7SUFDbkI7SUFDSSwyREFBMkQ7SUFDL0QsTUFBTUMsY0FBYyxFQUFFO0lBQ3RCLElBQUssSUFBSUMsT0FBTyxHQUFHQSxRQUFRSixVQUFVSSxPQUFRO1FBQzNDLE1BQU1DLGNBQ0pQLFlBQ0FRLEtBQUtDLEdBQUcsQ0FBQyxJQUFJTixlQUFlQyxnQkFBZ0JBLGlCQUFpQkU7UUFFL0QsTUFBTUksaUJBQWlCSCxjQUFjZCxNQUFNRSxNQUFNO1FBQ2pEVSxZQUFZTSxJQUFJLENBQUM7WUFDZkw7WUFDQUMsYUFBYUEsWUFBWUssT0FBTztZQUNoQ0YsZ0JBQWdCQSxlQUFlRSxPQUFPO1FBQ3hDO0lBQ0Y7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBRWhDdkIsU0FBUyxDQUFDd0IsWUFBZTtnQkFDdkIsR0FBR0EsU0FBUztnQkFDWixDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUdBLHFCQUNFO2tCQUNFLDRFQUFDRztZQUFJQyxXQUFVO3NCQUViLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNDOzBEQUFFOzs7Ozs7MERBQ0gsOERBQUNBO2dEQUFFRCxXQUFVOztvREFBYTtvREFBRzNCLE1BQU1FLE1BQU07Ozs7Ozs7Ozs7Ozs7a0RBRzNDLDhEQUFDMkI7d0NBQ0NDLE1BQUs7d0NBQ0xSLE1BQUs7d0NBQ0xDLE9BQU92QixNQUFNRSxNQUFNO3dDQUNuQjZCLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLFVBQVViOzs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNNO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDQzswREFBRTs7Ozs7OzBEQUNILDhEQUFDQTtnREFBRUQsV0FBVTs7b0RBQWMzQixNQUFNRyxRQUFRO29EQUFDOzs7Ozs7Ozs7Ozs7O2tEQUc1Qyw4REFBQzBCO3dDQUNDQyxNQUFLO3dDQUNMUixNQUFLO3dDQUNMQyxPQUFPdkIsTUFBTUcsUUFBUTt3Q0FDckI0QixLQUFJO3dDQUNKQyxLQUFJO3dDQUNKQyxVQUFVYjs7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDTTtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0M7MERBQUU7Ozs7OzswREFDSCw4REFBQ0E7Z0RBQUVELFdBQVU7O29EQUFjM0IsTUFBTUksUUFBUTtvREFBQzs7Ozs7Ozs7Ozs7OztrREFFNUMsOERBQUN5Qjt3Q0FDQ0MsTUFBSzt3Q0FDTFIsTUFBSzt3Q0FDTEMsT0FBT3ZCLE1BQU1JLFFBQVE7d0NBQ3JCMkIsS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSkMsVUFBVWI7Ozs7Ozs7Ozs7OzswQ0FHZCw4REFBQ007Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDQztrREFBRTs7Ozs7O2tEQUNILDhEQUFDTTt3Q0FDQ1AsV0FBVTt3Q0FDVkwsTUFBSzt3Q0FDTEMsT0FBT3ZCLE1BQU1LLE1BQU07d0NBQ25CNEIsVUFBVWI7OzBEQUVWLDhEQUFDZjswREFBTzs7Ozs7OzBEQUNSLDhEQUFDQTswREFBTzs7Ozs7OzBEQUNSLDhEQUFDQTswREFBTzs7Ozs7OzBEQUNSLDhEQUFDQTswREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtkLDhEQUFDcUI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBRU8sSUFBRzs7b0NBQU87a0RBQ0wsOERBQUNDO3dDQUFLVCxXQUFVO2tEQUFjM0IsTUFBTUcsUUFBUTs7Ozs7O29DQUFROzs7Ozs7OzBDQUc1RCw4REFBQ3lCO2dDQUFFRCxXQUFVO2dDQUFhUSxJQUFHOztvQ0FBTztvQ0FDL0J2QixXQUFXLENBQUNBLFlBQVl5QixNQUFNLEdBQUcsRUFBRSxDQUFDdkIsV0FBVzs7Ozs7OzswQ0FFcEQsOERBQUNzQjtnQ0FBS0QsSUFBRzs7b0NBQU87a0RBRWQsOERBQUNDO3dDQUFLRCxJQUFHOzs0Q0FDTjs0Q0FBSTs0Q0FDRnZCLFdBQVcsQ0FBQ0EsWUFBWXlCLE1BQU0sR0FBRyxFQUFFLENBQUNwQixjQUFjOzRDQUFFOzs7Ozs7O29DQUNsRDs7Ozs7OzswQ0FHVCw4REFBQ3BCLG1EQUFLQTtnQ0FBQ2UsYUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNoQztHQXpJTWI7S0FBQUE7QUEySU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9JbnZlc3RtZW50L3BhZ2UuanM/ODQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi4vR3JhcGgvcGFnZVwiO1xuaW1wb3J0ICcuLi9nbG9iYWxzLmNzcydcblxuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbnZlc3RtZW50ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtWYWx1ZSwgU2V0VmFsdWVdID0gdXNlU3RhdGUoe1xuICAgIEFtb3VudDogXCIxMDAwMDBcIixcbiAgICBEdXJhdGlvbjogXCI1XCIsXG4gICAgSW50ZXJlc3Q6IFwiNi41XCIsXG4gICAgb3B0aW9uOiBcIk1vbnRobHlcIixcbiAgICBUd29PcHRpb246IFwiQXMgTHVtcHN1bVwiLFxuICB9KTtcblxuICBjb25zdCBwcmluY2lwYWwgPSBwYXJzZUZsb2F0KFZhbHVlLkFtb3VudCk7XG4gIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VGbG9hdChWYWx1ZS5EdXJhdGlvbik7XG4gIGNvbnN0IGludGVyZXN0UmF0ZSA9IHBhcnNlRmxvYXQoVmFsdWUuSW50ZXJlc3QpIC8gMTAwO1xuICBsZXQgcGVyaW9kc1BlclllYXIgPSAxMjsgLy8gRGVmYXVsdCB0byBtb250aGx5IGNvbXBvdW5kaW5nXG4gIGlmIChWYWx1ZS5vcHRpb24gPT09IFwiUXVhcnRlcmx5XCIpIHtcbiAgICBwZXJpb2RzUGVyWWVhciA9IDQ7XG4gIH0gZWxzZSBpZiAoVmFsdWUub3B0aW9uID09PSBcIkhhbGYgeWVhcmx5XCIpIHtcbiAgICBwZXJpb2RzUGVyWWVhciA9IDI7XG4gIH0gZWxzZSBpZiAoVmFsdWUub3B0aW9uID09PSBcIlllYXJseVwiKSB7XG4gICAgcGVyaW9kc1BlclllYXIgPSAxO1xuICB9XG4gICAgICAvLyBFbnN1cmUgdGhlIGNvcnJlY3Qgc3RhdGUgdXBkYXRlcyBoZXJlIHdpdGggeWVhcmx5RGV0YWlsc1xuICBjb25zdCBZZWFybHlHcm90aCA9IFtdO1xuICBmb3IgKGxldCB5ZWFyID0gMTsgeWVhciA8PSBkdXJhdGlvbjsgeWVhcisrKSB7XG4gICAgY29uc3QgdG90YWxBbW91bnQgPVxuICAgICAgcHJpbmNpcGFsICpcbiAgICAgIE1hdGgucG93KDEgKyBpbnRlcmVzdFJhdGUgLyBwZXJpb2RzUGVyWWVhciwgcGVyaW9kc1BlclllYXIgKiB5ZWFyKTtcblxuICAgIGNvbnN0IEVhcm5Bc0ludGVyZXN0ID0gdG90YWxBbW91bnQgLSBWYWx1ZS5BbW91bnQ7XG4gICAgWWVhcmx5R3JvdGgucHVzaCh7XG4gICAgICB5ZWFyLFxuICAgICAgdG90YWxBbW91bnQ6IHRvdGFsQW1vdW50LnRvRml4ZWQoKSxcbiAgICAgIEVhcm5Bc0ludGVyZXN0OiBFYXJuQXNJbnRlcmVzdC50b0ZpeGVkKCksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBIYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICBTZXRWYWx1ZSgocHJldlZhbHVlKSA9PiAoe1xuICAgICAgLi4ucHJldlZhbHVlLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhaW5lclwiID5cbiAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3RoXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnZlc3RtZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBbW91bnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnZlc3RcIj5cbiAgICAgICAgICAgICAgICA8cD4gSW52ZXRtZW50IEFtb3VudDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNvbG9yXCI+4oK5IHtWYWx1ZS5BbW91bnR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJBbW91bnRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtWYWx1ZS5BbW91bnR9XG4gICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgbWF4PVwiODAwMDAwXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnZlc3RcIj5cbiAgICAgICAgICAgICAgICA8cD5JbnZlc3RtZW50IER1cmF0aW9uPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY29sb3JcIj57VmFsdWUuRHVyYXRpb259IHllYXI8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIkR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17VmFsdWUuRHVyYXRpb259XG4gICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnRlcmVzdC1SYXRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW52ZXN0XCI+XG4gICAgICAgICAgICAgICAgPHA+SW50ZXJlc3QgUmF0ZTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNvbG9yXCI+e1ZhbHVlLkludGVyZXN0fSU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJJbnRlcmVzdFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e1ZhbHVlLkludGVyZXN0fVxuICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgIG1heD1cIjIwXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUGVyaW9kXCI+XG4gICAgICAgICAgICAgIDxwPkNvbXBvdW5kaW5nIFBlcmlvZDwvcD5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIk9wdGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e1ZhbHVlLm9wdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPk1vbnRobHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlF1YXJ0ZXJseTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+SGFsZiB5ZWFybHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlllYXJseTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250YWluZXItaW52ZXN0ZWRcIj5cbiAgICAgICAgICAgIDxwIGlkPVwiVGV4dFwiPlxuICAgICAgICAgICAgICBBZnRlciA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbG9yXCI+e1ZhbHVlLkR1cmF0aW9ufTwvc3Bhbj4geWVhcnMsXG4gICAgICAgICAgICAgIHlvdSB3aWxsIGhhdmVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY29sb3JcIiBpZD1cIlRleHRcIj5cbiAgICAgICAgICAgICAg4oK5IHtZZWFybHlHcm90aFtZZWFybHlHcm90aC5sZW5ndGggLSAxXS50b3RhbEFtb3VudH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiVGV4dFwiPlxuICAgICAgICAgICAgICB0aGF04oCZc1xuICAgICAgICAgICAgICA8c3BhbiBpZD1cIkVhcm5Bc0ludGVyZXN0XCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIOKCuSB7WWVhcmx5R3JvdGhbWWVhcmx5R3JvdGgubGVuZ3RoIC0gMV0uRWFybkFzSW50ZXJlc3R9e1wiIFwifVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIOKAiWVhcm5lZCBhcyBpbnRlcmVzdFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPEdyYXBoIFllYXJseUdyb3RoPXtZZWFybHlHcm90aH0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW52ZXN0bWVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyYXBoIiwidXNlU3RhdGUiLCJJbnZlc3RtZW50IiwiVmFsdWUiLCJTZXRWYWx1ZSIsIkFtb3VudCIsIkR1cmF0aW9uIiwiSW50ZXJlc3QiLCJvcHRpb24iLCJUd29PcHRpb24iLCJwcmluY2lwYWwiLCJwYXJzZUZsb2F0IiwiZHVyYXRpb24iLCJpbnRlcmVzdFJhdGUiLCJwZXJpb2RzUGVyWWVhciIsIlllYXJseUdyb3RoIiwieWVhciIsInRvdGFsQW1vdW50IiwiTWF0aCIsInBvdyIsIkVhcm5Bc0ludGVyZXN0IiwicHVzaCIsInRvRml4ZWQiLCJIYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2VmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW5wdXQiLCJ0eXBlIiwibWluIiwibWF4Iiwib25DaGFuZ2UiLCJzZWxlY3QiLCJpZCIsInNwYW4iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Investment/page.js\n"));

/***/ })

});