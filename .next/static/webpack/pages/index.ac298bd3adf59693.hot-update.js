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

/***/ "./modules/projects/constants.ts":
/*!***************************************!*\
  !*** ./modules/projects/constants.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": function() { return /* binding */ categories; },\n/* harmony export */   \"allProjects\": function() { return /* binding */ allProjects; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar categories = {\n    NFT: \"nft\",\n    INFRASTRUCTURE: \"infrastructure\",\n    DEFI: \"defi\",\n    MARKETPLACE: \"marketplace\",\n    BRIDGE: \"bridge\",\n    DEX: \"dex\"\n};\nvar allProjects = [\n    {\n        title: \"Diffusion Finance\",\n        url: \"hhttps://diffusion.fi/\",\n        description: \"Diffusion is an Automated Market Maker (AMM) protocol and liquidity pool designed for efficient trading between crypto-assets. The trading activity on Diffusion captures fees as revenue for liquidity providers, resulting in a decentralized market and trading experience. \",\n        image: \"/diffusion.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Connext\",\n        url: \"https://bridge.connext.network/\",\n        description: \"Connext is an interoperability protocol that empowers developers to build fully expressive cross domain apps (xApps) with a strong focus on security.\",\n        image: \"/connext.png\",\n        categories: [\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"Evmoswap\",\n        url: \"https://app.evmoswap.org/\",\n        description: \"EvmoSwap is a Decentralized Autonomous Organization (DAO) that offers a full suite of tools to explore and engage with decentralized finance opportunities.\",\n        image: \"/evmoswap.png\",\n        categories: [\n            categories.DEFI,\n            categories.BRIDGE,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"Earnmos \",\n        url: \"https://app.earnmos.fi/\",\n        description: \"Earnmos is the ALL IN ONE yield optimizer and booster on Evmos blockchain, which is dedicated to facilitating the investment experience and earning the best yield for users across all the blockchains.\",\n        image: \"/earnmos.jpeg\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Kinesis Lab \",\n        url: \"https://app.kinesislabs.co/\",\n        description: \"Kinesis Labs is the native stableswap on Evmos that is designed to become the stablecoin hub for all of Cosmos through low slippage and a unique multi-bridge base pool system.\",\n        image: \"/kinesis.jpeg\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"SpaceFi\",\n        url: \"https://spacefi.io/\",\n        description: \"SpaceFi is a cross-chain web3.0 platform, with DEX+Farm+NFT+Starter+Spacebase.\",\n        image: \"/spacefi.png\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.NFT\n        ]\n    },\n    {\n        title: \"Saddle Finance\",\n        url: \"https://saddle.finance/\",\n        description: \"Saddle is a decentralized automated market maker on the Ethereum blockchain, optimized for pegged value crypto assets such as stablecoins and wrapped BTC. \",\n        image: \"/Saddle finance.png\",\n        categories: [\n            categories.DEFI,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"AutoFarm(AUTO)\",\n        url: \"https://autofarm.network/\",\n        description: \"The Autofarm ecosystem is a one-stop DeFi suite for all users. Autofarm aggregate yield opportunities using vaults and best swap rates using a DEX aggregator (AutoSwap). In addition, other products such as AutoAnalytics, AutoTrade & AutoPortfolio are set to go live later in 2021. The platform is currently live on BSC, HECO, Polygon, Avalanche, Fantom & Moonriver, with more chains to be introduced soon. \",\n        image: \"/AutoFarm.jpeg\",\n        categories: [\n            categories.DEFI,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"PhotonSwap Finance\",\n        url: \"https://photonswap.finance/\",\n        description: \"AMM styled decentralized exchange (DEX) on Cronos \",\n        image: \"PhotonSwa.jpeg\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.BRIDGE\n        ]\n    }, \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFFLENBQW9CO1FBQzNCQyxHQUFHLEVBQUUsQ0FBNkI7UUFDbENDLFdBQVcsRUFBRSxDQUFvRDtRQUNqRUMsS0FBSyxFQUFFLENBQWdCO1FBQ3ZCWCxVQUFVLEVBQUUsQ0FBQ0E7WUFBQUEsVUFBVSxDQUFDRyxJQUFJO1lBQUVILFVBQVUsQ0FBQ00sR0FBRztZQUFDTixVQUFVLENBQUNLLE1BQU07UUFBQSxDQUFDO0lBRWpFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvcHJvamVjdHMvY29uc3RhbnRzLnRzPzE2MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSB7XG4gIE5GVDogXCJuZnRcIixcbiAgSU5GUkFTVFJVQ1RVUkU6IFwiaW5mcmFzdHJ1Y3R1cmVcIixcbiAgREVGSTogXCJkZWZpXCIsXG4gIE1BUktFVFBMQUNFOiBcIm1hcmtldHBsYWNlXCIsXG4gIEJSSURHRTogXCJicmlkZ2VcIixcbiAgREVYIDogXCJkZXhcIlxuIFxufTtcbmV4cG9ydCBjb25zdCBhbGxQcm9qZWN0czogUHJvamVjdFtdID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGlmZnVzaW9uIEZpbmFuY2VcIixcbiAgICB1cmw6IFwiaGh0dHBzOi8vZGlmZnVzaW9uLmZpL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpZmZ1c2lvbiBpcyBhbiBBdXRvbWF0ZWQgTWFya2V0IE1ha2VyIChBTU0pIHByb3RvY29sIGFuZCBsaXF1aWRpdHkgcG9vbCBkZXNpZ25lZCBmb3IgZWZmaWNpZW50IHRyYWRpbmcgYmV0d2VlbiBjcnlwdG8tYXNzZXRzLiBUaGUgdHJhZGluZyBhY3Rpdml0eSBvbiBEaWZmdXNpb24gY2FwdHVyZXMgZmVlcyBhcyByZXZlbnVlIGZvciBsaXF1aWRpdHkgcHJvdmlkZXJzLCByZXN1bHRpbmcgaW4gYSBkZWNlbnRyYWxpemVkIG1hcmtldCBhbmQgdHJhZGluZyBleHBlcmllbmNlLiBcIixcbiAgICBpbWFnZTogXCIvZGlmZnVzaW9uLnBuZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkldLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb25uZXh0XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vYnJpZGdlLmNvbm5leHQubmV0d29yay9cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQ29ubmV4dCBpcyBhbiBpbnRlcm9wZXJhYmlsaXR5IHByb3RvY29sIHRoYXQgZW1wb3dlcnMgZGV2ZWxvcGVycyB0byBidWlsZCBmdWxseSBleHByZXNzaXZlIGNyb3NzIGRvbWFpbiBhcHBzICh4QXBwcykgd2l0aCBhIHN0cm9uZyBmb2N1cyBvbiBzZWN1cml0eS5cIixcbiAgICBpbWFnZTogXCIvY29ubmV4dC5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5CUklER0VdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRXZtb3N3YXBcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9hcHAuZXZtb3N3YXAub3JnL1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJFdm1vU3dhcCBpcyBhIERlY2VudHJhbGl6ZWQgQXV0b25vbW91cyBPcmdhbml6YXRpb24gKERBTykgdGhhdCBvZmZlcnMgYSBmdWxsIHN1aXRlIG9mIHRvb2xzIHRvIGV4cGxvcmUgYW5kIGVuZ2FnZSB3aXRoIGRlY2VudHJhbGl6ZWQgZmluYW5jZSBvcHBvcnR1bml0aWVzLlwiLFxuICAgIGltYWdlOiBcIi9ldm1vc3dhcC5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLCBjYXRlZ29yaWVzLkJSSURHRSwgY2F0ZWdvcmllcy5ERVgsIF0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkVhcm5tb3MgXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vYXBwLmVhcm5tb3MuZmkvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRWFybm1vcyBpcyB0aGUgQUxMIElOIE9ORSB5aWVsZCBvcHRpbWl6ZXIgYW5kIGJvb3N0ZXIgb24gRXZtb3MgYmxvY2tjaGFpbiwgd2hpY2ggaXMgZGVkaWNhdGVkIHRvIGZhY2lsaXRhdGluZyB0aGUgaW52ZXN0bWVudCBleHBlcmllbmNlIGFuZCBlYXJuaW5nIHRoZSBiZXN0IHlpZWxkIGZvciB1c2VycyBhY3Jvc3MgYWxsIHRoZSBibG9ja2NoYWlucy5cIixcbiAgICBpbWFnZTogXCIvZWFybm1vcy5qcGVnXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSV0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIktpbmVzaXMgTGFiIFwiLFxuICAgIHVybDogXCJodHRwczovL2FwcC5raW5lc2lzbGFicy5jby9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJLaW5lc2lzIExhYnMgaXMgdGhlIG5hdGl2ZSBzdGFibGVzd2FwIG9uIEV2bW9zIHRoYXQgaXMgZGVzaWduZWQgdG8gYmVjb21lIHRoZSBzdGFibGVjb2luIGh1YiBmb3IgYWxsIG9mIENvc21vcyB0aHJvdWdoIGxvdyBzbGlwcGFnZSBhbmQgYSB1bmlxdWUgbXVsdGktYnJpZGdlIGJhc2UgcG9vbCBzeXN0ZW0uXCIsXG4gICAgaW1hZ2U6IFwiL2tpbmVzaXMuanBlZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksIGNhdGVnb3JpZXMuREVYLCBjYXRlZ29yaWVzLkJSSURHRV0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwYWNlRmlcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9zcGFjZWZpLmlvL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwYWNlRmkgaXMgYSBjcm9zcy1jaGFpbiB3ZWIzLjAgcGxhdGZvcm0sIHdpdGggREVYK0Zhcm0rTkZUK1N0YXJ0ZXIrU3BhY2ViYXNlLlwiLFxuICAgIGltYWdlOiBcIi9zcGFjZWZpLnBuZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksIGNhdGVnb3JpZXMuREVYLCBjYXRlZ29yaWVzLk5GVF0sXG5cbiAgfSxcbiAgXG4gIHtcbiAgICB0aXRsZTogXCJTYWRkbGUgRmluYW5jZVwiLFxuICAgIHVybDogXCJodHRwczovL3NhZGRsZS5maW5hbmNlL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhZGRsZSBpcyBhIGRlY2VudHJhbGl6ZWQgYXV0b21hdGVkIG1hcmtldCBtYWtlciBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiwgb3B0aW1pemVkIGZvciBwZWdnZWQgdmFsdWUgY3J5cHRvIGFzc2V0cyBzdWNoIGFzIHN0YWJsZWNvaW5zIGFuZCB3cmFwcGVkIEJUQy4gXCIsXG4gICAgaW1hZ2U6IFwiL1NhZGRsZSBmaW5hbmNlLnBuZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksIGNhdGVnb3JpZXMuREVYLF0sXG5cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkF1dG9GYXJtKEFVVE8pXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vYXV0b2Zhcm0ubmV0d29yay9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgQXV0b2Zhcm0gZWNvc3lzdGVtIGlzIGEgb25lLXN0b3AgRGVGaSBzdWl0ZSBmb3IgYWxsIHVzZXJzLiBBdXRvZmFybSBhZ2dyZWdhdGUgeWllbGQgb3Bwb3J0dW5pdGllcyB1c2luZyB2YXVsdHMgYW5kIGJlc3Qgc3dhcCByYXRlcyB1c2luZyBhIERFWCBhZ2dyZWdhdG9yIChBdXRvU3dhcCkuIEluIGFkZGl0aW9uLCBvdGhlciBwcm9kdWN0cyBzdWNoIGFzIEF1dG9BbmFseXRpY3MsIEF1dG9UcmFkZSAmIEF1dG9Qb3J0Zm9saW8gYXJlIHNldCB0byBnbyBsaXZlIGxhdGVyIGluIDIwMjEuIFRoZSBwbGF0Zm9ybSBpcyBjdXJyZW50bHkgbGl2ZSBvbiBCU0MsIEhFQ08sIFBvbHlnb24sIEF2YWxhbmNoZSwgRmFudG9tICYgTW9vbnJpdmVyLCB3aXRoIG1vcmUgY2hhaW5zIHRvIGJlIGludHJvZHVjZWQgc29vbi4gXCIsXG4gICAgaW1hZ2U6IFwiL0F1dG9GYXJtLmpwZWdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLCBjYXRlZ29yaWVzLkRFWCxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQaG90b25Td2FwIEZpbmFuY2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9waG90b25zd2FwLmZpbmFuY2UvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQU1NIHN0eWxlZCBkZWNlbnRyYWxpemVkIGV4Y2hhbmdlIChERVgpIG9uIENyb25vcyBcIixcbiAgICBpbWFnZTogXCJQaG90b25Td2EuanBlZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksIGNhdGVnb3JpZXMuREVYLGNhdGVnb3JpZXMuQlJJREdFXSxcblxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJjYXRlZ29yaWVzIiwiTkZUIiwiSU5GUkFTVFJVQ1RVUkUiLCJERUZJIiwiTUFSS0VUUExBQ0UiLCJCUklER0UiLCJERVgiLCJhbGxQcm9qZWN0cyIsInRpdGxlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/projects/constants.ts\n");

/***/ })

});