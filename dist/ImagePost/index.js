"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImagePost;
var _react = _interopRequireDefault(require("react"));
var _ImagePost = _interopRequireDefault(require("./ImagePost.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ImagePost(_ref) {
  var index = _ref.index,
    messageBody = _ref.messageBody,
    mediaUrl = _ref.mediaUrl;
  return /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: _ImagePost.default.smartphoneBubble
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: mediaUrl,
    className: _ImagePost.default.messageImage,
    alt: '/logo512.png'
  }), messageBody);
}