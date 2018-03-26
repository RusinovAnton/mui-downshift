'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetIdCounter = exports.stateChangeTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _downshift = require('downshift');

var _downshift2 = _interopRequireDefault(_downshift);

var _reactPopper = require('react-popper');

var _List = require('material-ui/List');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MuiDownshift = function (_Component) {
  _inherits(MuiDownshift, _Component);

  function MuiDownshift() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MuiDownshift);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MuiDownshift.__proto__ || Object.getPrototypeOf(MuiDownshift)).call.apply(_ref, [this].concat(args))), _this), _this.selectItem = function (selectedItem, stateAndHelpers) {
      var _this$props = _this.props,
          name = _this$props.name,
          onSelect = _this$props.onSelect;


      onSelect({
        label: selectedItem && selectedItem.label,
        name: name,
        value: selectedItem && selectedItem.value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MuiDownshift, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          itemToString = _props.itemToString,
          getRootProps = _props.getRootProps,
          name = _props.name,
          onSelect = _props.onSelect,
          getInputProps = _props.getInputProps,
          loading = _props.loading,
          getListItem = _props.getListItem,
          getListItemKey = _props.getListItemKey,
          showEmpty = _props.showEmpty,
          includeFooter = _props.includeFooter,
          getInfiniteLoaderProps = _props.getInfiniteLoaderProps,
          getVirtualListProps = _props.getVirtualListProps,
          menuHeight = _props.menuHeight,
          menuItemCount = _props.menuItemCount,
          props = _objectWithoutProperties(_props, ['items', 'itemToString', 'getRootProps', 'name', 'onSelect', 'getInputProps', 'loading', 'getListItem', 'getListItemKey', 'showEmpty', 'includeFooter', 'getInfiniteLoaderProps', 'getVirtualListProps', 'menuHeight', 'menuItemCount']);

      return _react2.default.createElement(
        _reactPopper.Manager,
        null,
        _react2.default.createElement(
          _downshift2.default,
          _extends({
            itemCount: (items ? items.length : 0) + (includeFooter ? 1 : 0) // Needed for windowing
            , itemToString: itemToString,
            onSelect: this.selectItem
          }, props),
          function (downshiftProps) {
            return _react2.default.createElement(
              'div',
              getRootProps && getRootProps(),
              _react2.default.createElement(
                _reactPopper.Target,
                null,
                _react2.default.createElement(_Input2.default, { getInputProps: getInputProps, loading: loading, downshiftProps: downshiftProps })
              ),
              _react2.default.createElement(_Menu2.default, {
                items: items,
                getListItem: getListItem,
                getListItemKey: getListItemKey,
                showEmpty: showEmpty,
                includeFooter: includeFooter,
                getInfiniteLoaderProps: getInfiniteLoaderProps,
                getVirtualListProps: getVirtualListProps,
                menuItemCount: menuItemCount,
                menuHeight: menuHeight,
                downshiftProps: downshiftProps
              })
            );
          }
        )
      );
    }
  }]);

  return MuiDownshift;
}(_react.Component);

MuiDownshift.defaultProps = {
  itemToString: function itemToString(item) {
    return item ? item.label : '';
  },
  getListItem: function getListItem(_ref2) {
    var getItemProps = _ref2.getItemProps,
        item = _ref2.item,
        index = _ref2.index;

    return item ? _react2.default.createElement(
      _List.ListItem,
      _extends({ button: true }, getItemProps()),
      item.icon && _react2.default.createElement(
        _List.ListItemIcon,
        null,
        item.icon
      ),
      item.avatar && _react2.default.createElement(
        _List.ListItemAvatar,
        null,
        item.avatar
      ),
      _react2.default.createElement(_List.ListItemText, { primary: item.primary || item.label, secondary: item.secondary })
    ) : index === 0 ? _react2.default.createElement(
      _List.ListItem,
      { button: true, disabled: true },
      _react2.default.createElement(_List.ListItemText, { primary: _react2.default.createElement(
          'span',
          { style: { fontStyle: 'italic' } },
          'No items found'
        ) })
    ) : null; // TODO: should we handle this or require user to implement `getListItem` at this point (`includeFooter` or an array of null/undefined)?
  },

  menuItemCount: 5
};
MuiDownshift.propTypes = {
  items: _propTypes2.default.array,
  itemToString: _propTypes2.default.func,
  selectedItem: _propTypes2.default.object,
  getRootProps: _propTypes2.default.func,

  // Input
  getInputProps: _propTypes2.default.func,
  loading: _propTypes2.default.bool,

  // Menu
  getListItem: _propTypes2.default.func,
  getListItemKey: _propTypes2.default.func,
  showEmpty: _propTypes2.default.bool,
  includeFooter: _propTypes2.default.bool,
  getInfiniteLoaderProps: _propTypes2.default.func,
  getVirtualListProps: _propTypes2.default.func,
  menuHeight: _propTypes2.default.number,
  menuItemCount: _propTypes2.default.number
};
var stateChangeTypes = exports.stateChangeTypes = _downshift2.default.stateChangeTypes;
var resetIdCounter = exports.resetIdCounter = _downshift2.default.resetIdCounter;
exports.default = MuiDownshift;