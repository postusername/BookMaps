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
var id = 'mail_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="mail_outline_28"><g fill="none" fill-rule="evenodd"><path opacity=".1" d="M0 0h28v28H0z" /><path d="M8.128 4l12.049.002c1.574.019 2.396.195 3.248.65a4.634 4.634 0 0 1 1.923 1.923c.484.905.652 1.776.652 3.553v7.744c0 1.777-.168 2.648-.652 3.553a4.634 4.634 0 0 1-1.923 1.923c-.905.484-1.776.652-3.553.652H8.128c-1.777 0-2.648-.168-3.553-.652a4.634 4.634 0 0 1-1.923-1.923C2.168 20.52 2 19.65 2 17.872l.002-8.049c.019-1.574.195-2.396.65-3.248a4.634 4.634 0 0 1 1.923-1.923C5.48 4.168 6.35 4 8.128 4zm15.56 3.728l-6.86 6.858a4 4 0 0 1-5.497.15l-.16-.15-6.858-6.858c-.23.515-.313 1.104-.313 2.4v7.744c0 1.475.108 2.034.416 2.61.255.478.624.847 1.102 1.102.508.272 1.003.388 2.126.411l.484.005h11.744c1.475 0 2.034-.108 2.61-.416a2.635 2.635 0 0 0 1.102-1.102c.272-.508.388-1.003.411-2.126l.005-.484v-7.744c0-1.296-.083-1.885-.313-2.4zM19.871 6H8.128c-1.296 0-1.885.083-2.4.313l6.858 6.859a2 2 0 0 0 2.701.116l.127-.116 6.858-6.86c-.515-.229-1.104-.312-2.4-.312z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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