'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Form = require('material-ui/Form');

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Progress = require('material-ui/Progress');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowDropDown = require('material-ui-icons/ArrowDropDown');

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

var _ArrowDropUp = require('material-ui-icons/ArrowDropUp');

var _ArrowDropUp2 = _interopRequireDefault(_ArrowDropUp);

var _Clear = require('material-ui-icons/Clear');

var _Clear2 = _interopRequireDefault(_Clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleClearSelection = function (e) {
      _this.props.downshiftProps.clearSelection();

      // Hack to fix issue #9
      _this.input.focus();
      // this.input.blur();
    }, _this.handleToggleMenu = function (e) {
      var _this$props$downshift = _this.props.downshiftProps,
          isOpen = _this$props$downshift.isOpen,
          openMenu = _this$props$downshift.openMenu,
          closeMenu = _this$props$downshift.closeMenu;


      if (!isOpen) {
        _this.input.focus();
        openMenu();
      } else {
        closeMenu();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          getInputProps = _props.getInputProps,
          loading = _props.loading,
          downshiftProps = _props.downshiftProps;

      var _ref2 = getInputProps ? getInputProps(downshiftProps) : {},
          label = _ref2.label,
          labelProps = _ref2.labelProps,
          disabled = _ref2.disabled,
          inputProps = _objectWithoutProperties(_ref2, ['label', 'labelProps', 'disabled']);

      return _react2.default.createElement(
        _Form.FormControl,
        { disabled: disabled, fullWidth: true },
        label && _react2.default.createElement(
          _Input.InputLabel,
          labelProps,
          label
        ),
        _react2.default.createElement(_Input2.default, _extends({
          inputRef: function inputRef(input) {
            _this2.input = input;
          },
          endAdornment: !disabled && _react2.default.createElement(
            _Input.InputAdornment,
            { position: 'end' },
            !!downshiftProps.selectedItem && _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleClearSelection },
              _react2.default.createElement(_Clear2.default, null)
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleToggleMenu },
              downshiftProps.isOpen ? _react2.default.createElement(_ArrowDropUp2.default, null) : _react2.default.createElement(_ArrowDropDown2.default, null)
            )
          ),
          inputProps: {
            onFocus: downshiftProps.openMenu
          }
        }, downshiftProps.getInputProps(inputProps))),
        loading && _react2.default.createElement(_Progress.LinearProgress, {
          style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 2
          }
        })
      );
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;