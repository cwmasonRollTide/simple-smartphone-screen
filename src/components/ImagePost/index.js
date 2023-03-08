"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ImagePost_module_css_1 = tslib_1.__importDefault(require("./ImagePost.module.css"));
var material_1 = require("@mui/material");
var react_1 = tslib_1.__importDefault(require("react"));
var index_1 = tslib_1.__importDefault(require("../TextPost/index"));
var ImagePost = function (_a) {
    var message = _a.message, index = _a.index;
    return (react_1.default.createElement(material_1.Card, { key: index, className: ImagePost_module_css_1.default.post },
        react_1.default.createElement(material_1.CardMedia, { sx: { justifyItems: 'flex-start', justifyContent: 'flex-start', display: 'flex', float: 'flex-start' } },
            react_1.default.createElement("img", { src: message.media, alt: 'nothing', className: ImagePost_module_css_1.default.image })),
        react_1.default.createElement(material_1.CardContent, null,
            react_1.default.createElement(index_1.default, { index: index, message: message }))));
};
exports.default = ImagePost;
