"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleSmartphoneComponent = SimpleSmartphoneComponent;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./SimpleSmartphoneComponent.css");
var _MessageDisplay = _interopRequireDefault(require("./MessageDisplay"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SimpleSmartphoneComponent(_ref) {
  var messages = _ref.messages,
    mainImageUrl = _ref.mainImageUrl;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "smartphone"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "smartphone-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-image-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: mainImageUrl,
    className: "main-image",
    alt: '/logo512.png'
  })), /*#__PURE__*/_react.default.createElement(_MessageDisplay.default, {
    messages: messages
  })));
}
SimpleSmartphoneComponent.propTypes = {
  mainImageUrl: _propTypes.default.string,
  messages: _propTypes.default.arrayOf({
    image: _propTypes.default.string,
    messageBody: _propTypes.default.string.isRequired
  })
};