'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetIdCounter = exports.stateChangeTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var MuiDownshift = function MuiDownshift(_ref) {
  var items = _ref.items,
      itemToString = _ref.itemToString,
      getRootProps = _ref.getRootProps,
      getInputProps = _ref.getInputProps,
      loading = _ref.loading,
      getListItem = _ref.getListItem,
      getListItemKey = _ref.getListItemKey,
      showEmpty = _ref.showEmpty,
      includeFooter = _ref.includeFooter,
      getInfiniteLoaderProps = _ref.getInfiniteLoaderProps,
      getVirtualListProps = _ref.getVirtualListProps,
      menuHeight = _ref.menuHeight,
      menuItemCount = _ref.menuItemCount,
      props = _objectWithoutProperties(_ref, ['items', 'itemToString', 'getRootProps', 'getInputProps', 'loading', 'getListItem', 'getListItemKey', 'showEmpty', 'includeFooter', 'getInfiniteLoaderProps', 'getVirtualListProps', 'menuHeight', 'menuItemCount']);

  return _react2.default.createElement(
    _reactPopper.Manager,
    null,
    _react2.default.createElement(
      _downshift2.default,
      _extends({
        itemCount: (items ? items.length : 0) + (includeFooter ? 1 : 0) // Needed for windowing
        , itemToString: itemToString
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
};

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