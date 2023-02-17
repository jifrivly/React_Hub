import React, { Fragment, ReactElement,  useState } from 'react';
import PropTypes from 'prop-types';
// import { FixedSizeList as List } from 'react-window';

import './style.css';

interface IItem {
  value: string;
  label: string;
}

interface ICustomCheckboxProps {
  options: IItem[];
  selectedOptions: string[];
  onOptionsChange: (selectedOptions: string[]) => void;
}

const VIEW_ITEM_COUNT = 15;

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export function CustomCheckbox2({ options, selectedOptions, onOptionsChange }: ICustomCheckboxProps): ReactElement {
  // const [listItems /** setListItems */] = useState<IItem[]>(options);
  // const [selectedItems, setSelectedItems] = useState<string[]>(selectedOptions ?? []);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(VIEW_ITEM_COUNT);
  const [itemsToShow, setItemsToShow] = useState<IItem[]>(options.slice(firstIndex, lastIndex));
  // const [currentPage, setCurrentPage] = useState(1);
  // const [scrollContainer, setScrollContainer] = useState<HTMLDivElement>();
  // const listInnerRef = useRef<Element>();

  // useEffect(() => {
  //   console.log('🚀 ~ file: CustomCheckbox index.tsx:26 ~ useEffect ~ running - ', Date());
  // });

  // useEffect(() => {
  //   console.log('🚀 ~ file: index.tsx:26 ~ CustomCheckbox2 ~ selectedItems - ', selectedItems);
  // }, [selectedItems]);

  // useEffect(() => {
  //   // Load the first page of items
  //   setItemsToShow(options.slice(0, 10));
  //   setCurrentPage(1);
  // }, []);

  // useEffect(() => {
  //   // Add the scroll event listener
  //   scrollContainer?.addEventListener(setCurrentPage'scroll', onScroll);
  //   console.log('🚀 ~ file: CustomCheckbox index.tsx:41 ~ useEffect ~ adding event listener ', { currentPage });
  //   return () => {
  //     // Remove the scroll event listener
  //     scrollContainer?.removeEventListener('scroll', onScroll);
  //   };
  // }, [currentPage, itemsToShow]);
  // }, [currentPage, items]);

  // const onScroll = (): void => {
  //   // Get the current scroll position
  //   const scrollTop = scrollContainer?.scrollTop ?? 0;
  //   // Get the current viewport height
  //   const clientHeight = scrollContainer?.clientHeight ?? 0;
  //   // Get the height of the entire scrollContainer
  //   const scrollHeight = scrollContainer?.scrollHeight ?? 0;

  //   console.log('🚀 ~ file: index.tsx:59 ~ onScroll ~ scrollContainer', scrollContainer);

  //   // If the user has scrolled to the bottom of the page, load the next page of items
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     // Increment the current page
  //     setCurrentPage(currentPage + 1);
  //     // Load the next page of items
  //     setItemsToShow(options.slice(currentPage * 15, (currentPage + 1) * 15));
  //   }
  // };

  const onLoadNextOrPreviousData = (nextOrPrevious: 'next' | 'previous'): void => {
    console.log('🚀 ~ file: index.tsx:73 ~ onLoadNextOrPreviousData ~ nextOrPrevious - ', nextOrPrevious);

    const newFirstIndex = nextOrPrevious === 'next' ? firstIndex + 10 : firstIndex - 10;
    const newLastIndex = nextOrPrevious === 'next' ? lastIndex + 10 : lastIndex - 10;
    setFirstIndex(newFirstIndex);
    setLastIndex(newLastIndex);
    setItemsToShow(options.slice(newFirstIndex, newLastIndex));
  };

  const onSelectionChange = (value: string): void => {
    const itemIndex = selectedOptions.findIndex((item) => item === value);
    const newList: string[] = [...selectedOptions];
    if (itemIndex === -1) newList.push(value);
    else newList.splice(itemIndex, 1);
    // console.log('🚀 ~ file: index.tsx:29 ~ onSelectionChange ~ newList', newList);
    // setSelectedItems(newList);
    onOptionsChange(newList);
  };

  // const { scrollTop, scrollHeight, clientHeight } = scrollContainer.current;
  return (
    <div className="main-container">
      <h4>Custom Checkbox 2</h4>
      {selectedOptions.map((item) => (
        <Fragment key={item}>{item} - </Fragment>
      ))}
      <br />
      Start to End - {firstIndex} to {lastIndex}
      <br />
      <div className="checkbox-container">
        <button onClick={() => onLoadNextOrPreviousData('previous')}>Load Previous</button>
        {itemsToShow.map((item, index) => (
          <div className="checkbox-input" key={String(index) + item.value}>
            <CheckboxInput
              label={item.label}
              value={item.value}
              checked={selectedOptions.includes(item.value)}
              onSelectionChange={onSelectionChange}
            />
          </div>
        ))}
        <button onClick={() => onLoadNextOrPreviousData('next')}>Load Next</button>
        {/* <List height={300} width={100} itemCount={listItems.length} itemSize={1}>
          {({ index, style }) => {
            const item = listItems[index];
            return (
              <CheckboxInput
                label={item.label}
                value={item.value}
                checked={selectedItems.includes(item.value)}
                onSelectionChange={onSelectionChange}
              />
            );
          }}
        </List> */}
      </div>
    </div>
  );
}

CustomCheckbox2.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
};

interface ICheckboxInputProps {
  label: string;
  value: string;
  checked?: boolean;
  onSelectionChange: (value: string) => void;
}

function CheckboxInput({ label, value, checked, onSelectionChange }: ICheckboxInputProps): ReactElement {
  // const [isChecked, setIsChecked] = useState(checked ?? false);
  // useEffect(() => console.log('🚀 ~ file: index.tsx:80 ~ useEffect ~ useEffect is running.'));

  const toggleCheck = (itemValue: string): void => {
    // setIsChecked(!isChecked);
    onSelectionChange(itemValue);
  };
  // return useMemo(() => {
  return (
    <>
      <input
        type="checkbox"
        id={value}
        name={label}
        value={value}
        checked={checked}
        onChange={(e) => toggleCheck(e.target.value)}
      />
      <label htmlFor={value}>{label}</label>
    </>
  );
  // }, [label, value, checked]);
}
