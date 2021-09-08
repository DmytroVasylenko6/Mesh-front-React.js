import React, { useState } from 'react';
import { Select } from 'antd';
import classNames from 'classnames';
// const {Option} = Select;

export default function MeshSelect({
  children,
  className,
  defaultValue,
  value,
  placeholder,
  items,
  ...props
}) {
  const [selected, setSelected] = useState(value);
  const [opened, setOpened] = useState(false);
  // const [optionItems, setOptionItems] = useState(items);
  // const [customOptionAdded, setCustomOptionAdded] = useState(false);

  function handleSelect(val, option) {
    setSelected(option.children);

    if (props.onSelect) {
      props.onSelect(val, option);
    }
  }

  function handleDropdownVisibleChange(open) {
    setOpened(open);
  }

  // function addCustomOption (e) {
  //   setOptionItems(items => [...items, e.target.value]);
  //   setCustomOptionAdded(true);
  // }

  // function dropdownRender (menu) {
  //   return (
  //     <div>
  //       {menu}
  //       {!customOptionAdded && (
  //         <div className="ant-select-item ant-select-item--separated">
  //           <div className="ant-select-item-option-content">
  //             <Input
  //               placeholder="Other____"
  //               bordered={false}
  //               onPressEnter={addCustomOption} />
  //           </div>
  //         </div>
  //       )};
  //     </div>
  //   )
  // }

  return (
    <div className={classNames('mesh-select-wrapper', className)}>
      <div
        className={classNames('mesh-select', { 'is-opened': opened })}
        tabIndex="0">
        <span className="mesh-select-placeholder">
          {placeholder ?? 'Temp placeholder'}
        </span>
        <span className="mesh-select-selected">{selected}</span>
      </div>
      <Select
        removeIcon={null}
        onDropdownVisibleChange={handleDropdownVisibleChange}
        value={value}
        onSelect={handleSelect}
        dropdownClassName="mesh-select-dropdown"
        menuItemSelectedIcon=""
        // dropdownRender={dropdownRender}
        {...props}>
        {children}
        {/* {
          optionItems && optionItems.map((item, index) => (
            <Option key={index} value={item}>{item}</Option>
          ))
        } */}
      </Select>
    </div>
  );
}
