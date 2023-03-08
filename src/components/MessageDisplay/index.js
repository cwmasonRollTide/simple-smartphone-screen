"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TextPost_1 = __importDefault(require("../TextPost"));
var material_1 = require("@mui/material");
var ImagePost_1 = __importDefault(require("components/ImagePost"));
var react_1 = __importDefault(require("react"));
var MessageDisplay_module_css_1 = __importDefault(require("./MessageDisplay.module.css"));
var MessageDisplay = function (_a) {
    var messages = _a.messages;
    var postFactory = function (message, index) {
        switch (message.media) {
            case null:
            case undefined:
                return react_1.default.createElement(TextPost_1.default, { index: index, message: message });
            default:
                return react_1.default.createElement(ImagePost_1.default, { message: message, index: index });
        }
    };
    return (react_1.default.createElement(material_1.Grid, { container: true, className: MessageDisplay_module_css_1.default.list }, messages.map(function (message, index) {
        return (react_1.default.createElement(material_1.Grid, { key: index, item: true, xs: 12, className: !message.from ? MessageDisplay_module_css_1.default.message : MessageDisplay_module_css_1.default.message }, postFactory(message, index)));
    })));
};
exports.default = MessageDisplay;
