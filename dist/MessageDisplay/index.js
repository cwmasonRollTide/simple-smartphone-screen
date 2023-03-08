"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
var TextPost_1 = __importDefault(require("../TextPost"));
// import ImagePost from "../ImagePost";
var material_1 = require("@mui/material");
var MessageDisplay_module_css_1 = __importDefault(require("./MessageDisplay.module.css"));
var MessageDisplay = function MessageDisplay(_a) {
  var messages = _a.messages;
  return react_1.default.createElement(material_1.Grid, {
    container: true,
    className: MessageDisplay_module_css_1.default.list
  }, messages.map(function (message, index) {
    return react_1.default.createElement(material_1.Grid, {
      key: index,
      item: true,
      xs: 12,
      className: MessageDisplay_module_css_1.default.message
    }, react_1.default.createElement(TextPost_1.default, {
      index: index,
      message: message.messageBody
    }));
  }));
};
exports.default = MessageDisplay;