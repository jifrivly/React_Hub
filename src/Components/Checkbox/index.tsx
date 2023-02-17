import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

interface IItem {
  value: string;
  label: string;
}
interface ICustomCheckboxProps {
  list: IItem[];
}
interface ICheckboxList {
  [key: string]: { value: string; label: string; isChecked: boolean };
}

export function CustomCheckbox({ list }: ICustomCheckboxProps): ReactElement {
  const checkboxList: ICheckboxList = useMemo<ICheckboxList>(() => {
    console.log('🚀 ~ file: index.tsx:28 ~ CustomCheckbox ~ useMemo running');
    return list.reduce(
      (acc: ICheckboxList, item, index) => ({ ...acc, [item.value]: { ...item, isChecked: false } }),
      {}
    );
  }, [list]);

  const [listItems, setListItems] = useState<ICheckboxList>(checkboxList);

  useEffect(() => {
    console.log('🚀 ~ file: CustomCheckbox index.tsx:26 ~ useEffect ~ running - ', Date());
  });

  const toggleCheck = (itemValue: string): void => {
    console.log('🚀 ~ file: index.tsx:30 ~ toggleCheck ~ itemValue - ', itemValue);
    console.log('🚀 ~ file: index.tsx:27 ~ toggleCheck ~ selectedItem - ', checkboxList[itemValue]);
    const items = {
      ...listItems,
      [itemValue]: { ...listItems[itemValue], isChecked: !listItems[itemValue].isChecked },
    };
    setListItems(items);
    console.log('🚀 ~ file: index.tsx:27 ~ toggleCheck ~ selectedItem', checkboxList[itemValue]);
  };

  return (
    <div className='main-container'>
      <h4>Custom Checkbox 1</h4>
      <div className="checkbox-container">
        {Object.values(listItems).map((item, index) => (
          <div className="checkbox-input" key={index}>
            <input
              type="checkbox"
              id={String(index) + item.value}
              name={item.label}
              value={item.value}
              checked={item.isChecked}
              onChange={(e) => toggleCheck(e.target.value)}
            />
            <label htmlFor={String(index) + item.value}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

CustomCheckbox.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
};
