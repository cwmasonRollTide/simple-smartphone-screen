"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var UserInteraction_module_css_1 = tslib_1.__importDefault(require("./UserInteraction.module.css"));
var Send_1 = tslib_1.__importDefault(require("@mui/icons-material/Send"));
var material_1 = require("@mui/material");
var react_1 = tslib_1.__importStar(require("react"));
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
    var handleKeyDown = function (event) {
        if (event.key.toLowerCase() === "enter") {
            event.preventDefault();
            onSend(typedContent);
            setTypedContent('');
        }
    };
    return (react_1.default.createElement(material_1.Grid, { container: true, className: UserInteraction_module_css_1.default.container, onKeyDown: handleKeyDown },
        react_1.default.createElement(material_1.Box, { className: UserInteraction_module_css_1.default.text },
            react_1.default.createElement(material_1.TextField, { type: "text", variant: "outlined", value: typedContent, onChange: handleTyping, className: UserInteraction_module_css_1.default.input })),
        react_1.default.createElement(material_1.Box, { className: UserInteraction_module_css_1.default.btnctn },
            react_1.default.createElement(material_1.Button, { className: UserInteraction_module_css_1.default.button, onClick: handleSend, endIcon: react_1.default.createElement(Send_1.default, null) }))));
};
exports.default = UserInteraction;
