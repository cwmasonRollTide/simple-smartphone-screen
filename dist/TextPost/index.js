"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextPost;
var _react = _interopRequireDefault(require("react"));
var _TextPost = _interopRequireDefault(require("./TextPost.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TextPost(_ref) {
  var index = _ref.index,
    message = _ref.message;
  return /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: _TextPost.default.smartphoneBubble
  }, message);
}