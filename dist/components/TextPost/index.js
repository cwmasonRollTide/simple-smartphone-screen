"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var TextPost_module_css_1 = tslib_1.__importDefault(require("./TextPost.module.css"));
var material_1 = require("@mui/material");
var react_1 = tslib_1.__importDefault(require("react"));
var TextPost = function (_a) {
    var index = _a.index, message = _a.message;
    return (react_1.default.createElement(material_1.Box, { key: index, className: (0, clsx_1.default)(TextPost_module_css_1.default.post, message.from ? TextPost_module_css_1.default.received : TextPost_module_css_1.default.sent) },
        react_1.default.createElement(material_1.Typography, { variant: "h4" }, message.messageBody)));
};
exports.default = TextPost;
