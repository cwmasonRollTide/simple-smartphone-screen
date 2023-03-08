"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = __importDefault(require("clsx"));
var TextPost_module_css_1 = __importDefault(require("./TextPost.module.css"));
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var TextPost = function (_a) {
    var index = _a.index, message = _a.message;
    return (react_1.default.createElement(material_1.Box, { key: index, className: (0, clsx_1.default)(TextPost_module_css_1.default.post, !message.from ? TextPost_module_css_1.default.sent : TextPost_module_css_1.default.received) },
        react_1.default.createElement(material_1.Typography, { variant: "h4" }, message.messageBody)));
};
exports.default = TextPost;
