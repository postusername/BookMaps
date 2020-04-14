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

var viewBox = '0 0 16 16';
var id = 'cancel_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="cancel_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M8 6.727l3.464-3.463a.9.9 0 1 1 1.272 1.272L9.273 8l3.463 3.464a.9.9 0 1 1-1.272 1.272L8 9.273l-3.464 3.463a.9.9 0 1 1-1.272-1.272L6.727 8 3.264 4.536a.9.9 0 0 1 1.272-1.272L8 6.727z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;