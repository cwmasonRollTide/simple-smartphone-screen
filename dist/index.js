"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SimpleSmartphoneComponent;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _MessageDisplay = _interopRequireDefault(require("./MessageDisplay"));
var _SimpleSmartphoneComponentModule = _interopRequireDefault(require("./SimpleSmartphoneComponent.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SimpleSmartphoneComponent(messages, mainImageUrl) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _SimpleSmartphoneComponentModule.default.smartphone
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _SimpleSmartphoneComponentModule.default.smartphoneContainer
  }, mainImageUrl && /*#__PURE__*/_react.default.createElement("div", {
    className: _SimpleSmartphoneComponentModule.default.mainImageContainer
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: mainImageUrl,
    className: _SimpleSmartphoneComponentModule.default.mainImage,
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