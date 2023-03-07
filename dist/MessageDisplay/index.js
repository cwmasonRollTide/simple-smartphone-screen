"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessageDisplay;
var _react = _interopRequireDefault(require("react"));
var _TextPost = _interopRequireDefault(require("../TextPost"));
var _ImagePost = _interopRequireDefault(require("../ImagePost"));
var _MessageDisplayModule = _interopRequireDefault(require("./MessageDisplay.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MessageDisplay(_ref) {
  var messages = _ref.messages;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _MessageDisplayModule.default.smartphoneConversation
  }, messages.map(function (message, index) {
    if (!message.image) {
      return /*#__PURE__*/_react.default.createElement(_TextPost.default, {
        message: message.messageBody,
        index: index
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_ImagePost.default, {
        messageBody: message.messageBody,
        mediaUrl: message.image
      });
    }
  }));
}