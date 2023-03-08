"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var examples_1 = tslib_1.__importDefault(require("./examples"));
var client_1 = tslib_1.__importDefault(require("react-dom/client"));
var root = client_1.default.createRoot(document.getElementById("root"));
root.render(react_1.default.createElement(examples_1.default, null));
