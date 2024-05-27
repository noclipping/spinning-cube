"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/SpinningCube.tsx
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var spin = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);\n  }\n"])));
var Cube = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  transform-style: preserve-3d;\n  animation: ", " ", " infinite linear;\n"], ["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  transform-style: preserve-3d;\n  animation: ", " ", " infinite linear;\n"])), function (_a) {
    var size = _a.size;
    return "".concat(size, "px");
}, function (_a) {
    var size = _a.size;
    return "".concat(size, "px");
}, spin, function (_a) {
    var speed = _a.speed;
    return "".concat(speed, "s");
});
var Face = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  border: 2px solid ", ";\n"], ["\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  border: 2px solid ", ";\n"])), function (_a) {
    var size = _a.size;
    return "".concat(size, "px");
}, function (_a) {
    var size = _a.size;
    return "".concat(size, "px");
}, function (_a) {
    var color = _a.color;
    return color;
});
var SpinningCube = function (_a) {
    var size = _a.size, color = _a.color, speed = _a.speed;
    var halfSize = "".concat(size / 2, "px");
    return (react_1.default.createElement(Cube, { size: size, speed: speed },
        react_1.default.createElement(Face, { size: size, color: color, style: { transform: "rotateY(0deg) translateZ(".concat(halfSize, ")") } }),
        react_1.default.createElement(Face, { size: size, color: color, style: { transform: "rotateY(90deg) translateZ(".concat(halfSize, ")") } }),
        react_1.default.createElement(Face, { size: size, color: color, style: { transform: "rotateY(180deg) translateZ(".concat(halfSize, ")") } }),
        react_1.default.createElement(Face, { size: size, color: color, style: { transform: "rotateY(-90deg) translateZ(".concat(halfSize, ")") } }),
        react_1.default.createElement(Face, { size: size, color: color, style: { transform: "rotateX(90deg) translateZ(".concat(halfSize, ")") } }),
        react_1.default.createElement(Face, { size: size, color: color, style: { transform: "rotateX(-90deg) translateZ(".concat(halfSize, ")") } })));
};
exports.default = SpinningCube;
var templateObject_1, templateObject_2, templateObject_3;
