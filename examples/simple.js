webpackJsonp([3,4],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-color-picker/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcColorPicker = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-color-picker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcColorPicker2 = _interopRequireDefault(_rcColorPicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	function closeHandler(colors) {
	  console.log(colors);
	}
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  { style: { margin: '20px 20px 20px', textAlign: 'center' } },
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'h4',
	    null,
	    'topLeft'
	  ),
	  _react2.default.createElement(
	    _rcColorPicker2.default,
	    {
	      color: '#36c',
	      alpha: 30,
	      onChange: changeHandler,
	      onClose: closeHandler,
	      placement: 'topLeft',
	      className: 'some-class'
	    },
	    _react2.default.createElement('span', { className: 'rc-color-picker-trigger' })
	  ),
	  _react2.default.createElement(
	    'h4',
	    null,
	    'topRight'
	  ),
	  _react2.default.createElement(_rcColorPicker2.default, { color: '#F10', onChange: changeHandler, placement: 'topRight' }),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2.default.createElement(
	    'h4',
	    null,
	    'bottomLeft'
	  ),
	  _react2.default.createElement(_rcColorPicker2.default, { color: '#0ad', alpha: 50, onChange: changeHandler, placement: 'bottomLeft' }),
	  _react2.default.createElement(
	    'h4',
	    null,
	    'bottomRight'
	  ),
	  _react2.default.createElement(_rcColorPicker2.default, { color: '#0F0', onChange: changeHandler, placement: 'bottomRight' })
	), document.getElementById('__react-content'));

/***/ })
]);
//# sourceMappingURL=simple.js.map