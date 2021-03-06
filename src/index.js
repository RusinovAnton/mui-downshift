import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { Manager, Target, Popper } from 'react-popper';
import { ListItem, ListItemText, ListItemIcon, ListItemAvatar } from 'material-ui/List';
import Input from './Input';
import Menu from './Menu';

class MuiDownshift extends Component {
  static defaultProps = {
    itemToString: item => (item ? item.label : ''),
    getListItem({ getItemProps, item, index }) {
      return item ? (
        <ListItem button {...getItemProps()}>
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          {item.avatar && <ListItemAvatar>{item.avatar}</ListItemAvatar>}

          <ListItemText primary={item.primary || item.label} secondary={item.secondary} />
        </ListItem>
      ) : index === 0 ? (
        <ListItem button disabled>
          <ListItemText primary={<span style={{ fontStyle: 'italic' }}>No items found</span>} />
        </ListItem>
      ) : null; // TODO: should we handle this or require user to implement `getListItem` at this point (`includeFooter` or an array of null/undefined)?
    },
    menuItemCount: 5,
  };

  static propTypes = {
    items: PropTypes.array,
    itemToString: PropTypes.func,
    selectedItem: PropTypes.object,
    getRootProps: PropTypes.func,

    // Input
    getInputProps: PropTypes.func,
    loading: PropTypes.bool,

    // Menu
    getListItem: PropTypes.func,
    getListItemKey: PropTypes.func,
    showEmpty: PropTypes.bool,
    includeFooter: PropTypes.bool,
    getInfiniteLoaderProps: PropTypes.func,
    getVirtualListProps: PropTypes.func,
    menuHeight: PropTypes.number,
    menuItemCount: PropTypes.number,
  };

  selectItem = (selectedItem, stateAndHelpers) => {
    const { name, onSelect } = this.props;

    onSelect({
      label: selectedItem && selectedItem.label,
      name,
      value: selectedItem && selectedItem.value,
    });
  };

  render() {
    const {
      items,
      itemToString,
      getRootProps,
      name,
      onSelect,

      // Input
      getInputProps,
      loading,

      // Menu
      getListItem,
      getListItemKey,
      showEmpty,
      includeFooter,
      getInfiniteLoaderProps,
      getVirtualListProps,
      menuHeight,
      menuItemCount,

      ...props
    } = this.props;

    return (
      <Manager>
        <Downshift
          itemCount={(items ? items.length : 0) + (includeFooter ? 1 : 0)} // Needed for windowing
          itemToString={itemToString}
          onSelect={this.selectItem}
          {...props}
        >
          {downshiftProps => (
            <div {...getRootProps && getRootProps()}>
              <Target>
                <Input getInputProps={getInputProps} loading={loading} downshiftProps={downshiftProps} />
              </Target>

              <Menu
                items={items}
                getListItem={getListItem}
                getListItemKey={getListItemKey}
                showEmpty={showEmpty}
                includeFooter={includeFooter}
                getInfiniteLoaderProps={getInfiniteLoaderProps}
                getVirtualListProps={getVirtualListProps}
                menuItemCount={menuItemCount}
                menuHeight={menuHeight}
                downshiftProps={downshiftProps}
              />
            </div>
          )}
        </Downshift>
      </Manager>
    );
  }
}

export const stateChangeTypes = Downshift.stateChangeTypes;
export const resetIdCounter = Downshift.resetIdCounter;
export default MuiDownshift;
