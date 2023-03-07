"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SimpleSmartphoneComponent;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _MessageDisplay = _interopRequireDefault(require("./MessageDisplay"));
var _SimpleSmartphoneComponentModule = _interopRequireDefault(require("./SimpleSmartphoneComponent.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SimpleSmartphoneComponent(_ref) {
  var messages = _ref.messages,
    mainImageUrl = _ref.mainImageUrl;
  var exampleMessages = [{
    messageBody: "This is a message body - it is required"
  }, {
    messageBody: "This is a message without an image"
  }];
  return /*#__PURE__*/_react.default.createElement(_material.Container, {
    className: _SimpleSmartphoneComponentModule.default.smartphone
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    className: _SimpleSmartphoneComponentModule.default.smartphoneContainer
  }, mainImageUrl && /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    className: _SimpleSmartphoneComponentModule.default.mainImageContainer
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: mainImageUrl,
    className: _SimpleSmartphoneComponentModule.default.mainImage,
    alt: '/logo512.png'
  })), /*#__PURE__*/_react.default.createElement(_MessageDisplay.default, {
    messages: exampleMessages !== null && exampleMessages !== void 0 ? exampleMessages : messages
  })));
}
SimpleSmartphoneComponent.propTypes = {
  mainImageUrl: _propTypes.default.string,
  messages: _propTypes.default.arrayOf({
    image: _propTypes.default.string,
    messageBody: _propTypes.default.string.isRequired
  })
};