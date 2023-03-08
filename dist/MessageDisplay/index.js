"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessageDisplay;
var _react = _interopRequireDefault(require("react"));
var _TextPost = _interopRequireDefault(require("../TextPost"));
var _MessageDisplayModule = _interopRequireDefault(require("./MessageDisplay.module.css"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import ImagePost from "../ImagePost";

function MessageDisplay(_ref) {
  var messages = _ref.messages;
  return /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    className: _MessageDisplayModule.default.smartphoneConversation
  }, messages.map(function (message, index) {
    return /*#__PURE__*/_react.default.createElement(_material.Grid, {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(_TextPost.default, {
      index: index,
      message: message.messageBody
    }));
  }));
}