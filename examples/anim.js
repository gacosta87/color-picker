webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(11);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcColorPickerCorbin = __webpack_require__(20);
	
	var _rcColorPickerCorbin2 = _interopRequireDefault(_rcColorPickerCorbin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  { style: { margin: '20px 20px 20px', textAlign: 'center' } },
	  _react2.default.createElement(_rcColorPickerCorbin2.default, {
	    animation: 'slide-up',
	    color: '#36c',
	    onChange: changeHandler,
	    swatch: true
	  })
	), document.getElementById('__react-content'));

/***/ })
]);
//# sourceMappingURL=anim.js.map