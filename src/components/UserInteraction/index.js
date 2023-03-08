"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserInteraction_module_css_1 = __importDefault(require("./UserInteraction.module.css"));
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var UserInteraction = function (_a) {
    var onSend = _a.onSend, onTyping = _a.onTyping;
    var _b = (0, react_1.useState)(''), typedContent = _b[0], setTypedContent = _b[1];
    var handleSend = function () {
        if (typedContent)
            onSend(typedContent);
        setTypedContent('');
    };
    var handleTyping = function (event) {
        var _a, _b;
        var typed = (_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : undefined;
        setTypedContent(typed);
        if (onTyping) {
            onTyping(typed);
        }
    };
    return (react_1.default.createElement(material_1.Grid, { container: true, className: UserInteraction_module_css_1.default.messageContainer },
        react_1.default.createElement(material_1.Grid, { item: true, xs: 8 },
            react_1.default.createElement("input", { type: "text", value: typedContent, onChange: handleTyping, className: UserInteraction_module_css_1.default.messageInput })),
        react_1.default.createElement(material_1.Grid, { item: true, xs: 4 },
            react_1.default.createElement("button", { className: UserInteraction_module_css_1.default.button, onClick: handleSend }))));
};
exports.default = UserInteraction;
