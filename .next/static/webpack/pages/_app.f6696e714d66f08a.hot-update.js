"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AppWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"jsx-2097bfc397a82dfe\",\n        __source: {\n            fileName: \"/Users/elvolution/Projects/Evmos-Alliance/pages/_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                color: \"#29D\",\n                startPosition: 0.3,\n                stopDelayMs: 200,\n                height: 3,\n                showOnShallow: true,\n                __source: {\n                    fileName: \"/Users/elvolution/Projects/Evmos-Alliance/pages/_app.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n            }, pageProps, {\n                className: \"jsx-2097bfc397a82dfe\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\"),\n                __source: {\n                    fileName: \"/Users/elvolution/Projects/Evmos-Alliance/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this\n            })),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2097bfc397a82dfe\",\n                __self: this,\n                children: \"@import url('https://fonts.googleapis.com/css2?family=Combo:ital,wght@0,400;0,700;1,400;1,700&display=swap');\\n:root {--gap:16pt;\\n--page-background-color:#000910;\\n--alt-background-color:grey;\\n--text-main-color:#fff;\\n--text-secondary-color:grey;\\n--z-index-modal:1000;\\n--z-index-header:100;\\n--accents-1:#f9fafc;\\n--accents-2:#eaeaea;\\n--accents-3:#999;\\n--accents-4:#888;\\n--accents-5:#666;\\n--accents-6:#444;\\n--accents-7:#333;\\n--accents-8:#111}\\nhtml, body {padding:0;\\nmargin:0;\\nscroll-behavior:smooth}\\n::-webkit-scrollbar {display:none}\\n::selection {color:#000;\\nbackground:#FFF}\\na {color:inherit;\\n-webkit-text-decoration:none;\\ntext-decoration:none}\\np a {text-decoration:underline}\\n* {box-sizing:border-box;\\n-webkit-font-smoothing:antialiased;\\n-moz-osx-font-smoothing:grayscale;\\nmargin:0;\\npadding:0}\\nbody {padding:0;\\nmargin:0;\\nmargin:0;\\npadding:0;\\nfont-size:15px;\\nfont-weight:400;\\nline-height:1.8;\\ncolor:var(--text-main-color);\\nbackground:var(--page-background-color);\\nfont-family:'Combo', cursive}\\n.appear {-webkit-animation:appear 0.35s ease-out forwards;\\nanimation:appear 0.35s ease-out forwards;\\n-webkit-transform:translateY(25%);\\n-moz-transform:translateY(25%);\\n-ms-transform:translateY(25%);\\ntransform:translateY(25%);\\nopacity:0}\\n.appear.d025 {animation-delay:0.25s}\\n.appear.d05 {animation-delay:0.5s}\\n.appear.d075 {animation-delay:0.75s}\\n.appear.d1 {animation-delay:1s}\\n.appear.d125 {animation-delay:1.25s}\\n.appear.d150 {animation-delay:1.5s}\\n@keyframes appear {to {opacity:1;\\n-webkit-transform:translateY(0);\\n-moz-transform:translateY(0);\\n-ms-transform:translateY(0);\\ntransform:translateY(0)}}\\n@media only screen and (max-width:600px) {body {font-size:13px}}\\nh1 {font-weight:700}\\np {margin-bottom:10px}\\n* {box-sizing:border-box}\\ninput {padding:15px;\\nborder:none}\\nimg {max-width:100%}\"\n            })\n        ]\n    }));\n}\n_c = App;\nfunction AppWrapper(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(App, _objectSpread({\n    }, props, {\n        __source: {\n            fileName: \"/Users/elvolution/Projects/Evmos-Alliance/pages/_app.tsx\",\n            lineNumber: 149,\n            columnNumber: 10\n        },\n        __self: this\n    })));\n};\n_c1 = AppWrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"AppWrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFckNDLEdBQUcsQ0FBQyxLQUFrQyxFQUFFLENBQUM7UUFBbkNDLFNBQVMsR0FBWCxLQUFrQyxDQUFoQ0EsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQWtDLENBQXJCQSxTQUFTO0lBQ2pDLE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7OztpRkFDREosMkRBQWE7Z0JBQ1pLLEtBQUssRUFBQyxDQUFNO2dCQUNaQyxhQUFhLEVBQUUsR0FBRztnQkFDbEJDLFdBQVcsRUFBRSxHQUFHO2dCQUNoQkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1RDLGFBQWEsRUFBRSxJQUFJOzs7Ozs7OztpRkFFcEJQLFNBQVM7ZUFBS0MsU0FBUzsyREFBVEEsU0FBUyxJQUFUQSxTQUFTLHNCQUFUQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUFxSTlCLENBQUM7S0EvSVFGLEdBQUc7QUFnSkcsUUFBUSxDQUFDUyxVQUFVLENBQUNDLEtBQVUsRUFBRSxDQUFDO0lBQzlDLE1BQU0sc0VBQUVWLEdBQUc7T0FBS1UsS0FBSzs7Ozs7Ozs7QUFDdkIsQ0FBQztNQUZ1QkQsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBOZXh0TnByb2dyZXNzIGZyb20gXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIjtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5leHROcHJvZ3Jlc3NcbiAgICAgICAgY29sb3I9XCIjMjlEXCJcbiAgICAgICAgc3RhcnRQb3NpdGlvbj17MC4zfVxuICAgICAgICBzdG9wRGVsYXlNcz17MjAwfVxuICAgICAgICBoZWlnaHQ9ezN9XG4gICAgICAgIHNob3dPblNoYWxsb3c9e3RydWV9XG4gICAgICAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tYm86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgLS1nYXA6IDE2cHQ7XG4gICAgICAgICAgLS1wYWdlLWJhY2tncm91bmQtY29sb3I6ICMwMDA5MTA7XG4gICAgICAgICAgLS1hbHQtYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgICAtLXRleHQtbWFpbi1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAtLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiBncmV5O1xuXG4gICAgICAgICAgLS16LWluZGV4LW1vZGFsOiAxMDAwO1xuICAgICAgICAgIC0tei1pbmRleC1oZWFkZXI6IDEwMDtcbiAgICAgICAgICAtLWFjY2VudHMtMTogI2Y5ZmFmYztcbiAgICAgICAgICAtLWFjY2VudHMtMjogI2VhZWFlYTtcbiAgICAgICAgICAtLWFjY2VudHMtMzogIzk5OTtcbiAgICAgICAgICAtLWFjY2VudHMtNDogIzg4ODtcbiAgICAgICAgICAtLWFjY2VudHMtNTogIzY2NjtcbiAgICAgICAgICAtLWFjY2VudHMtNjogIzQ0NDtcbiAgICAgICAgICAtLWFjY2VudHMtNzogIzMzMztcbiAgICAgICAgICAtLWFjY2VudHMtODogIzExMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgcCBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbWFpbi1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvbWJvJywgY3Vyc2l2ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmFwcGVhcntcbiAgICAgICAgICBhbmltYXRpb246IGFwcGVhciAwLjM1cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuYXBwZWFyLmQwMjV7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcbiAgICAgICAgfVxuICAgICAgICAuYXBwZWFyLmQwNXtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gICAgICAgIH1cbiAgICAgICAgLmFwcGVhci5kMDc1e1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC43NXM7XG4gICAgICAgIH1cbiAgICAgICAgLmFwcGVhci5kMXtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwcGVhci5kMTI1e1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4yNXM7XG4gICAgICAgIH1cblxuICAgICAgICAuYXBwZWFyLmQxNTB7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBhcHBlYXJ7XG4gICAgICAgICAgdG97XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgcmV0dXJuIDxBcHAgey4uLnByb3BzfSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0TnByb2dyZXNzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwiY29sb3IiLCJzdGFydFBvc2l0aW9uIiwic3RvcERlbGF5TXMiLCJoZWlnaHQiLCJzaG93T25TaGFsbG93IiwiQXBwV3JhcHBlciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});