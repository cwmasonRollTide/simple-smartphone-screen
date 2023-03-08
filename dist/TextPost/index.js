"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextPost;
var _react = _interopRequireDefault(require("react"));
var _TextPostModule = _interopRequireDefault(require("./TextPost.module.css"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TextPost(_ref) {
  var index = _ref.index,
    message = _ref.message;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    key: index,
    className: _TextPostModule.default.bubble
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h4"
  }, message));
}