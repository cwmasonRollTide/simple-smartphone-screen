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
var TextPost_module_css_1 = __importDefault(require("./TextPost.module.css"));
var material_1 = require("@mui/material");
var TextPost = function TextPost(_a) {
  var index = _a.index,
    message = _a.message;
  return react_1.default.createElement(material_1.Box, {
    key: index,
    className: TextPost_module_css_1.default.sent
  }, react_1.default.createElement(material_1.Typography, {
    variant: "h4"
  }, message));
};
exports.default = TextPost;