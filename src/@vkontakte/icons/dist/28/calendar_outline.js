"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _browserSymbol = _interopRequireDefault(require("svg-baker-runtime/browser-symbol"));

var _es6ObjectAssign = require("es6-object-assign");

var _sprite = _interopRequireDefault(require("../sprite"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 28 28';
var id = 'calendar_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="calendar_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19 1a1 1 0 0 1 1 1v1.16c.84.133 1.384.35 1.93.641A5.452 5.452 0 0 1 24.2 6.07c.475.889.748 1.77.794 3.93L25 10v7.308l-.005.61c-.041 2.22-.315 3.113-.796 4.013a5.452 5.452 0 0 1-2.268 2.268c-.978.523-1.948.801-4.623.801h-6.616l-.61-.005c-2.22-.041-3.113-.315-4.013-.796a5.452 5.452 0 0 1-2.268-2.268c-.502-.94-.778-1.87-.8-4.31L3 10.691V10c.053-2.16.326-3.042.801-3.93A5.452 5.452 0 0 1 6.07 3.8 5.679 5.679 0 0 1 8 3.16V2a1 1 0 1 1 2 0v1.007c.217-.005.447-.007.692-.007h6.616c.245 0 .476.002.694.007L18 2a1 1 0 0 1 1-1zm3.999 11H5v5.591l.01.57c.039 1.506.198 2.159.555 2.826.337.63.818 1.111 1.448 1.448.746.4 1.473.551 3.396.564h7.182l.57-.009c1.506-.039 2.159-.198 2.826-.555a3.453 3.453 0 0 0 1.448-1.448c.4-.746.551-1.473.564-3.396V12zm-3.953 5c.433 0 .774.081 1.059.234.285.152.509.376.661.661.153.285.234.626.234 1.059v.092c0 .433-.081.774-.234 1.059a1.59 1.59 0 0 1-.661.661c-.285.153-.626.234-1.059.234h-.092c-.433 0-.774-.081-1.059-.234a1.59 1.59 0 0 1-.661-.661c-.153-.285-.234-.626-.234-1.059v-.092c0-.433.081-.774.234-1.059a1.59 1.59 0 0 1 .661-.661c.285-.153.626-.234 1.059-.234h.092zM17.591 5H10.41L10 5.007V6a1 1 0 1 1-2 0v-.807c-.381.087-.683.21-.987.372a3.453 3.453 0 0 0-1.448 1.448c-.37.69-.527 1.365-.559 2.986L22.993 10l-.003-.16c-.039-1.507-.198-2.16-.555-2.827a3.453 3.453 0 0 0-1.448-1.448 3.835 3.835 0 0 0-.986-.372L20 6a1 1 0 0 1-2 0l.002-.994-.41-.005z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

if (_sprite.default) {
  var browserSymbol = new _browserSymbol.default({
    id: id,
    viewBox: viewBox,
    content: content
  });

  _sprite.default.add(browserSymbol);
}

function Icon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, _es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;