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

/***/ "(app-pages-browser)/./src/app/Graph/page.js":
/*!*******************************!*\
  !*** ./src/app/Graph/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Graph_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graph.css */ \"(app-pages-browser)/./src/app/Graph/Graph.css\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nconst options = {\n    scales: {\n        x: {\n            title: {\n                display: true,\n                text: \"Year\"\n            }\n        }\n    }\n};\nconst Graph = (param)=>{\n    let { YearlyGroth } = param;\n    if (!YearlyGroth || YearlyGroth.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No data available\"\n        }, void 0, false, {\n            fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Graph/page.js\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, undefined);\n    }\n    const chartData = {\n        labels: YearlyGroth.map((yearData)=>\"Year \".concat(yearData.year)),\n        datasets: [\n            {\n                data: YearlyGroth.map((yearData)=>parseFloat(yearData.totalAmount)),\n                borderColor: \"green\",\n                borderColor: \"rgba(75, 192, 192, 1)\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"GRAPH\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            data: chartData,\n            options: options,\n            className: \"line\",\n            height: \"329px\",\n            width: \"352px\"\n        }, void 0, false, {\n            fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Graph/page.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/boss/Documents/GitHub/fdLatest-nextjs/src/app/Graph/page.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Graph;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\nvar _c;\n$RefreshReg$(_c, \"Graph\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR3JhcGgvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUwQjtBQUNMO0FBWUg7QUFFcUI7QUFFdkNFLDJDQUFPQSxDQUFDVSxRQUFRLENBQUNULG1EQUFhQSxFQUFFQyxpREFBV0EsRUFBRUMsZ0RBQVVBLEVBQUVDLGlEQUFXQSxFQUFFQyxrREFBWUEsRUFBRUMsMkNBQUtBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUE7QUFFMUcsTUFBTUcsVUFBVTtJQUNkQyxRQUFRO1FBQ05DLEdBQUc7WUFDREMsT0FBTztnQkFDTEMsU0FBUztnQkFDVEMsTUFBTTtZQUVSO1FBQ0Y7SUFHRjtBQUNGO0FBRUEsTUFBTUMsUUFBUTtRQUFDLEVBQUNDLFdBQVcsRUFBRTtJQUMzQixJQUFJLENBQUNBLGVBQWVBLFlBQVlDLE1BQU0sS0FBSyxHQUFHO1FBQzVDLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCQyxRQUFRSixZQUFZSyxHQUFHLENBQUMsQ0FBQ0MsV0FBYSxRQUFzQixPQUFkQSxTQUFTQyxJQUFJO1FBQzNEQyxVQUFVO1lBQ1I7Z0JBRUVDLE1BQU1ULFlBQWFLLEdBQUcsQ0FBQyxDQUFDQyxXQUFhSSxXQUFXSixTQUFTSyxXQUFXO2dCQUNwRUMsYUFBYTtnQkFDYkEsYUFBYTtZQUdmO1NBQ0Q7SUFDSDtJQUVBLHFCQUNFLDhEQUFDVjtRQUFJVyxXQUFVO2tCQUViLDRFQUFDdEIsaURBQUlBO1lBQUNrQixNQUFNTjtZQUFXVixTQUFTQTtZQUFVb0IsV0FBVTtZQUFPQyxRQUFPO1lBQVFDLE9BQU07Ozs7Ozs7Ozs7O0FBR3RGO0tBekJNaEI7QUEwQk4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9HcmFwaC9wYWdlLmpzPzZjZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9HcmFwaC5jc3MnO1xuXG5pbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgQmFyRWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIFBvaW50RWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSAnY2hhcnQuanMnO1xuXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuQ2hhcnRKUy5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgTGluZUVsZW1lbnQsIFBvaW50RWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCk7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHNjYWxlczoge1xuICAgIHg6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIHRleHQ6ICdZZWFyJyxcblxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcbiAgfVxufTtcblxuY29uc3QgR3JhcGggPSAoe1llYXJseUdyb3RoIH0pID0+IHtcbiAgaWYgKCFZZWFybHlHcm90aCB8fCBZZWFybHlHcm90aC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdj5ObyBkYXRhIGF2YWlsYWJsZTwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IGNoYXJ0RGF0YSA9IHtcbiAgICBsYWJlbHM6IFllYXJseUdyb3RoLm1hcCgoeWVhckRhdGEpID0+IGBZZWFyICR7eWVhckRhdGEueWVhcn1gKSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuXG4gICAgICAgIGRhdGE6IFllYXJseUdyb3RoIC5tYXAoKHllYXJEYXRhKSA9PiBwYXJzZUZsb2F0KHllYXJEYXRhLnRvdGFsQW1vdW50KSksXG4gICAgICAgIGJvcmRlckNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXG5cbiAgICBcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdHUkFQSCc+XG4gICAgIFxuICAgICAgPExpbmUgZGF0YT17Y2hhcnREYXRhfSBvcHRpb25zPXtvcHRpb25zfSAgY2xhc3NOYW1lPSdsaW5lJyBoZWlnaHQ9XCIzMjlweFwiIHdpZHRoPSczNTJweCcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBHcmFwaFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIkxpbmVFbGVtZW50IiwiUG9pbnRFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiTGluZSIsInJlZ2lzdGVyIiwib3B0aW9ucyIsInNjYWxlcyIsIngiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiR3JhcGgiLCJZZWFybHlHcm90aCIsImxlbmd0aCIsImRpdiIsImNoYXJ0RGF0YSIsImxhYmVscyIsIm1hcCIsInllYXJEYXRhIiwieWVhciIsImRhdGFzZXRzIiwiZGF0YSIsInBhcnNlRmxvYXQiLCJ0b3RhbEFtb3VudCIsImJvcmRlckNvbG9yIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Graph/page.js\n"));

/***/ })

});