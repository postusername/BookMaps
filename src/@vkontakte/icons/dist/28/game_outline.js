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
var id = 'game_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="game_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M18 5c6.371 0 9 4.965 9 11 0 4.481-1.26 7-4 7-1.14 0-1.897-.481-2.758-1.493l-.163-.196c-.092-.113-.452-.569-.543-.68l-.156-.189C18.502 19.411 17.772 19 16.5 19h-5c-1.272 0-2.002.41-2.88 1.442l-.156.189c-.091.111-.451.567-.543.68l-.163.196C6.897 22.519 6.141 23 5 23c-2.74 0-4-2.519-4-7C1 9.965 3.629 5 10 5h8zm0 2h-8c-4.923 0-7 3.924-7 9 0 3.519.74 5 2 5 .42 0 .73-.194 1.238-.792l.557-.693.293-.358C8.32 17.707 9.544 17 11.5 17h5c1.956 0 3.18.707 4.412 2.157l.177.212.673.839c.507.598.818.792 1.238.792 1.26 0 2-1.482 2-5 0-5.076-2.077-9-7-9zM9.512 9.5c.191 0 .348.037.479.107.13.07.232.172.302.302.07.13.107.288.107.479l-.001 1.211 1.213.001c.191 0 .348.037.479.107.13.07.232.172.302.302.07.13.107.288.107.479v.024a.996.996 0 0 1-.107.479.727.727 0 0 1-.302.302.996.996 0 0 1-.479.107l-1.213-.001.001 1.213a.996.996 0 0 1-.107.479.727.727 0 0 1-.302.302.996.996 0 0 1-.479.107h-.024a.996.996 0 0 1-.479-.107.727.727 0 0 1-.302-.302.996.996 0 0 1-.107-.479L8.599 13.4l-1.211.001a.996.996 0 0 1-.479-.107.727.727 0 0 1-.302-.302.996.996 0 0 1-.107-.479v-.024c0-.191.037-.348.107-.479a.727.727 0 0 1 .302-.302.996.996 0 0 1 .479-.107l1.211-.001.001-1.211c0-.191.037-.348.107-.479a.727.727 0 0 1 .302-.302.996.996 0 0 1 .479-.107h.024zm9.062 4c.237 0 .386.037.517.107.13.07.232.172.302.302.07.13.107.28.107.517v.148c0 .237-.037.386-.107.517a.727.727 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.727.727 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517v-.148c0-.237.037-.386.107-.517a.727.727 0 0 1 .302-.302c.13-.07.28-.107.517-.107h.148zm-2-2c.237 0 .386.037.517.107.13.07.232.172.302.302.07.13.107.28.107.517v.148c0 .237-.037.386-.107.517a.727.727 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.727.727 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517v-.148c0-.237.037-.386.107-.517a.727.727 0 0 1 .302-.302c.13-.07.28-.107.517-.107h.148zm4 0c.237 0 .386.037.517.107.13.07.232.172.302.302.07.13.107.28.107.517v.148c0 .237-.037.386-.107.517a.727.727 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.727.727 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517v-.148c0-.237.037-.386.107-.517a.727.727 0 0 1 .302-.302c.13-.07.28-.107.517-.107h.148zm-2-2c.237 0 .386.037.517.107.13.07.232.172.302.302.07.13.107.28.107.517v.148c0 .237-.037.386-.107.517a.727.727 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.727.727 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517v-.148c0-.237.037-.386.107-.517a.727.727 0 0 1 .302-.302c.13-.07.28-.107.517-.107h.148z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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