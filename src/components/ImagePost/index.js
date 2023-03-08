"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ImagePost_module_css_1 = __importDefault(require("./ImagePost.module.css"));
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var ImagePost = function (_a) {
    var message = _a.message, index = _a.index;
    return (react_1.default.createElement(material_1.Box, { key: index, className: ImagePost_module_css_1.default.smartphoneBubbleOnImagePost },
        react_1.default.createElement("img", { src: message.media, alt: 'nothing', className: ImagePost_module_css_1.default.messageImageOnImagePost }),
        react_1.default.createElement(material_1.Typography, { variant: "h4" }, message.messageBody)));
};
exports.default = ImagePost;
