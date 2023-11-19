"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var TextPost_1 = tslib_1.__importDefault(require("../TextPost"));
var ImagePost_1 = tslib_1.__importDefault(require("../ImagePost"));
var material_1 = require("@mui/material");
var MessageDisplay_module_css_1 = tslib_1.__importDefault(require("./MessageDisplay.module.css"));
var react_1 = tslib_1.__importDefault(require("react"));
var MessageDisplay = function (_a) {
    var messages = _a.messages;
    /**
     * TODO: Refactor to follow better design pattern once we have video example
     * @param message
     * @param index
     */
    var postFactory = function (message, index) {
        switch (message === null || message === void 0 ? void 0 : message.media) {
            case null:
            case undefined:
                return react_1.default.createElement(TextPost_1.default, { index: index, message: message });
            default:
                return react_1.default.createElement(ImagePost_1.default, { index: index, message: message });
        }
    };
    return (react_1.default.createElement(material_1.List, { className: MessageDisplay_module_css_1.default.list }, messages.map(function (message, index) {
        return (react_1.default.createElement(material_1.ListItem, { key: index, className: message.from ? MessageDisplay_module_css_1.default.messageFrom : MessageDisplay_module_css_1.default.messageTo }, postFactory(message, index)));
    })));
};
exports.default = MessageDisplay;
