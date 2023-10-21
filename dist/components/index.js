"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var MessageDisplay_1 = tslib_1.__importDefault(require("./MessageDisplay"));
var UserInteraction_1 = tslib_1.__importDefault(require("./UserInteraction"));
var SimpleSmartphoneComponent_module_css_1 = tslib_1.__importDefault(require("./SimpleSmartphoneComponent.module.css"));
var react_1 = tslib_1.__importStar(require("react"));
var material_1 = require("@mui/material");
var SimpleSmartphoneComponent = function (_a) {
    var onSend = _a.onSend, onTyping = _a.onTyping, messages = _a.messages, mainImageUrl = _a.mainImageUrl;
    var listRef = (0, react_1.useRef)(null);
    var scrollToBottom = function () {
        if (listRef.current) {
            listRef.current.scrollIntoView({ behavior: 'auto' });
        }
    };
    (0, react_1.useEffect)(function () {
        scrollToBottom();
    }, [messages]);
    return (react_1.default.createElement(material_1.Container, { className: SimpleSmartphoneComponent_module_css_1.default.smartphone },
        mainImageUrl && (react_1.default.createElement(material_1.Box, { display: "flex", justifyContent: "center", alignItems: "center", p: 2 },
            react_1.default.createElement("img", { src: mainImageUrl, className: SimpleSmartphoneComponent_module_css_1.default.img }))),
        react_1.default.createElement(MessageDisplay_1.default, { messages: messages }),
        onSend &&
            react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(UserInteraction_1.default, { onSend: onSend, onTyping: onTyping ? onTyping : function () { } }),
                react_1.default.createElement(material_1.Box, { ref: listRef }))));
};
exports.default = SimpleSmartphoneComponent;
