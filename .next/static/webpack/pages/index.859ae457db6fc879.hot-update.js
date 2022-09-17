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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": function() { return /* binding */ categories; },\n/* harmony export */   \"allProjects\": function() { return /* binding */ allProjects; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar categories = {\n    NFT: \"nft\",\n    INFRASTRUCTURE: \"infrastructure\",\n    DEFI: \"defi\",\n    MARKETPLACE: \"marketplace\",\n    BRIDGE: \"bridge\",\n    DEX: \"dex\"\n};\nvar allProjects = [\n    {\n        title: \"Diffusion Finance\",\n        url: \"hhttps://diffusion.fi/\",\n        description: \"Diffusion is an Automated Market Maker (AMM) protocol and liquidity pool designed for efficient trading between crypto-assets. The trading activity on Diffusion captures fees as revenue for liquidity providers, resulting in a decentralized market and trading experience. \",\n        image: \"/diffusion.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Connext\",\n        url: \"https://bridge.connext.network/\",\n        description: \"Connext is an interoperability protocol that empowers developers to build fully expressive cross domain apps (xApps) with a strong focus on security.\",\n        image: \"/connext.png\",\n        categories: [\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"Evmoswap\",\n        url: \"https://app.evmoswap.org/\",\n        description: \"EvmoSwap is a Decentralized Autonomous Organization (DAO) that offers a full suite of tools to explore and engage with decentralized finance opportunities.\",\n        image: \"/evmoswap.png\",\n        categories: [\n            categories.DEFI,\n            categories.BRIDGE,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"Earnmos \",\n        url: \"https://app.earnmos.fi/\",\n        description: \"Earnmos is the ALL IN ONE yield optimizer and booster on Evmos blockchain, which is dedicated to facilitating the investment experience and earning the best yield for users across all the blockchains.\",\n        image: \"/earnmos.jpeg\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Kinesis Lab \",\n        url: \"https://app.kinesislabs.co/\",\n        description: \"Kinesis Labs is the native stableswap on Evmos that is designed to become the stablecoin hub for all of Cosmos through low slippage and a unique multi-bridge base pool system.\",\n        image: \"/kinesis.jpeg\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"SpaceFi\",\n        url: \"https://spacefi.io/\",\n        description: \"SpaceFi is a cross-chain web3.0 platform, with DEX+Farm+NFT+Starter+Spacebase.\",\n        image: \"/spacefi.png\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.NFT\n        ]\n    },\n    {\n        title: \"Saddle Finance\",\n        url: \"https://saddle.finance/\",\n        description: \"Saddle is a decentralized automated market maker on the Ethereum blockchain, optimized for pegged value crypto assets such as stablecoins and wrapped BTC. \",\n        image: \"/Saddle finance.png\",\n        categories: [\n            categories.DEFI,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"AutoFarm(AUTO)\",\n        url: \"https://autofarm.network/\",\n        description: \"The Autofarm ecosystem is a one-stop DeFi suite for all users. Autofarm aggregate yield opportunities using vaults and best swap rates using a DEX aggregator (AutoSwap). In addition, other products such as AutoAnalytics, AutoTrade & AutoPortfolio are set to go live later in 2021. The platform is currently live on BSC, HECO, Polygon, Avalanche, Fantom & Moonriver, with more chains to be introduced soon. \",\n        image: \"/AutoFarm.jpeg\",\n        categories: [\n            categories.DEFI,\n            categories.DEX, \n        ]\n    },\n    {\n        title: \"PhotonSwap Finance\",\n        url: \"https://photonswap.finance/\",\n        description: \"AMM styled decentralized exchange (DEX) on Cronos \",\n        image: \"PhotonSwap Finance.png\",\n        categories: [\n            categories.DEFI,\n            categories.DEX,\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"Aave\",\n        url: \"https://aave.com/\",\n        description: \"Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets. Evmos will also enable cross-chain applications to leverage AAVE’s liquidity while being deployed to other Cosmos chains such as Terra. \",\n        image: \"Aave.png\",\n        categories: [\n            categories.DEFI, \n        ]\n    },\n    {\n        title: \"Dex Screener\",\n        url: \"https://dexscreener.com/evmos\",\n        description: \"Tracking and charting Evmos \",\n        image: \"Dex Screener.jpeg\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    },\n    {\n        title: \"Restake App\",\n        url: \"https://restake.app/evmos\",\n        description: \"REStake allows validators to auto-compound your staking rewards. \",\n        image: \"Restake App.jpeg\",\n        categories: [\n            categories.INFRASTRUCTURE, \n        ]\n    }, \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFFLENBQW9CO1FBQzNCQyxHQUFHLEVBQUUsQ0FBNkI7UUFDbENDLFdBQVcsRUFBRSxDQUFvRDtRQUNqRUMsS0FBSyxFQUFFLENBQXdCO1FBQy9CWCxVQUFVLEVBQUUsQ0FBQ0E7WUFBQUEsVUFBVSxDQUFDRyxJQUFJO1lBQUVILFVBQVUsQ0FBQ00sR0FBRztZQUFDTixVQUFVLENBQUNLLE1BQU07UUFBQSxDQUFDO0lBRWpFLENBQUM7SUFDRCxDQUFDO1FBQ0NHLEtBQUssRUFBRSxDQUFNO1FBQ2JDLEdBQUcsRUFBRSxDQUFtQjtRQUN4QkMsV0FBVyxFQUFFLENBQTZQO1FBQzFRQyxLQUFLLEVBQUUsQ0FBVTtRQUNqQlgsVUFBVSxFQUFFLENBQUNBO1lBQUFBLFVBQVUsQ0FBQ0csSUFBSTtRQUFDLENBQUM7SUFFaEMsQ0FBQztJQUNELENBQUM7UUFDQ0ssS0FBSyxFQUFFLENBQWM7UUFDckJDLEdBQUcsRUFBRSxDQUErQjtRQUNwQ0MsV0FBVyxFQUFFLENBQThCO1FBQzNDQyxLQUFLLEVBQUUsQ0FBbUI7UUFDMUJYLFVBQVUsRUFBRSxDQUFDQTtZQUFBQSxVQUFVLENBQUNFLGNBQWM7UUFBQyxDQUFDO0lBRTFDLENBQUM7SUFDRCxDQUFDO1FBQ0NNLEtBQUssRUFBRSxDQUFhO1FBQ3BCQyxHQUFHLEVBQUUsQ0FBMkI7UUFDaENDLFdBQVcsRUFBRSxDQUFtRTtRQUNoRkMsS0FBSyxFQUFFLENBQWtCO1FBQ3pCWCxVQUFVLEVBQUUsQ0FBQ0E7WUFBQUEsVUFBVSxDQUFDRSxjQUFjO1FBQUMsQ0FBQztJQUUxQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2R1bGVzL3Byb2plY3RzL2NvbnN0YW50cy50cz8xNjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0ge1xuICBORlQ6IFwibmZ0XCIsXG4gIElORlJBU1RSVUNUVVJFOiBcImluZnJhc3RydWN0dXJlXCIsXG4gIERFRkk6IFwiZGVmaVwiLFxuICBNQVJLRVRQTEFDRTogXCJtYXJrZXRwbGFjZVwiLFxuICBCUklER0U6IFwiYnJpZGdlXCIsXG4gIERFWCA6IFwiZGV4XCJcbiBcbn07XG5leHBvcnQgY29uc3QgYWxsUHJvamVjdHM6IFByb2plY3RbXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRpZmZ1c2lvbiBGaW5hbmNlXCIsXG4gICAgdXJsOiBcImhodHRwczovL2RpZmZ1c2lvbi5maS9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEaWZmdXNpb24gaXMgYW4gQXV0b21hdGVkIE1hcmtldCBNYWtlciAoQU1NKSBwcm90b2NvbCBhbmQgbGlxdWlkaXR5IHBvb2wgZGVzaWduZWQgZm9yIGVmZmljaWVudCB0cmFkaW5nIGJldHdlZW4gY3J5cHRvLWFzc2V0cy4gVGhlIHRyYWRpbmcgYWN0aXZpdHkgb24gRGlmZnVzaW9uIGNhcHR1cmVzIGZlZXMgYXMgcmV2ZW51ZSBmb3IgbGlxdWlkaXR5IHByb3ZpZGVycywgcmVzdWx0aW5nIGluIGEgZGVjZW50cmFsaXplZCBtYXJrZXQgYW5kIHRyYWRpbmcgZXhwZXJpZW5jZS4gXCIsXG4gICAgaW1hZ2U6IFwiL2RpZmZ1c2lvbi5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29ubmV4dFwiLFxuICAgIHVybDogXCJodHRwczovL2JyaWRnZS5jb25uZXh0Lm5ldHdvcmsvXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNvbm5leHQgaXMgYW4gaW50ZXJvcGVyYWJpbGl0eSBwcm90b2NvbCB0aGF0IGVtcG93ZXJzIGRldmVsb3BlcnMgdG8gYnVpbGQgZnVsbHkgZXhwcmVzc2l2ZSBjcm9zcyBkb21haW4gYXBwcyAoeEFwcHMpIHdpdGggYSBzdHJvbmcgZm9jdXMgb24gc2VjdXJpdHkuXCIsXG4gICAgaW1hZ2U6IFwiL2Nvbm5leHQucG5nXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuQlJJREdFXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkV2bW9zd2FwXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vYXBwLmV2bW9zd2FwLm9yZy9cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRXZtb1N3YXAgaXMgYSBEZWNlbnRyYWxpemVkIEF1dG9ub21vdXMgT3JnYW5pemF0aW9uIChEQU8pIHRoYXQgb2ZmZXJzIGEgZnVsbCBzdWl0ZSBvZiB0b29scyB0byBleHBsb3JlIGFuZCBlbmdhZ2Ugd2l0aCBkZWNlbnRyYWxpemVkIGZpbmFuY2Ugb3Bwb3J0dW5pdGllcy5cIixcbiAgICBpbWFnZTogXCIvZXZtb3N3YXAucG5nXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSSwgY2F0ZWdvcmllcy5CUklER0UsIGNhdGVnb3JpZXMuREVYLCBdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFYXJubW9zIFwiLFxuICAgIHVybDogXCJodHRwczovL2FwcC5lYXJubW9zLmZpL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVhcm5tb3MgaXMgdGhlIEFMTCBJTiBPTkUgeWllbGQgb3B0aW1pemVyIGFuZCBib29zdGVyIG9uIEV2bW9zIGJsb2NrY2hhaW4sIHdoaWNoIGlzIGRlZGljYXRlZCB0byBmYWNpbGl0YXRpbmcgdGhlIGludmVzdG1lbnQgZXhwZXJpZW5jZSBhbmQgZWFybmluZyB0aGUgYmVzdCB5aWVsZCBmb3IgdXNlcnMgYWNyb3NzIGFsbCB0aGUgYmxvY2tjaGFpbnMuXCIsXG4gICAgaW1hZ2U6IFwiL2Vhcm5tb3MuanBlZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkldLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJLaW5lc2lzIExhYiBcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9hcHAua2luZXNpc2xhYnMuY28vXCIsXG4gICAgZGVzY3JpcHRpb246IFwiS2luZXNpcyBMYWJzIGlzIHRoZSBuYXRpdmUgc3RhYmxlc3dhcCBvbiBFdm1vcyB0aGF0IGlzIGRlc2lnbmVkIHRvIGJlY29tZSB0aGUgc3RhYmxlY29pbiBodWIgZm9yIGFsbCBvZiBDb3Ntb3MgdGhyb3VnaCBsb3cgc2xpcHBhZ2UgYW5kIGEgdW5pcXVlIG11bHRpLWJyaWRnZSBiYXNlIHBvb2wgc3lzdGVtLlwiLFxuICAgIGltYWdlOiBcIi9raW5lc2lzLmpwZWdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLCBjYXRlZ29yaWVzLkRFWCwgY2F0ZWdvcmllcy5CUklER0VdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTcGFjZUZpXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vc3BhY2VmaS5pby9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTcGFjZUZpIGlzIGEgY3Jvc3MtY2hhaW4gd2ViMy4wIHBsYXRmb3JtLCB3aXRoIERFWCtGYXJtK05GVCtTdGFydGVyK1NwYWNlYmFzZS5cIixcbiAgICBpbWFnZTogXCIvc3BhY2VmaS5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLCBjYXRlZ29yaWVzLkRFWCwgY2F0ZWdvcmllcy5ORlRdLFxuXG4gIH0sXG4gIFxuICB7XG4gICAgdGl0bGU6IFwiU2FkZGxlIEZpbmFuY2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9zYWRkbGUuZmluYW5jZS9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTYWRkbGUgaXMgYSBkZWNlbnRyYWxpemVkIGF1dG9tYXRlZCBtYXJrZXQgbWFrZXIgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4sIG9wdGltaXplZCBmb3IgcGVnZ2VkIHZhbHVlIGNyeXB0byBhc3NldHMgc3VjaCBhcyBzdGFibGVjb2lucyBhbmQgd3JhcHBlZCBCVEMuIFwiLFxuICAgIGltYWdlOiBcIi9TYWRkbGUgZmluYW5jZS5wbmdcIixcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLCBjYXRlZ29yaWVzLkRFWCxdLFxuXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBdXRvRmFybShBVVRPKVwiLFxuICAgIHVybDogXCJodHRwczovL2F1dG9mYXJtLm5ldHdvcmsvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIEF1dG9mYXJtIGVjb3N5c3RlbSBpcyBhIG9uZS1zdG9wIERlRmkgc3VpdGUgZm9yIGFsbCB1c2Vycy4gQXV0b2Zhcm0gYWdncmVnYXRlIHlpZWxkIG9wcG9ydHVuaXRpZXMgdXNpbmcgdmF1bHRzIGFuZCBiZXN0IHN3YXAgcmF0ZXMgdXNpbmcgYSBERVggYWdncmVnYXRvciAoQXV0b1N3YXApLiBJbiBhZGRpdGlvbiwgb3RoZXIgcHJvZHVjdHMgc3VjaCBhcyBBdXRvQW5hbHl0aWNzLCBBdXRvVHJhZGUgJiBBdXRvUG9ydGZvbGlvIGFyZSBzZXQgdG8gZ28gbGl2ZSBsYXRlciBpbiAyMDIxLiBUaGUgcGxhdGZvcm0gaXMgY3VycmVudGx5IGxpdmUgb24gQlNDLCBIRUNPLCBQb2x5Z29uLCBBdmFsYW5jaGUsIEZhbnRvbSAmIE1vb25yaXZlciwgd2l0aCBtb3JlIGNoYWlucyB0byBiZSBpbnRyb2R1Y2VkIHNvb24uIFwiLFxuICAgIGltYWdlOiBcIi9BdXRvRmFybS5qcGVnXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSSwgY2F0ZWdvcmllcy5ERVgsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUGhvdG9uU3dhcCBGaW5hbmNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vcGhvdG9uc3dhcC5maW5hbmNlL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFNTSBzdHlsZWQgZGVjZW50cmFsaXplZCBleGNoYW5nZSAoREVYKSBvbiBDcm9ub3MgXCIsXG4gICAgaW1hZ2U6IFwiUGhvdG9uU3dhcCBGaW5hbmNlLnBuZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksIGNhdGVnb3JpZXMuREVYLGNhdGVnb3JpZXMuQlJJREdFXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQWF2ZVwiLFxuICAgIHVybDogXCJodHRwczovL2FhdmUuY29tL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFhdmUgaXMgYW4gb3BlbiBzb3VyY2UgYW5kIG5vbi1jdXN0b2RpYWwgbGlxdWlkaXR5IHByb3RvY29sIGZvciBlYXJuaW5nIGludGVyZXN0IG9uIGRlcG9zaXRzIGFuZCBib3Jyb3dpbmcgYXNzZXRzLiBFdm1vcyB3aWxsIGFsc28gZW5hYmxlIGNyb3NzLWNoYWluIGFwcGxpY2F0aW9ucyB0byBsZXZlcmFnZSBBQVZF4oCZcyBsaXF1aWRpdHkgd2hpbGUgYmVpbmcgZGVwbG95ZWQgdG8gb3RoZXIgQ29zbW9zIGNoYWlucyBzdWNoIGFzIFRlcnJhLiBcIixcbiAgICBpbWFnZTogXCJBYXZlLnBuZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRGV4IFNjcmVlbmVyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZGV4c2NyZWVuZXIuY29tL2V2bW9zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhY2tpbmcgYW5kIGNoYXJ0aW5nIEV2bW9zIFwiLFxuICAgIGltYWdlOiBcIkRleCBTY3JlZW5lci5qcGVnXCIsXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuSU5GUkFTVFJVQ1RVUkUsXSxcblxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUmVzdGFrZSBBcHBcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9yZXN0YWtlLmFwcC9ldm1vc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJFU3Rha2UgYWxsb3dzIHZhbGlkYXRvcnMgdG8gYXV0by1jb21wb3VuZCB5b3VyIHN0YWtpbmcgcmV3YXJkcy4gXCIsXG4gICAgaW1hZ2U6IFwiUmVzdGFrZSBBcHAuanBlZ1wiLFxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLklORlJBU1RSVUNUVVJFLF0sXG5cbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsIk5GVCIsIklORlJBU1RSVUNUVVJFIiwiREVGSSIsIk1BUktFVFBMQUNFIiwiQlJJREdFIiwiREVYIiwiYWxsUHJvamVjdHMiLCJ0aXRsZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/projects/constants.ts\n");

/***/ })

});