"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.sizes = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledSVG = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .checkmark {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 50%;\n    stroke: ", ";\n    stroke-width: ", ";\n    stroke-miterlimit: 10;\n    animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n  }\n\n  .checkmark__circle {\n    stroke-dasharray: 166;\n    stroke-dashoffset: 166;\n    stroke-width: ", ";\n    stroke-miterlimit: 10;\n    stroke: ", ";\n    fill: none;\n    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n  }\n\n  .checkmark__check {\n    transform-origin: 50% 50%;\n    stroke-dasharray: 48;\n    stroke-dashoffset: 48;\n    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n  }\n\n  @keyframes stroke {\n    100% {\n      stroke-dashoffset: 0;\n    }\n  }\n\n  @keyframes scale {\n    0%,\n    100% {\n      transform: none;\n    }\n    50% {\n      transform: scale3d(1.1, 1.1, 1);\n    }\n  }\n\n  @keyframes fill {\n    100% {\n      box-shadow: inset 0 0 0 100vh ", ";\n    }\n  }\n"], ["\n  .checkmark {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 50%;\n    stroke: ", ";\n    stroke-width: ", ";\n    stroke-miterlimit: 10;\n    animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n  }\n\n  .checkmark__circle {\n    stroke-dasharray: 166;\n    stroke-dashoffset: 166;\n    stroke-width: ", ";\n    stroke-miterlimit: 10;\n    stroke: ", ";\n    fill: none;\n    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n  }\n\n  .checkmark__check {\n    transform-origin: 50% 50%;\n    stroke-dasharray: 48;\n    stroke-dashoffset: 48;\n    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n  }\n\n  @keyframes stroke {\n    100% {\n      stroke-dashoffset: 0;\n    }\n  }\n\n  @keyframes scale {\n    0%,\n    100% {\n      transform: none;\n    }\n    50% {\n      transform: scale3d(1.1, 1.1, 1);\n    }\n  }\n\n  @keyframes fill {\n    100% {\n      box-shadow: inset 0 0 0 100vh ", ";\n    }\n  }\n"])), function (props) { return props.checkColor; }, function (props) { return props.checkThickness; }, function (props) { return props.checkThickness; }, function (props) { return props.backgroundColor; }, function (props) { return props.backgroundColor; });
exports.sizes = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 52,
    xl: 72,
    xxl: 96
};
var Checkmark = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'lg' : _b, _c = _a.visible, visible = _c === void 0 ? true : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? '#7ac142' : _d, _e = _a.checkColor, checkColor = _e === void 0 ? '#FFF' : _e, _f = _a.checkThickness, checkThickness = _f === void 0 ? 5 : _f;
    var selectedSize = typeof size === 'number' ? size : exports.sizes[size];
    var style = { width: selectedSize, height: selectedSize };
    if (!visible)
        return <></>;
    return (<StyledSVG backgroundColor={backgroundColor} checkColor={checkColor} checkThickness={checkThickness}>
      <svg className='checkmark' xmlns='http://www.w3.org/2000/svg' style={style} viewBox='0 0 52 52'>
        <circle className='checkmark__circle' cx='26' cy='26' r='25' fill='none'/>
        <path className='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>
    </StyledSVG>);
};
exports["default"] = Checkmark;
var templateObject_1;
