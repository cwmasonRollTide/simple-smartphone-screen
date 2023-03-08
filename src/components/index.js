"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MessageDisplay_1 = __importDefault(require("./MessageDisplay"));
var react_1 = __importDefault(require("react"));
var UserInteraction_1 = __importDefault(require("./UserInteraction"));
var SimpleSmartphoneComponent_module_css_1 = __importDefault(require("./SimpleSmartphoneComponent.module.css"));
var material_1 = require("@mui/material");
var SimpleSmartphoneComponent = function (_a) {
    var onSend = _a.onSend, onTyping = _a.onTyping, messages = _a.messages, mainImageUrl = _a.mainImageUrl;
    return (react_1.default.createElement(material_1.Container, { className: SimpleSmartphoneComponent_module_css_1.default.smartphone },
        mainImageUrl && (react_1.default.createElement(material_1.Box, { justifyContent: "center", className: SimpleSmartphoneComponent_module_css_1.default.imgcontainer },
            react_1.default.createElement("img", { alt: 'Person', src: mainImageUrl, className: SimpleSmartphoneComponent_module_css_1.default.img, style: { justifySelf: "center" } }))),
        react_1.default.createElement(MessageDisplay_1.default, { messages: messages }),
        onSend &&
            react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(UserInteraction_1.default, { onSend: onSend, onTyping: onTyping ? onTyping : function () { } }))));
};
exports.default = SimpleSmartphoneComponent;
