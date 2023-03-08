"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ImagePost_module_css_1 = __importDefault(require("./ImagePost.module.css"));
var ImagePost = function (_a) {
    var index = _a.index, messageBody = _a.messageBody, mediaUrl = _a.mediaUrl;
    return (react_1.default.createElement("div", { key: index, className: ImagePost_module_css_1.default.smartphoneBubbleOnImagePost },
        react_1.default.createElement("img", { src: mediaUrl, className: ImagePost_module_css_1.default.messageImageOnImagePost, alt: '/logo512.png' }),
        messageBody));
};
